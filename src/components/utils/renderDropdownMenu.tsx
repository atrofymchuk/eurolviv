import { ReactNode } from "react";
import cn from "classnames";
import { NavListHeader } from "../Header/NavListHeader";

type DropdownItem = {
  key: string;
  path: string;
  title: string;
};

type RenderDropdownMenuProps = {
  items: DropdownItem[];
  isVisible: boolean;
  isMobile?: boolean;
  setMenuOpen?: (value: boolean) => void;
};

export const renderDropdownMenu = ({
  items,
  isVisible,
  isMobile = false,
  setMenuOpen,
}: RenderDropdownMenuProps): ReactNode => {
  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "absolute -left-2 top-full pt-4",
        isMobile && "relative left-0 top-0 pt-2"
      )}
    >
      <div className="w-fit">
        <div className="flex flex-col rounded-lg overflow-hidden">
          {items.map((item) => (
            <NavListHeader
              key={item.key}
              path={item.path}
              title={item.title}
              setMenuOpen={setMenuOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 