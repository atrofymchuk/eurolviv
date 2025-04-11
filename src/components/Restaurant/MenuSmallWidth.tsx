import { coffe, meat, spagetti } from "../../store/exportsImg";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
type MenuSmallWidthToProps = {
  className: string;
};

export const MenuSmallWidth = ({ className }: MenuSmallWidthToProps) => {
  return (
    <div
      className={cn(
        `flex flex-row w-full   justify-center border-x border-[#B3B3B3] gap-x-[2px]  ${className}`
      )}
    >
      <InViewWrapper>
        <img loading="lazy"
          src={coffe}
          alt=""
          className="w-[96px] h-[146px] sm:w-[162px] sm:h-[186px]  object-cover"
        />
        <img loading="lazy"
          src={spagetti}
          alt=""
          className="w-[102px] h-[146px] sm:w-[182px] sm:h-[186px]  object-cover"
        />

        <img loading="lazy"
          src={meat}
          alt=""
          className="w-[86px] h-[146px] sm:w-[162px] sm:h-[186px]  object-cover"
        />
      </InViewWrapper>
    </div>
  );
};
