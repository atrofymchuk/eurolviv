import * as yup from "yup";
import { FormData } from "../types/headerTypes";

export const formSchema = yup.object().shape({
  checkIn: yup.date().required("validation.checkIn"),
  checkOut: yup
    .date()
    .required("validation.checkOut")
    .min(yup.ref("checkIn"), "validation.checkOutMin"),
  guests: yup.string().required("validation.guests"),
}) as yup.ObjectSchema<FormData>; 