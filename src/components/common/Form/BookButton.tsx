import { useTranslation } from "react-i18next";

export const BookButton: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mt-auto">
      <button
        type="submit"
        className="bg-[#A47762] my-auto text-[12px] hover:bg-[#8C331B] transition-colors 2xl:text-[0.83vw] xl:px-0  2xl:w-[11.77vw] xl:w-[12vw] 2xl:h-[2.40vw] xl:h-[2.81vw] 
         text-white uppercase font-cofo-medium lg:text-[12px] xl:text-[0.9vw] px-4.75 py-2.75 rounded-full whitespace-nowrap md:w-auto w-full"
      >
        {t("header.book")}
      </button>
    </div>
  );
}; 