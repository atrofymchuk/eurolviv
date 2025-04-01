import { Link } from "react-router-dom";
import cn from "classnames";
import { InViewWrapper } from "../utils/InViewWrapper";

type LogoProps = {
  logo: string;
  iconLogoStyle: string;
  scrolled: boolean;
};

export const Logo = ({ logo, iconLogoStyle, scrolled }: LogoProps) => {
  return (
    <Link to="/" className="w-1/3 lg:w-fit items-center justify-center flex">
      <InViewWrapper>
        <img
          src={logo}
          alt="logo"
          className={cn(
            `duration-300 ${iconLogoStyle} 
             ${
               !scrolled ? "w-[68px] h-[40px]" : "w-[82px] h-[48px]"
             } 2xl:w-[203px] 2xl:h-[78px] xl:w-[120px] xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[48px]`
          )}
        />
      </InViewWrapper>
    </Link>
  );
}; 