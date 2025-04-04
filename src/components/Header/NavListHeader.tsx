import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

type NavListHeaderToProps = {
  path: string;
  title: string;
  setMenuOpen?: (value: boolean) => void;
};

export const NavListHeader = ({
  path,
  title,
  setMenuOpen,
}: NavListHeaderToProps) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <Link
      to={path}
      className={cn(
        "block px-[18px]  lg:py-3 py-1 text-black backdrop-blur-[54.5px]  tracking-tighter md:tracking-normal  lg:bg-white/26 font-cofo-medium  md:text-white hover:bg-[#C7C7C7] transition-colors whitespace-nowrap text-left",
        "border-b border-[#FFFFFF33] last:border-b-0",
        "text-[#FFFFFF] hover:text-[#252526]"
      )}
      onClick={handleClick}
    >
      <span className="text-inherit uppercase lg:text-[16px] text-[12px]">
        {t(title)}
      </span>
    </Link>
  );
};
