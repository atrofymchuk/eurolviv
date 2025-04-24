import cn from "classnames";
import { links } from "../../Constants/Links";
import {Link} from 'react-router-dom'
export const ViewMenuButton = ({className, children}: {className?: string, children: React.ReactNode}) => {
  


  return (
    <Link to={links.menu} target="_blank" className={cn("uppercase text-center  font-cofo-medium text-[#EDE8E5] text-[12px] border  lg:py-[10px] lg:w-[204px] py-[8.5px] lg:text-[14px] border-[#EDE8E5] block justify-center lg:text-[#8C331B] lg:border-[#8C331B] rounded-full font-cofo-medium  hover:text-[white] hover:bg-[#8C331B] transition", className)} >
    {children}
  </Link>
  );
}