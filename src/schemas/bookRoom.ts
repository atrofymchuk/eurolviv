import * as yup from "yup";
import { FormData } from "../types/headerTypes";

export const formSchema = yup.object().shape({
  checkIn: yup.date().required("validation.checkIn"),
  checkOut: yup
    .date()
    .required("validation.checkOut")
    .test(
      'is-after-check-in',
      'validation.checkOutAfterCheckIn',
      function(value) {
        const { checkIn } = this.parent;
        if (!checkIn || !value) return true; 
        return new Date(value) > new Date(checkIn);
      }
    ),
  adults: yup.string().required("validation.adults"),
  children: yup.string().required("validation.children"),
}) as yup.ObjectSchema<FormData>; 