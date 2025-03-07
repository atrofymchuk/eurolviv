import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}


export default function ContactUsForm() {
  const { t } = useTranslation();
  
  const schema = yup.object().shape({
    name: yup.string().required(t("validation.name")).min(2, t("validation.nameShort")),
    email: yup.string().email(t("validation.emailInvalid")).required(t("validation.email")),
    message: yup.string().required(t("validation.message"))
  });
  const {
    register,
    handleSubmit,
    formState: {  isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Sending data:", data);
      toast.success(t("validation.contactUsSuccsses")); 
      reset(); 
    } catch (err) {
      console.error("Error sending data:", err);
      toast.error(t("validation.contactUsError")); 
    }
  };

  return (
    <div className="xl:ps-[95px] md:ps-[40px] flex flex-col items-center md:items-start lg:pb-10 lg:pt-0 pb-[42px] pt-[50px] md:border-b-0 border-b border-[#C7C7C7]">
      <div className="flex flex-col items-center md:items-start w-full">
        <h2 className="uppercase font-cofo lg:text-[39px] text-[32px] lg:tracking-[-0.05em]">
          {t("contacts.info.writeUs")}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit, (err) => {
            Object.values(err).forEach((error) => {
              toast.error(error.message);
            });
          })}
          className="lg:space-y-[14px] lg:pt-[31px] space-y-1.5 flex flex-col items-center md:items-start w-full"
        >
          <input
            {...register("name")}
            type="text"
            placeholder={t("contacts.info.name")}
            className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px] text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px]"
          />

          <input
            {...register("email")}
            type="text"
            placeholder={t("contacts.info.email")}
            className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px] text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px]"
          />

          <input
            {...register("message")}
            type="text"
            placeholder={t("contacts.info.message")}
            className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px] text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px]"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="uppercase font-cofo mt-[12px] 2xl:max-w-[523px] w-full text-sm py-[9px] font-semibold text-white border border-[#A47762] hover:text-[#A47762] hover:bg-white bg-[#A47762] rounded-full lg:py-[15px]"
          >
            {isSubmitting ? t("buttons.sending") : t("buttons.send")}
          </button>
        </form>
      </div>
      <ToastContainer
          position="top-right"
          style={{ zIndex: 100 }}
          autoClose={5000}
        />
    </div>
  );
}
