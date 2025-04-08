import * as yup from "yup";

export const validationSchema = yup.object().shape({
    date: yup.date().required("orderModal.errors.date"),
    name: yup
      .string()
      .required("orderModal.errors.name")
      .min(2, "validation.nameShort"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "orderModal.errors.tel2")
      .required("orderModal.errors.tel"),
    email: yup
      .string()
      .email("orderModal.errors.email2")
      .required("orderModal.errors.email"),
    guests: yup.string().required("orderModal.errors.guests"),
    needRooms: yup.boolean(),
  });
