import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function ContactMeForm() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error(t("validation.email") || "Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error(t("validation.emailInvalid") || "Please enter a valid email");
      return;
    }

    const templateParams = {
      user_email: email,
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
        setEmail("");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error(
          t("validation.contactUsError") ||
            "Failed to send email. Please try again later."
        );
      });
  };

  return (
    <div className="z-100">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[329px] xl:w-[25.703vw] 2xl:w-[24.948vw] flex flex-col items-center"
      >
        <input
          type="email"
          placeholder={t("footer.email")}
          value={email}
          onChange={handleEmailChange}
          className="bg-[#B5B5B52B] 2xl:text-[0.833vw] lg:py-[13px] lg:ps-[21px] w-full py-2.25 px-3 mb-2.5 2xl:mb-[0.52vw] rounded-full font-cofo mt-4.25 lg:mt-[22px] 2xl:mt-[1.146vw]"
        />
        <button
          type="submit"
          className="bg-[#A47762] 2xl:max-h-[2.4vw] font-cofo-medium border uppercase border-[#A47762] hover:bg-[#ffff] 
        hover:text-[#A47762] py-2 px-6 rounded-full 2xl:text-[0.938vw] block w-full font-cofo hover:cursor-pointer"
        >
          {t("buttons.send")}
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        style={{ zIndex: 2000 }}
        autoClose={5000}
      />
    </div>
  );
}
