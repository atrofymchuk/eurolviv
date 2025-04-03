import cn from "classnames";
import { NavLinks } from "./NavLinks";
import { ChangeLangButton } from "./ChangeLangButton";
import { Room } from "../../types/types";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { IoClose } from "react-icons/io5";
import { BookLink } from "../Buttons/BookLink";
import { SocialIcons } from "./SocialIcons";

type MobileNavigationProps = {
  menuOpen: boolean;
  scrolled: boolean;
  navLinks: Array<{ path: string; label: string }>;
  isActiveLink: (path: string) => string;
  handleMouseEnterRooms: () => void;
  handleMouseLeaveRooms: () => void;
  isShowRooms: boolean;
  rooms: Room[];
  setMenuOpen: (value: boolean) => void;
  changeLanguage: () => void;
  handleMouseEnterRestaurant: () => void;
  logo: string;
  handleMouseLeaveRestaurant: () => void;
  isShowRestaurant: boolean;
  iconLogoStyle: string;
};

export const MobileNavigation = ({
  menuOpen,
  scrolled,
  navLinks,
  isActiveLink,
  handleMouseEnterRooms,
  handleMouseLeaveRooms,
  isShowRooms,
  logo,
  rooms,
  iconLogoStyle,
  setMenuOpen,
  changeLanguage,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
  isShowRestaurant,
}: MobileNavigationProps) => {
  const { t } = useTranslation();

  if (!menuOpen) return null;

  return (
    <nav
      className={cn(
        `fixed top-0 left-0 h-full bg-white flex flex-col   z-50 xl:hidden animate-fadeIn overflow-y-scroll  
         w-[77.867vw] sm:w-[320px]`
      )}
    >
      <div className="w-full flex flex-col  px-[21px_27px] justify-between mt-[51px] h-full">
        <div>
          <div className="mb-[30px] flex items-center justify-between">
            <Logo
              logo={logo}
              iconLogoStyle={iconLogoStyle}
              scrolled={scrolled}
              className="w-full self-start justify-start "
              iconClassName="w-[99px] h-[54px]"
              isMobile={true}
            />
            <IoClose
              size={32}
              onClick={() => setMenuOpen(false)}
              color="#C7C7C7"
              className="cursor-pointer"
            />
          </div>

          <div className="mb-[33px]">
            <ChangeLangButton
              scrolled={scrolled}
              changeLanguage={changeLanguage}
              isMobile={true}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-[8px] ">
            <NavLinks
              navLinks={navLinks}
              isActiveLink={isActiveLink}
              handleMouseEnterRooms={handleMouseEnterRooms}
              handleMouseLeaveRooms={handleMouseLeaveRooms}
              isShowRooms={isShowRooms}
              rooms={rooms}
              setMenuOpen={setMenuOpen}
              handleMouseEnterRestaurant={handleMouseEnterRestaurant}
              handleMouseLeaveRestaurant={handleMouseLeaveRestaurant}
              isShowRestaurant={isShowRestaurant}
              isMobile={true}
            />

            <BookLink
              to="/booking"
              className=" bg-[#A47762] text-white uppercase font-cofo-medium text-[10px] px-[6.25px] py-[6px] mt-[22px] "
            >
              {t("buttons.book")}
            </BookLink>
          </div>
        </div>

        <div className="mt-[30px]">
          <div className="w-full flex flex-col items-start space-y-6">
            <div>
              <h4 className="text-[12px]  font-cofo-medium text-[#252526] uppercase ">
                {t("footer.reception")}
              </h4>
              <p className="text-[12px] text-[#8F8F8F] uppercase   mt-1 mb-[14px]">
                {t("contacts.info.receptionPhone")}
              </p>
              <p className="text-[#252526] text-sm">+38 (073) 242 40 02</p>
            </div>

            <SocialIcons type="hotel" />
          </div>

          <div className="mb-[40px]">
            <div>
              <h4 className="text-[12px]  font-cofo-medium text-[#252526] uppercase mt-[44px]">
                {t("footer.restaurant")}/{t("footer.terrace")}
              </h4>
              <p className="text-[12px] text-[#8F8F8F] uppercase   mt-1 mb-[14px]">
                {t("contacts.info.receptionPhone")}
              </p>
              <p className="text-[#252526] text-sm">+38 (093) 348 31 14</p>
            </div>

            <SocialIcons type="restaurant" className="mt-[30px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};
