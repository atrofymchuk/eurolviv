import { useState } from "react";
import { useModalStore } from "../store/useModalStore";
import { HeaderSocial } from "./HeaderSocial";
import useNavbarStyles from "./Hooks/useHeaderStyle";
import { HeaderNav } from "./HeaderNav";
import { CiGlobe } from "react-icons/ci";
import { useRoomStore } from "../store/useRoomsStore";
import { RoomsListHeader } from "./RoomsListHeader";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { onOpenModal } = useModalStore();
  const { rooms } = useRoomStore();
  const {
    styles,
    iconLogoStyle,
    logo,
    rightMenu,
    scrolled,
    isShowRooms,
    setIsShowRooms,
    isActiveLink,
  } = useNavbarStyles();

  return (
    <header
      className="relative w-full flex flex-col "
      onMouseLeave={() => setIsShowRooms(false)}
    >
      <div
        className={`fixed top-0 left-0 w-full py-4  px-6 flex lg:justify-around items-center font-cofo border-b border-[#FFFFFF33] transition-colors duration-300 z-50   
          ${scrolled ? "bg-white text-black" : "text-white"}
          ${isShowRooms ? "bg-[#252526]/93" : ""}
        `}
      >

          <HeaderNav
            logo={logo}
            scrolled={scrolled}
            iconLogoStyle={iconLogoStyle}
            setIsShowRooms={setIsShowRooms}
            isActiveLink={isActiveLink}
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
              className={`text-sm font-cofo font-bold hover:cursor-pointer hidden xl:inline-flex ${rightMenu}`}
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
            onClick={()=>onOpenModal('order')}
            className={`bg-[#a33d2e] text-white px-4 py-2 lg:block hidden rounded-3xl hover:bg-[#922b1f] font-cofo font-semibold text-[13px] md:text-[18px] hover:cursor-pointer ${
              scrolled ? "lg:block hidden" : "block"
            } `}
          >
            ЗАБРОНЮВАТИ {<span className="hidden md:inline">НОМЕР</span>}
          </button>
        </div>
      </div>

      {isShowRooms && !scrolled && (
        <div
          className={`fixed lg:top-[117px] left-0 w-full p-4 pt-0 z-90 shadow-[0px_4px_86.4px_0px_#252526] bg-[#252526]/93 ${
            scrolled ? "top-[81px]" : "top-[73px]"
          }`}
        >
          <div className="flex items-center justify-center">
            <div className="w-[1825px]  grid lg:grid-cols-4 lg:h-[574px] grid-cols-2">
              {rooms.slice(0, 4).map((el, index) => (
                <RoomsListHeader room={el} key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
