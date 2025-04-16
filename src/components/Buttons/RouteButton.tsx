import { Link } from "react-router-dom";
import { map } from "../../Constants/map";
import { useTranslation } from "react-i18next";
import cn from "classnames";
export const RouteButton = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <Link
      target="_blank"
      to={map.address}
      className={cn(
        `bg-black text-[12px] block  xl:text-[14px] text-white  py-3  xl:py-3 border  rounded-full font-cofo-medium  transition-all hover:bg-white hover:text-black uppercase ${className}`
      )}
    >
      {t("buttons.route")}
    </Link>
  );
};
