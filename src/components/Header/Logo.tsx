import { Link } from "react-router-dom";
import cn from "classnames";
import { InViewWrapper } from "../utils/InViewWrapper";

type LogoProps = {
  logo: string;
  iconLogoStyle: string;
  className?: string;
  isMobile?: boolean;
  iconClassName?: string;
  onClick?: () => void;
  pathname: string;
};

export const Logo = ({
  logo,
  iconLogoStyle,
  className,
  iconClassName,
  isMobile,
  onClick,
  pathname,
}: LogoProps) => {
  const isRestaurant = pathname === "/terrace" || pathname === "/restaurant";
  return (
    <Link
      to="/"
      className={cn(
          " items-center justify-center flex w-[33vw] h-full  2xl:w-fit xl:w-[110px] lg:w-[80px]  ms-[2vw] lg:ms-0",
        className,
        {
        "2xl:me-[6.02vw] xl:me-[3vw]"  : isRestaurant,
        "2xl:me-[1.93vw] xl:me-[2vw] lg:me-[1.17vw]": !isRestaurant,
        }
      )}
      onClick={onClick}
    >
      <InViewWrapper>
        <img loading="lazy"
          src={logo}
          alt="logo"
          className={cn(
            "duration-300",
            {
              [`${iconLogoStyle} w-[18.13vw] h-[10.67vw] xl:w-[7.81vw] 2xl:h-[4.3vw] 2xl:w-[8vw]  xl:h-[5.47vw] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[48px]`]:
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
