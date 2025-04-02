import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { HeaderNavLinkProps } from "../../../types/headerTypes";

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="absolute top-[14%] left-[3%] text-[#C7C7C7] uppercase text-[16px] leading-[15.12px] px-[10px] flex gap-2 items-center hover:cursor-pointer z-20"
    >
      <BsArrowLeft /> {text}
    </Link>
  );
};
