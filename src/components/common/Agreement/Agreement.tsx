import { useTranslation } from "react-i18next";

export const Agreement = ({ handleAgree }: { handleAgree: () => void }) => {
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
    <div className="fixed bottom-0 left-0 w-full 2xl:h-[7vh] xl:h-[10vh] h-[8vh] flex flex-col   z-1000">
    <div className="mx-auto 2xl:w-[60vw] xl:w-[70vw] bg-gray-500/75 h-full rounded-t-2xl">
        <div className="flex  2xl:w-[90%] xl:w-[85%] items-center justify-center mx-auto h-full">
          <div className="flex flex-col  justify-between 2xl:w-[70%] xl:w-[100%]  w-[65%] gap-x-10 lg:gap-0">
            <p className="text-[#EDE8E5]  2xl:text-[0.73vw] xl:text-[1.09vw] w-[90%]  leading-[110%] text-[2.67vw]  ">
              <span>
              {t("agreement.title")}
              </span>
              <br className="lg:flex hidden"/>
              <button
                onClick={() => openPdf(pdfDocuments.pathPrivacyPolicy)}
                className={`text-[#EDE8E5] underline underline-offset-3  cursor-pointer ${isEng ? "inline" : "hidden"}
                 2xl:text-[0.73vw] xl:text-[1.09vw] leading-[120%] font-cofo-medium text-[2.67vw]`}
                style={{ textDecorationThickness: "1px" }}
              >
                {t("agreement.button")}
              </button>
              <span>
              {t("agreement.title2")}
              </span>
              <button
                onClick={() => openPdf(pdfDocuments.pathPrivacyPolicy)}
                className={`text-[#EDE8E5] underline underline-offset-3  cursor-pointer ${isEng ? "hidden" : "inline"}
                 2xl:text-[0.73vw] xl:text-[1.09vw] leading-[120%] font-cofo-medium text-[2.67vw]`}
                style={{ textDecorationThickness: "2px" }}
              >
                {t("agreement.button")}
              </button>
            
            </p>
            
          </div>
          <button
            onClick={handleAgree}
            className={` text-[12px] xl:text-[0.94vw]   2xl:xl:text-[0.73vw] text-white bg-[#8C331B] xl:w-[150px] xl:h-[36px] w-[113px] h-[32px] cursor-pointer flex items-center justify-center  2xl:w-[180px] 2xl:h-[36px]  rounded-full font-cofo-medium  transition-all hover:bg-white hover:text-black uppercase`}
          >
            {t("buttons.agree")}
          </button>
        </div>
      </div>
    </div>
  );
};
