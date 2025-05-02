import { Link } from "react-router-dom";
import { useCallback, useMemo } from "react";
import cn from "classnames";
import { Room } from "../../types/types";
import { IoIosArrowDown } from "react-icons/io";
import { useDropdownMenu } from "../Hooks/useDropdownMenu";
import { renderDropdownMenu } from "../utils/renderDropdownMenu";

type NavLinksProps = {
  navLinks: Array<{ path: string; label: string }>;
  isActiveLink: (path: string) => string;
  handleMouseEnterRooms: () => void;
  handleMouseLeaveRooms: () => void;
  isShowRooms: boolean;
  rooms: Room[];
  setMenuOpen: (value: boolean) => void;
  handleMouseEnterRestaurant?: () => void;
  handleMouseLeaveRestaurant?: () => void;
  isShowRestaurant?: boolean;
  isMobile?: boolean;
  scrolled: boolean;
};

type DropdownItem = {
  key: string;
  path: string;
  title: string;
};

export const NavLinks = ({
  navLinks,
  isActiveLink,
  handleMouseEnterRooms,
  handleMouseLeaveRooms,
  isShowRooms,
  rooms,
  scrolled,
  setMenuOpen,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
  isShowRestaurant = false,
  isMobile = false,
}: NavLinksProps) => {

  
  const roomsLinksToRender = useMemo(() => [
    {key:rooms[0].type, path:`/rooms/${rooms[0].type}`, title:rooms[0].title},
    {key:rooms[2].type, path:`/rooms/${rooms[2].type}`, title:rooms[2].title},
    {key:rooms[1].type, path:`/rooms/${rooms[1].type}`, title:rooms[1].title},
    {key:rooms[3].type, path:`/rooms/${rooms[3].type}`, title:rooms[3].title},
    {key:rooms[4].type, path:`/rooms/${rooms[4].type}`, title:rooms[4].title},
    {key:rooms[5].type, path:`/rooms/${rooms[5].type}`, title:rooms[5].title},
    {key:rooms[6].type, path:`/rooms/${rooms[6].type}`, title:rooms[6].title},
    {key:rooms[7].type, path:`/rooms/${rooms[7].type}`, title:rooms[7].title},
    {key:rooms[8].type, path:`/rooms/${rooms[8].type}`, title:rooms[8].title},
  ], [rooms]);

  const restaurantLinks = useMemo<DropdownItem[]>(
    () => [
      { key: "restaurant", path: "/restaurant", title: "footer.restaurant" },
      { key: "terrace", path: "/terrace", title: "footer.terrace" },
      {
        key: "karaoke",
        path: "/restaurant#karaoke",
        title: "restaurant.karaoke.title",
      },
    ],
    []
  );

  const { toggleHandle } = useDropdownMenu({
    isShowRooms,
    isShowRestaurant,
    handleMouseEnterRooms,
    handleMouseLeaveRooms,
    handleMouseEnterRestaurant,
    handleMouseLeaveRestaurant,
  });

  const getHeaderHeight = useCallback((): number => {
    const width = window.innerWidth;
    
    if (width >= 1536) { 
      return width * 0.0693; 
    } else if (width >= 1024) { 
      return width * 0.0908; 
    } else {
      return width * 0.2533; 
    }
  }, []);

  const handleSmoothScroll = useCallback((path: string) => {
    if (path.includes('#')) {
      const [pathPart, hashPart] = path.split('#');
      
      if (window.location.pathname === pathPart || pathPart === '') {
        const element = document.getElementById(hashPart);
        if (element) {
          const headerHeight = getHeaderHeight();
          const offset = 20;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: elementPosition - headerHeight - offset,
            behavior: 'smooth'
          });
          
          return true;
        }
      }
    }
    return false;
  }, [getHeaderHeight]);

  const renderNavLinks = useCallback(() => {
    return navLinks.map(({ path, label }) => {
  

      const isDropdown = path === "/rooms" || path === "/restaurant";

      return (
        <div
          key={path}
          className="relative"
          onMouseEnter={
            !isMobile && path === "/rooms"
              ? handleMouseEnterRooms
              : !isMobile && path === "/restaurant"
              ? handleMouseEnterRestaurant
              : undefined
          }
          onMouseLeave={
            !isMobile && path === "/rooms"
              ? handleMouseLeaveRooms
              : !isMobile && path === "/restaurant"
              ? handleMouseLeaveRestaurant
              : undefined
          }
        >
          <div className="flex items-center">
            <Link
              to={path}
              className={cn(
                "uppercase 2xl:text-[0.83vw] xl:text-[0.94vw] smooth-scroll lg:text-[1.17vw] text-[14px] transition-colors md:font-cofo-medium whitespace-nowrap",
                !isMobile && isActiveLink(path),
                isMobile && "xl:text-inherit text-[#252526]"
              )}
              onClick={(e) => {
                if (handleSmoothScroll(path)) {
                  e.preventDefault();
                }
                setMenuOpen(false);
                if (!isDropdown) {
                  setMenuOpen(false);
                }
              }}
            >
              {label}
            </Link>
            {isMobile && isDropdown && (
              <button onClick={() => toggleHandle(path)} className="ml-2">
                <IoIosArrowDown
                  color="black"
                  className={cn(
                    "transition-transform",
                    (path === "/rooms" && isShowRooms) ||
                      (path === "/restaurant" && isShowRestaurant)
                      ? "rotate-180"
                      : ""
                  )}
                />
              </button>
            )}
          </div>

          {path === "/rooms" &&
            renderDropdownMenu({
              items: roomsLinksToRender,
              isVisible: isShowRooms,
              isMobile,
              isScrolled: scrolled,
              setMenuOpen,
              onItemClick: handleSmoothScroll
            })}
          {path === "/restaurant" &&
            renderDropdownMenu({
              items: restaurantLinks,
              isVisible: isShowRestaurant,
              isMobile,
              setMenuOpen,
              isScrolled: scrolled,
              onItemClick: handleSmoothScroll
            })}
        </div>
      );
    });
  }, [navLinks, isMobile, handleMouseEnterRooms, handleMouseEnterRestaurant, handleMouseLeaveRooms, handleMouseLeaveRestaurant, isActiveLink, isShowRooms, isShowRestaurant, roomsLinksToRender, scrolled, setMenuOpen, restaurantLinks, toggleHandle, handleSmoothScroll]);

  return <>{renderNavLinks()}</>;
};
