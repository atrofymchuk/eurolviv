import { Link } from "react-router-dom";

export const DetailsLink = ({to, children, className}: {to: string, children: React.ReactNode | string, className?: string}) => {
  return (
    <Link to={to} className={`font-cofo-medium border px-7.5 py-[10px] rounded-full uppercase text-[12px] xl:text-[16px] border-[#8C331B] text-[#8C331B]  transition-all duration-300 hover:bg-[#8C331B] hover:text-white   ${className}`} >
      {children}
    </Link>
  )
};
