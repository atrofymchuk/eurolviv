import { useState } from "react";
import { useRoomStore } from "../../store/useRoomsStore";
import { HeaderSocial } from "./HeaderSocial";
import useNavbarStyles from "../Hooks/useHeaderStyle";
import { HeaderNav } from "./HeaderNav";
import { useTranslation } from "react-i18next";
import { ChangeLangButton } from "./ChangeLangButton";
import useLanguage from "../Hooks/useLanguage";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import cn from "classnames";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { rooms } = useRoomStore();
  const {
    styles,
    iconLogoStyle,
    pathname,
    logo,
    rightMenu,
    scrolled,
    isShowRooms,
    setIsShowRooms,
    isActiveLink,
  } = useNavbarStyles();

  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();

  const isEng = i18n.language === "en";

  return (
    <header
      className=" fixed inset-0 z-50 h-fit flex items-center justify-center max-w-screen "
      onMouseLeave={() => setIsShowRooms(false)}
    >
      <div
        className={cn(
          "fixed top-0 left-0 right-0     flex justify-between items-center 2xl:h-[6.93vw] lg:h-[9.08vw] h-[25.33vw] transition-colors duration-300 z-50 border-b border-[#FFFFFF]/20",
          {
            "bg-white text-black": scrolled,
            "text-white": !scrolled,
          }
        )}
      >
        <div className=" flex items-center justify-center h-full mx-auto 2xl:w-[89%] lg:mx-[20px] xl:mx-auto ">
          <div className="flex items-center xl:space-x-4 space-x-3  w-full h-full justify-between">
            <HeaderNav
              {...{
                logo,
                scrolled,
                iconLogoStyle,
                setIsShowRooms,
                isActiveLink,
                rightMenu,
                styles,
                pathname,
                changeLanguage,
                rooms,
                isShowRooms,
                menuOpen,
                setMenuOpen,
              }}
            />
            <div className=" items-center   hidden lg:flex ">
              <div
                className={cn(`relative flex items-center xl:pt-[18px] 2xl:pt-[1.15vw] 2xl:me-[1.56vw] xl:me-[1.25vw] lg:me-[1.17vw]`, {
                  "": !isEng,
                  "2xl:space-x-[115px] xl:space-x-[50px]": isEng,
                })}
              >
                <ChangeLangButton
                  changeLanguage={changeLanguage}
                  isMobile={false}
                  scrolled={scrolled}
                  pathname={pathname}
                />
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={cn(
                    `whitespace-nowrap uppercase  hidden xl:flex items-center  font-cofo-medium hover:cursor-pointer ${rightMenu}`
                  )}
                >
                  <span
                    className={cn(`2xl:text-[0.83vw] xl:text-[0.94vw]`, {
                      "text-white": !scrolled && pathname !== "/contacts",
                      "text-[#252526]": scrolled,
                    })}
                  >
                    {t("header.callUs")}
                  </span>
                  <span>
                    <RiArrowDownSLine />
                  </span>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 top-full bg-white text-black rounded shadow-lg py-2 font-cofo-medium  "
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {["+380 99 123 45 67", "+380 97 765 43 21"].map(
                      (phone, index) => (
                        <a
                          key={index}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {phone}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>

              <HeaderSocial styles={styles} />

              <Link
                to={"/booking"}
                className={cn(
                  `uppercase bg-[#8C331B] 2xl:mt-[1.3vw] xl:mt-[0.94vw] xl:text-[0.94vw]  text-white px-3 text-center items-center justify-center
                   py-2 rounded-full hover:bg-[#922b1f] font-cofo-medium lg:text-[0.98vw] text-[12px] 2xl:text-[0.73vw] 2xl:w-[9.95vw] 2xl:h-[2.03vw]
                    hover:cursor-pointer hidden lg:flex`,
                  {
                    "lg:flex ": scrolled,
                    flex: !scrolled,
                    "2xl:w-[7.55vw]!": isEng,
                  }
                )}
              >
                {t("header.book")
                  .split(" ")
                  .map((word, index) => (
                    <span
                      className={cn(
                        `uppercase ${
                          index === 1
                            ? "lg:flex hidden 2xl:text-[0.73vw] xl:text-[0.94vw] lg:text-[0.98vw]"
                            : ""
                        }`,
                        {
                          "lg:flex hidden": scrolled,
                          flex: !scrolled,
                        }
                      )}
                      key={index}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
