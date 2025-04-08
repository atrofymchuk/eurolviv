import { Link } from "react-router-dom";
import cn from "classnames";

export const BookLink = ({
  children,
  to,
  className,
  onClick,
}: {
  children: React.ReactNode | string;
  to: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        ` font-cofo-medium uppercase   hover:cursor-pointer  xl:py-[11.5px] md:px-4 md:py-2.25  px-4.75 py-3 rounded-4xl z-10 text-md xl:text-[14px] lg:text-[12px] text-[12px]`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
