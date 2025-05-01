import * as yup from "yup";
const phoneRegExp =/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/



export const validationSchema = yup.object().shape({
  
    date: yup.date().required("orderModal.errors.date"),
    name: yup
      .string()
      .required("orderModal.errors.name")
      .min(2, "validation.nameShort"),
    phone: yup
      .string()
      .matches(phoneRegExp, "orderModal.errors.tel2")
      .required("orderModal.errors.tel"),
    email: yup
      .string()
      .email("orderModal.errors.email2")
      .required("orderModal.errors.email"),
    guests: yup.number().min(0, "orderModal.errors.guests"),
    needRooms: yup.boolean(),
  });
