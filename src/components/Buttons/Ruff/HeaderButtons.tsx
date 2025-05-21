import { links } from "@/Constants/Links";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const HeaderButtons = () => {
  const { t } = useTranslation();
  return (
    <div className="flex lg:flex-row flex-col w-fit lg:space-x-[13px] lg:space-y-0 space-y-[12px] lg:mt-[53px] mt-[30px] md:max-w-full max-w-[171px]">
      <Link
        to={links.menu}
        target="_blank"
        className="font-cofo-medium uppercase text-white bg-[#8C331B] text-[12px] md:text-[13px] lg:text-[14px]  lg:w-[184px]
   hover:cursor-pointer  md:py-[10.5px] text-center py-[11px] rounded-full text-md hover:text-[#8C331B] hover:bg-white"
      >
        {t("restaurant.menu.menu")}
      </Link>
      <Link
        to={links.bookTable}
        target="_blank"
        className="font-cofo-medium text-center uppercase px-[10px] py-[10px] border border-[#FFFFFF] text-[#FFFFFF] lg:w-[184px] hover:cursor-pointer md:py-[10.5px] rounded-4xl  md:text-[13px] lg:text-[14px] text-[12px] "
      >
        {t("buttons.bookTable")}
      </Link>
    </div>
  );
};
