import { useState } from "react";

import { CiGlobe } from "react-icons/ci";

import { useModalStore } from "../store/useModalStore";

import { HeaderSocial } from "./HeaderSocial";
import { HeaderNav } from "./HeaderNav";
import useNavbarStyles from "./Hooks/useHeaderStyle";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { openModalOrder } = useModalStore();

  const { styles, iconLogoStyle, logo, link, rightMenu, scrolled } = useNavbarStyles();

  return (
    <header>
      <div
        className={`fixed top-0 left-0 w-full py-4 px-6 flex lg:justify-around items-center font-cofo border-b-1 border-[#FFFFFF33] transition-colors duration-300 z-50 ${
          scrolled ? "bg-white text-black" : " text-white"
        }`}
      >
        <HeaderNav
          link={link}
          logo={logo}
          scrolled={scrolled}
          iconLogoStyle={iconLogoStyle}
        />

        <div className="flex items-center space-x-4">
          <div
            className={`${rightMenu} text-sm items-center hidden xl:inline-flex`}
          >
            <span className="me-1">
              <CiGlobe className="w-4 h-4" />
            </span>
            <span className="hover:cursor-pointer">UK</span>/
            <span className="hover:cursor-pointer">ENG</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`text-sm  font-cofo font-bold hover:cursor-pointer hidden xl:inline-flex ${rightMenu} `}
            >
              ЗАТЕЛЕФОНУВАТИ ▾
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-fit bg-white text-black rounded shadow-lg py-2 font-cofo">
                <a
                  href="#"
                  className="block px-4 whitespace-nowrap py-2 hover:bg-gray-100"
                >
                  +380 99 123 45 67
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  +380 97 765 43 21
                </a>
              </div>
            )}
          </div>

          <HeaderSocial styles={styles} />

          <button
            onClick={openModalOrder}
            className={`bg-[#a33d2e] text-white px-4 py-2 rounded-3xl hover:bg-[#922b1f] font-cofo font-semibold text-[13px] md:text-[18px] hover:cursor-pointer ${
              scrolled ? "lg:block hidden" : "block"
            } `}
          >
            ЗАБРОНЮВАТИ {<span className="hidden md:inline">НОМЕР</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
