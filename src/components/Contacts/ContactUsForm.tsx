import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormInput } from "@/components/Contacts/FormInput";
import { schema } from "@/schemas/contactUs";
import emailjs from "emailjs-com";
import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUsForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const templateParams = {
      user_email: data.email,
      user_name: data.name,
      user_message: data.message,
    };
    emailjs
      .send(
        "service_giyw17p",
        "template_zy7q4qv",
        templateParams,
        "0A61tJFFXJIR6r1M1"
      )
      .then(() => {
        toast.success(
          t("validation.contactUsSuccsses") || "Email sent successfully"
        );
        reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error(
          t("validation.contactUsError") ||
            "Failed to send email. Please try again later."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center md:items-start md:justify-start 2xl:ps-[4.43vw] xl:ps-[55px] md:ps-[30px] lg:pb-10 lg:pt-0 pb-[42px] pt-[50px] md:border-b-0 border-b border-[#C7C7C7]">
      <div className="flex flex-col items-center md:items-start w-[81%] xl:w-[82.8%]">
        <h2 className="uppercase font-cofo-medium lg:text-[36px] 2xl:text-[1.88vw] md:text-[28px] tracking-[-0.05em] text-[8.53vw] leading-[108.6%] lg:tracking-[-0.05em]">
          {t("contacts.info.writeUs")}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit, (err) => {
            Object.values(err).forEach((error) => {
              toast.error(error?.message ? t(error.message) : t("validation.genericError"));
            });
          })}
          className="lg:space-y-[14px] 2xl:pt-[1.61vw] lg:pt-[31px] pt-[22px] space-y-1.5 flex flex-col items-center md:items-start w-full"
        >
          <FormInput
            register={register}
            name="name"
            placeholder={t("contacts.info.name")}
          />

          <FormInput
            register={register}
            name="email"
            placeholder={t("contacts.info.email")}
          />

          <FormInput
            register={register}
            name="message"
            placeholder={t("contacts.info.message")}
          />

          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className="uppercase font-cofo-medium mt-[12px] 2xl:max-w-[27.24vw] w-full text-sm py-[9px] text-[12px] xl:text-[16px] 
            2xl:text-[0.83vw] text-white border border-[#A47762] hover:text-[#A47762] hover:bg-white bg-[#A47762] rounded-full lg:py-[15px]"
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
