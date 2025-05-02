import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { HeaderNavLinkProps } from "../../../types/headerTypes";

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="absolute 2xl:top-[9vw] xl:top-[11vw] top-[30vw] left-[3%] text-[#C7C7C7] uppercase text-[14px] lg:text-[16px] leading-[15.12px] px-[10px] flex gap-2 items-center hover:cursor-pointer z-20"
    >
      <BsArrowLeft /> {text}
    </Link>
  );
};
