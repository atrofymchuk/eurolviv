import { useCallback } from "react";

type UseDropdownMenuProps = {
  isShowRooms: boolean;
  isShowRestaurant: boolean;
  handleMouseEnterRooms: () => void;
  handleMouseLeaveRooms: () => void;
  handleMouseEnterRestaurant?: () => void;
  handleMouseLeaveRestaurant?: () => void;
};

export const useDropdownMenu = ({
  isShowRooms,
  isShowRestaurant,
  handleMouseEnterRooms,
  handleMouseLeaveRooms,
  handleMouseEnterRestaurant,
  handleMouseLeaveRestaurant,
}: UseDropdownMenuProps) => {
  const toggleHandle = useCallback(
    (path: string) => {
      if (path === "/rooms") {
        if (isShowRooms) {
          handleMouseLeaveRooms();
        } else {
          handleMouseEnterRooms();
          handleMouseLeaveRestaurant?.();
        }
      } else if (path === "/restaurant") {
        if (isShowRestaurant) {
          handleMouseLeaveRestaurant?.();
        } else {
          handleMouseEnterRestaurant?.();
          handleMouseLeaveRooms();
        }
      }
    },
    [
      isShowRooms,
      isShowRestaurant,
      handleMouseEnterRooms,
      handleMouseLeaveRooms,
      handleMouseEnterRestaurant,
      handleMouseLeaveRestaurant,
    ]
  );

  return { toggleHandle };
}; 