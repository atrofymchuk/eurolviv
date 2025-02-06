import { useEffect, useState } from "react";
import viber from "../assets/icons/viber.svg";
import telegram from "../assets/icons/telegram.svg";
import whatsup from "../assets/icons/whatsup.svg";
import burgerMenu from "../assets/icons/burgerMenu.svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CiGlobe } from "react-icons/ci";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-around items-center font-cofo border-b-1 border-[black] transition-colors duration-300 z-50 ${scrolled ? "bg-white text-black" : "bg-black text-white"}`}>
      <div className="flex items-center space-x-8 font-cofo font-normal">
        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex items-center gap-2">
            <img src={burgerMenu} alt="Закрити меню" className={`${scrolled ? 'filter-invert-gray' :''}`} />
            <span className={`font-cofo text-sm ${scrolled ? 'text-black' : 'text-[#FFFFFF]'}`}>МЕНЮ</span>
          </div>
        </button>
        <div className="flex ">

         <div className="flex justify-end w-full ">
         <img src={logo} alt="logo" className={`w-[68px] h-[40px] md:w-[153px] md:h-[84px]  duration-300 ${scrolled ? "filter invert "  : ""}`} />
         </div>
        </div>
        <nav className={`hidden xl:flex space-x-6 text-sm text-[${scrolled ? '#2525269E': '#FFFFFF9E'}]`}>
          <Link to="/about" className="hover:text-gray-400">
            ПРО ГОТЕЛЬ
          </Link>
          <Link to="" className="hover:text-gray-400">
            НОМЕРИ
          </Link>
          <Link to="" className="hover:text-gray-400">
            КОНФЕРЕНЦ-СЕРВІС
          </Link>
          <Link to="" className="hover:text-gray-400">
            РЕСТОРАН
          </Link>
          <Link to="" className="hover:text-gray-400">
            СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
          </Link>
          <Link to="" className="hover:text-gray-400">
            КОНТАКТИ
          </Link>
        </nav>
      </div>
      {menuOpen && (
        <nav className={`absolute top-full left-0 w-full bg-black  flex flex-col font-cofo items-center py-4 space-y-2 z-50 xl:hidden text-[${scrolled ? '#2525269E': '#FFFFFF9E'}]`}>
          <Link to="/about" className="hover:text-gray-400">
            ПРО ГОТЕЛЬ
          </Link>
          <Link to="" className="hover:text-gray-400">
            НОМЕРИ
          </Link>
          <Link to="" className="hover:text-gray-400">
            КОНФЕРЕНЦ-СЕРВІС
          </Link>
          <Link to="" className="hover:text-gray-400">
            РЕСТОРАН
          </Link>
          <Link to="" className="hover:text-gray-400">
            СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
          </Link>
          <Link to="" className="hover:text-gray-400">
            КОНТАКТИ
          </Link>
        </nav>
      )}
      <div className="flex items-center space-x-4">
        <div className="text-sm items-center hidden xl:inline-flex">
          <span className="me-1">
            <CiGlobe className="w-4 h-4" />
          </span>
          <span className="hover:cursor-pointer">UK</span>/
          <span className="hover:cursor-pointer">ENG</span>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-sm hover:text-gray-400 font-cofo font-bold hover:cursor-pointer hidden xl:inline-flex"
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
        <div className="space-x-2 items-center hidden xl:flex">
          <span className={`${scrolled ? 'bg-[#252526]': 'bg-[#FFFFFF]'} p-1.5 rounded-full hover:cursor-pointer`}>
            <img src={telegram} alt="tg" className={`${scrolled ? 'filter-invert-white':'filter-invert-brown'}`}/>
          </span>
          <span className={`${scrolled ? 'bg-[#252526]': 'bg-[#FFFFFF]'} p-1.5 rounded-3xl hover:cursor-pointer`}>
            <img src={whatsup} alt="whatsup" className={`${scrolled ? 'filter-invert-white':'filter-invert-brown'}`} />
          </span>
          <span className={`${scrolled ? 'bg-[#252526]': 'bg-[#FFFFFF]'} p-1.5 rounded-3xl hover:cursor-pointer`}>
              <img src={viber} alt="viber" className={`${scrolled ? 'filter-invert-white':'filter-invert-brown'}`}/>
          </span>
        </div>
        <button className="bg-[#a33d2e] text-white px-4 py-2 rounded-3xl hover:bg-[#922b1f] font-cofo font-semibold text-[13px] md:text-[18px] hover:cursor-pointer ">
          ЗАБРОНЮВАТИ {<span className="hidden md:inline">НОМЕР</span>}
        </button>
      </div>
    </header>
  );
}
