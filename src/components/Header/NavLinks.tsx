import { Link } from "react-router-dom";
import { useCallback, useMemo } from "react";
import cn from "classnames";
import { NavListHeader } from "./NavListHeader";
import { Room } from "../../types/types";

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
}: NavLinksProps) => {
  const restaurantLinks = useMemo<DropdownItem[]>(
    () => [
      { key: "restaurant", path: "/restaurant", title: "footer.restaurant" },
      { key: "terrace", path: "/terrace", title: "footer.terrace" },
      { key: "karaoke", path: "/restaurant", title: "restaurant.karaoke.title" },
    ],
    []
  );

  const renderDropdownMenu = useCallback(
    (items: DropdownItem[], isVisible: boolean) => {
      if (!isVisible) return null;

      return (
        <div className="absolute -left-5 top-full pt-4">
          <div className="w-fit">
            <div className="flex flex-col rounded-lg overflow-hidden">
              {items.map((item) => (
                <NavListHeader
                  key={item.key}
                  path={item.path}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      );
    },
    []
  );

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

      return (
        <div
          key={path}
          className="relative"
          onMouseEnter={
            path === "/rooms"
              ? handleMouseEnterRooms
              : path === "/restaurant"
              ? handleMouseEnterRestaurant
              : undefined
          }
          onMouseLeave={
            path === "/rooms"
              ? handleMouseLeaveRooms
              : path === "/restaurant"
              ? handleMouseLeaveRestaurant
              : undefined
          }
        >
          <Link
            to={path}
            className={cn(
              "uppercase 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px]",
              isActiveLink(path)
            )}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>

          {path === "/rooms" && renderDropdownMenu(roomItems, isShowRooms)}
          {path === "/restaurant" &&
            renderDropdownMenu(restaurantLinks, isShowRestaurant)}
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
    renderDropdownMenu,
  ]);

  return <>{renderNavLinks()}</>;
};
