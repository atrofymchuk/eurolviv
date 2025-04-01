import { useTranslation } from "react-i18next";
import cn from "classnames";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import { Link } from "react-router-dom";

type MobileMenuButtonProps = {
  toggleMenu: () => void;
  scrolled: boolean;
  pathname: string;
  isActiveLink: (path: string) => string;
};

export const MobileMenuButton = ({
  toggleMenu,
  scrolled,
  pathname,
  isActiveLink,
}: MobileMenuButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className="lg:hidden w-1/3 items-center justify-center flex">
      <button
        className={cn(` text-white text-2xl flex items-center gap-2 w-[94px]`)}
        onClick={toggleMenu}
      >
        <img
          src={burgerMenu}
          alt="menu"
          className={cn(
            pathname === "/contacts" || scrolled ? "filter-invert-gray" : ""
          )}
        />
        <span className={cn(` text-sm ${isActiveLink("/contacts")}`)}>
          {t("header.menu")}
        </span>
      </button>
    </div>
  );
};

type MobileBookingButtonProps = {
  scrolled: boolean;
};

export const MobileBookingButton = ({ scrolled }: MobileBookingButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-1/3 lg:fit items-center justify-center lg:hidden flex">
      <Link
        to="/booking"
        className={cn(
          `w-fit bg-[#a33d2e] text-white px-2 py-1 lg:hidden uppercase rounded-3xl hover:bg-[#922b1f] self-center
          font-cofo-medium text-[10px] justify-end h-fit
          ${scrolled ? "opacity-0" : ""}`,
          {
            "text-white": !scrolled,
            "text-black": scrolled,
          }
        )}
      >
        {t("buttons.bookRoomArr.0")}
        <span className="hidden lg:inline">{t("buttons.bookRoomArr.1")}</span>
      </Link>
    </div>
  );
}; 