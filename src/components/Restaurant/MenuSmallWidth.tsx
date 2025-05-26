import { coffe, meat, spagetti } from "@/store/exportsImg";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
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
        <img
          src={coffe}
          alt=""
          className="w-[25.07vw] h-[37.87vw] sm:w-[162px] sm:h-[186px]  object-cover"
        />
        <img
          src={spagetti}
          alt=""
          className="w-[28.27vw] h-[37.87vw] sm:w-[182px] sm:h-[186px]  object-cover"
        />

        <img
          src={meat}
          alt=""
          className="w-[25.07vw] h-[37.87vw] sm:w-[162px] sm:h-[186px]  object-cover"
        />
      </InViewWrapper>
    </div>
  );
};
