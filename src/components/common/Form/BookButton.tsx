import { useTranslation } from "react-i18next";

export const BookButton: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mt-auto">
      <button
        type="submit"
        className="bg-[#A47762] my-auto text-[12px] hover:bg-[#8C331B] transition-colors xl:w-[226px] text-white uppercase font-cofo-medium lg:text-[16px] px-4.75 py-2.75 rounded-full whitespace-nowrap md:w-auto w-full"
      >
        {t("header.book")}
      </button>
    </div>
  );
}; 