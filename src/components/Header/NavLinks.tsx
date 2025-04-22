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
  setMenuOpen,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
  isShowRestaurant = false,
  isMobile = false,
}: NavLinksProps) => {
  const restaurantLinks = useMemo<DropdownItem[]>(
    () => [
      { key: "restaurant", path: "/restaurant", title: "footer.restaurant" },
      { key: "terrace", path: "/terrace", title: "footer.terrace" },
      {
        key: "karaoke",
        path: "/restaurant/#karaoke",
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

  const renderNavLinks = useCallback(() => {
    return navLinks.map(({ path, label }) => {
      const roomItems: DropdownItem[] =
        path === "/rooms"
          ? rooms.map((room) => ({
              key: room.type,
              path: `/rooms/${room.type}`,
              title: room.title,
            }))
          : [];

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
                "uppercase 2xl:text-[0.83vw] xl:text-[0.94vw]  lg:text-[1.17vw] text-[14px] transition-colors md:font-cofo-medium whitespace-nowrap",
                !isMobile && isActiveLink(path),
                isMobile && "xl:text-inherit text-[#252526]"
              )}
              onClick={() => {
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
              items: roomItems,
              isVisible: isShowRooms,
              isMobile,
              setMenuOpen,
            })}
          {path === "/restaurant" &&
            renderDropdownMenu({
              items: restaurantLinks,
              isVisible: isShowRestaurant,
              isMobile,
              setMenuOpen,
            })}
        </div>
      );
    });
  }, [
    navLinks,
    isActiveLink,
    handleMouseEnterRooms,
    handleMouseLeaveRooms,
    isShowRooms,
    rooms,
    setMenuOpen,
    handleMouseEnterRestaurant,
    handleMouseLeaveRestaurant,
    isShowRestaurant,
    restaurantLinks,
    isMobile,
    toggleHandle,
  ]);

  return <>{renderNavLinks()}</>;
};
