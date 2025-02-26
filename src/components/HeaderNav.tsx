import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import burgerMenu from "../assets/icons/burgerMenu.svg";

type HeaderNavToProps = {
  scrolled: boolean;
  logo: string;
  iconLogoStyle: string;
  isActiveLink:(path:string)=> string
  setIsShowRooms: Dispatch<SetStateAction<boolean>>;
};

export const HeaderNav = ({
  scrolled,
  logo,
  iconLogoStyle,
  setIsShowRooms,
  isActiveLink,
}: HeaderNavToProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <div className="flex lg:w-fit w-full">
      <div className="flex items-center font-cofo font-normal justify-between w-full">
        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex items-center gap-2">
            <img
              src={burgerMenu}
              alt="Закрити меню"
              className={` ${scrolled ? "filter-invert-gray " : ""}`}
            />
            <span
              className={`font-cofo text-sm ${
                scrolled ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              МЕНЮ
            </span>
          </div>
        </button>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={`${
              !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
            } md:w-[153px] md:h-[84px]  duration-300 ${iconLogoStyle} ms-5 lg:ms-0 lg:me-10`}
          />
        </Link>

        <button
          className={`bg-[#a33d2e] text-white px-3 py-2 lg:hidden rounded-3xl hover:bg-[#922b1f] font-cofo font-semibold text-[10px] md:text-[18px] hover:cursor-pointer ${
            scrolled ? "opacity-0" : "block"
          } `}
        >
          ЗАБРОНЮВАТИ {<span className="hidden md:inline">НОМЕР</span>}
        </button>

        <nav
          className="relative hidden xl:flex space-x-6 text-sm"
          onClick={() => setIsShowRooms(false)}
        >
          <Link to="/about" className={isActiveLink("/about")}>
            ПРО ГОТЕЛЬ
          </Link>

          <div
            className="relative"
            onMouseEnter={() => {
              if (scrolled) return;
              setIsShowRooms(true);
            }}
          >
            <Link
              to="/rooms"
              className={isActiveLink("/rooms")}
            >
              НОМЕРИ
            </Link>
          </div>

          <Link to="/conference-service" className={isActiveLink("/conference-service")}>
            КОНФЕРЕНЦ-СЕРВІС
          </Link>
          <Link to="/restaurant" className={isActiveLink("/restaurant")}>
            РЕСТОРАН
          </Link>
          <Link to="/special-offers" className={isActiveLink("/special-offers")}>
            СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
          </Link>
          <Link to="/contacts" className={isActiveLink("/contacts")}>
            КОНТАКТИ
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black  flex flex-col font-cofo items-center py-4 space-y-2 z-50 xl:hidden text-[]">
          <Link to="/about" onClick={() => setMenuOpen(false)} className={isActiveLink("/about")}>
            ПРО ГОТЕЛЬ
          </Link>
          <div className="relative">
            <Link
              to="/rooms"
              onMouseEnter={() => setIsShowRooms(true)}
              onMouseLeave={() => setIsShowRooms(false)}
              className={isActiveLink("/rooms")}
            >
              НОМЕРИ ▾
            </Link>
          </div>
          <Link to="/conference-service" onClick={() => setMenuOpen(false)} className={isActiveLink("/conference-service")}>
            КОНФЕРЕНЦ-СЕРВІС
          </Link>
          <Link to="/restaurant" onClick={() => setMenuOpen(false)} className={isActiveLink("/restaurant")}>
            РЕСТОРАН
          </Link>
          <Link to="/special-offers" onClick={() => setMenuOpen(false)} className={isActiveLink("/special-offers")}>
            СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
          </Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)} className={isActiveLink("/contacts")}>
            КОНТАКТИ
          </Link>
        </nav>
      )}
    </div>
  );
};
