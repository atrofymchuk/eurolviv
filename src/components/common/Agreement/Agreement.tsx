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
      <div className="mx-auto 2xl:w-[40vw] xl:w-[50vw] bg-gray-500/75 h-full rounded-t-2xl w-full">
        <div className="flex  2xl:w-[90%] xl:w-[90%] items-center justify-center mx-auto h-full ">
          <div
            className={`flex flex-col justify-between 2xl:w-[70%] xl:w-[100%] gap-x-10 lg:gap-0 w-[70%]`}
          >
            <p
              className={`text-[#EDE8E5]  2xl:text-[0.73vw] xl:text-[1.09vw]  leading-[110%] text-[2.13vw] ${
                isEng ? "2xl:w-[55%] xl:w-[60%]" : "2xl:w-[70%] xl:w-[70%]"
              }  `}
            >
              <span className=""> {t("agreement.title")}</span>
              <br className={`${isEng ? "lg hidden" : "lg:hidden"}`} />
              <span
                onClick={() => openPdf(pdfDocuments.pathPrivacyPolicy)}
                className={`text-[#EDE8E5] underline underline-offset-1 inline cursor-pointer ${
                  isEng ? "inline" : ""
                }
                 2xl:text-[0.73vw] xl:text-[1.09vw] leading-[120%] font-cofo-medium text-[2.13vw] `}
                style={{ textDecorationThickness: "1px" }}
              >
                {t("agreement.button")}
              </span>
              <br />
              <div className="mt-[0.25px] 2xl:w-[130%] xl:w-[140%]">
                {t("agreement.title2")}
              </div>
            </p>
          </div>
          <button
            onClick={handleAgree}
            className={` text-[10px] xl:text-[0.94vw]   2xl:xl:text-[0.73vw] text-white bg-[#8C331B] xl:w-[190px] xl:h-[36px] w-[90px] h-[32px] cursor-pointer flex items-center justify-center  2xl:w-[180px] 2xl:h-[36px]  rounded-full font-cofo-medium 
               transition-all hover:bg-white hover:text-black uppercase`}
          >
            {t("buttons.agree")}
          </button>
        </div>
      </div>
    </div>
  );
};
