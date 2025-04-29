import * as yup from "yup";
import { FormData } from "../types/headerTypes";

export const formSchema = yup.object().shape({
  checkIn: yup.date().required("validation.checkIn"),
  checkOut: yup
    .date()
    .required("validation.checkOut")
    .min(yup.ref("checkIn"), "validation.checkOutMin"),
  adults: yup.string().required("validation.adults"),
  children: yup.string().required("validation.children"),
}) as yup.ObjectSchema<FormData>; 