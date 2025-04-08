import { Link } from "react-router-dom";
import cn from "classnames";
import { InViewWrapper } from "../utils/InViewWrapper";

type LogoProps = {
  logo: string;
  iconLogoStyle: string;
  scrolled: boolean;
  className?: string;
  isMobile?: boolean;
  iconClassName?: string;
  onClick?: () => void;
  pathname: string;
};

export const Logo = ({
  logo,
  iconLogoStyle,
  scrolled,
  className,
  iconClassName,
  isMobile,
  onClick,
  pathname,
}: LogoProps) => {
  return (
    <Link
      to="/"
      className={cn(
        " lg:w-fit items-center justify-center flex w-1/3 lg:me-[78px]",
        className,
        {
          "lg:me-[94px]": pathname === "/restaurant",
          "lg:me-[140px]": pathname === "/terrace",
        }
      )}
      onClick={onClick}
    >
      <InViewWrapper>
        <img
          src={logo}
          alt="logo"
          className={cn(
            "duration-300",
            {
              [`${iconLogoStyle} w-[68px] h-[40px] ${
                !scrolled ? "" : "w-[82px] h-[48px]"
              } xl:w-full 2xl:h-[78px]  xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[48px]`]:
                !isMobile,
              "w-[99px] h-[54px] filter invert": isMobile,
              "2xl:h-[91px]": pathname === "/terrace",
            },
            iconClassName
          )}
        />
      </InViewWrapper>
    </Link>
  );
};
