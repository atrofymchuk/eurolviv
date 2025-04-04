import * as yup from "yup";
export const schema = yup.object().shape({
    name: yup
      .string()
      .required("validation.name")
      .min(2, "validation.nameShort"),
    email: yup
      .string()
      .email("validation.emailInvalid")
      .required("validation.email"),
    message: yup.string().required("validation.message"),
  });