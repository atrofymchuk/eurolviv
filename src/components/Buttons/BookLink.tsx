import { Link } from "react-router-dom";


export const BookLink = ({children, to, className}: {children: React.ReactNode | string, to:string, className?: string}) => {
  return (
    <Link
    to={to} 
     className={` font-cofo-medium uppercase   hover:cursor-pointer px-11.75  py-3 rounded-4xl z-10 text-md lg:text-[14px] text-[12px] ${className}`}
  >
    {children}
  </Link>
  );
};
