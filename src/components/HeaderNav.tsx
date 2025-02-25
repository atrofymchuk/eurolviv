import { useState } from "react";

import burgerMenu from "../assets/icons/burgerMenu.svg";
import { Link } from "react-router-dom";
import { RoomsListHeader } from "./RoomsListHeader";

type HeaderNavToProps = {
    scrolled:boolean
    logo:string
    link:string
    iconLogoStyle:string
}


export const HeaderNav = ({scrolled, logo, link, iconLogoStyle}:HeaderNavToProps) =>{
  
    const [menuOpen, setMenuOpen] = useState(false);
    const [isShowRooms, setIsShowRooms] = useState(false);
  
    return (
        <div>
        <div className="flex items-center space-x-8 font-cofo font-normal">
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
                  <div className="flex">
                    <div
                      className={`flex justify-end  md:w-[153px] md:h-[84px]  ${
                        !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
                      }`} 
                    >
                      <img
                        src={logo}
                        alt="logo"
                        className={`${
                          !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
                        } md:w-[153px] md:h-[84px]  duration-300 ${iconLogoStyle} `}
                      />
                    </div>
                  </div>
                  <nav
                    className="relative hidden xl:flex space-x-6 text-sm"
                    onMouseLeave={() => setIsShowRooms(false)}
                  >
                    <Link to="/about" className={` ${link}`}>
                      ПРО ГОТЕЛЬ
                    </Link>
        
                    <div className="relative" onMouseEnter={() => setIsShowRooms(true)}>
                      <Link to="/rooms" className={` ${link}`}>
                        НОМЕРИ
                      </Link>
        
                      {isShowRooms && (
                        <div
                          onMouseEnter={() => setIsShowRooms(true)}
                          onMouseLeave={() => setIsShowRooms(false)}
                        >
                          <RoomsListHeader />
                        </div>
                      )}
                    </div>
        
                    <Link to="/conference-service" className={` ${link}`}>
                      КОНФЕРЕНЦ-СЕРВІС
                    </Link>
                    <Link to="/restaurant" className={` ${link}`}>
                      РЕСТОРАН
                    </Link>
                    <Link to="/special-offers" className={` ${link}`}>
                      СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
                    </Link>
                    <Link to="/contacts" className={` ${link}`}>
                      КОНТАКТИ
                    </Link>
                  </nav>
                </div>
        
                {menuOpen && (
                  <nav
                    className={`absolute top-full left-0 w-full bg-black  flex flex-col font-cofo items-center py-4 space-y-2 z-50 xl:hidden text-[]`}
                  >
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="">
                      ПРО ГОТЕЛЬ
                    </Link>
                    <div className="relative">
                      <Link
                        to="/rooms"
                        onMouseEnter={() => setIsShowRooms(true)}
                        onMouseLeave={() => setIsShowRooms(false)}
                        className=""
                      >
                        НОМЕРИ ▾
                      </Link>
                      {isShowRooms && (
                        <div
                          className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2"
                          onMouseEnter={() => setIsShowRooms(true)}
                          onMouseLeave={() => setIsShowRooms(false)}
                        >
                          <RoomsListHeader/>
                        </div>
                      )}
                    </div>
                    <Link to="/rooms" onClick={() => setMenuOpen(false)} className="">
                      НОМЕРИ
                    </Link>
                    <Link to="" onClick={() => setMenuOpen(false)} className="">
                      КОНФЕРЕНЦ-СЕРВІС
                    </Link>
                    <Link
                      to="/restaurant"
                      onClick={() => setMenuOpen(false)}
                      className=""
                    >
                      РЕСТОРАН
                    </Link>
                    <Link to="" onClick={() => setMenuOpen(false)} className="">
                      СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ
                    </Link>
                    <Link
                      to="/contacts"
                      onClick={() => setMenuOpen(false)}
                      className=""
                    >
                      КОНТАКТИ
                    </Link>
                  </nav>
                )}
        </div>
    )
}