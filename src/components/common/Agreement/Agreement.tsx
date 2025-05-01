import { useTranslation } from "react-i18next";

export const Agreement = ({handleAgree}: {handleAgree: () => void}) => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const openPdf = (path: string) => {
    window.open(path, "_blank");
  };

  const pdfDocuments = {
    pathPublicOffer: isEng
      ? "/documents/Public offer agreement.pdf"
      : "/documents/Договір публічної оферти .pdf",
    pathPrivacyPolicy: isEng
      ? "/documents/Privacy Policy.pdf"
      : "/documents/Політика конфіденційності.pdf",
  };

  return (
    <div className="fixed bottom-0 left-0 w-full 2xl:h-[14vh] h-[16vh] flex flex-col  bg-[#8C331B]/75 z-50">
      <div className=" absolute 2xl:w-[90%] xl:w-[95%] mx-auto h-full border-x border-[#C7C7C7] self-center -z-1 w-[90%]"></div>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-[#EDE8E5] text-center 2xl:text-[0.94vw] xl:text-[16px] 2xl:w-[50%] uppercase leading-[140%] text-[3.2vw] ">
          {t("agreement.title")}
          <button
            onClick={() => openPdf(pdfDocuments.pathPrivacyPolicy)}
            className="text-[#EDE8E5] underline underline-offset-3 px-1 uppercase cursor-pointer 2xl:text-[0.94vw] xl:text-[16px] leading-[140%] font-cofo-medium text-[3.2vw]"
            style={{ textDecorationThickness: "2px" }}
          >
            {t("agreement.button")}
          </button>
        </p>
        <p className="text-[#EDE8E5] text-center 2xl:text-[0.94vw] 2xl:w-[40%] uppercase xl:text-[16px] leading-[140%] text-[3.2vw] w-[80%] mt-2">
          {t("agreement.title2")}
        </p>
        <button
          onClick={handleAgree}
          className={` text-[12px]   xl:text-[14px] text-white xl:w-[190px] xl:h-[42px] w-[113px] h-[32px]  flex items-center justify-center border mt-2 2xl:w-[203px] 2xl:mt-3 2xl:h-[46px] xl:mt-2  rounded-full font-cofo-medium  transition-all hover:bg-white hover:text-black uppercase`}
        >
          {t("buttons.agree")}
        </button>
      </div>
    </div>
  );
};
