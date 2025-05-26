import { InViewWrapper } from "@/components/utils/InViewWrapper";
import { coffe, meat, spagetti } from "@/store/exportsImg";
import cn from "classnames";
import { useCustomWidth } from "@/hooks/useCustomWidth";
type MenuPCToProps = {
  className: string;
};

export const MenuPC = ({ className }: MenuPCToProps) => {
  const isCustomWidth = useCustomWidth(1500, 1700);
  return (
    <>
      <div
        className={cn(
          `flex md:justify-end space-x-[5px] border-[#B3B3B3] md:pe-2.25 ${className}`
        )}
      >
        <InViewWrapper>
          <img
            src={coffe}
            alt=""
            className={cn(
              `lg:w-[306px] lg:h-[486px] md:w-[240px] md:h-[300px] w-[25.1vw] h-[37.9vw] object-cover 2xl:w-[23.8vw] 2xl:h-[35.7vw]`,
              {
                "xl:w-[25.2vw] xl:h-[40.8vw]": isCustomWidth,
              }
            )}
          />
        </InViewWrapper>
      </div>
      <div
        className={cn(
          `flex flex-col text-center lg:border-x border-[#B3B3B3] items-center ${className}`
        )}
      >
        <InViewWrapper>
          <img
            src={spagetti}
            alt=""
            className={cn(
              `lg:w-[326px] lg:h-[486px] md:w-[300px] md:h-[300px] w-[25.1vw] h-[37.9vw] object-cover 2xl:w-[26.7vw] 2xl:h-[35.7vw]`,
              {
                "xl:w-[27.2vw] xl:h-[40.8vw]": isCustomWidth,
                "xl:w-[27vw] xl:h-[486px]": !isCustomWidth,
              }
            )}
          />
        </InViewWrapper>
      </div>
      <div className={cn(`flex md:ps-2.25 ${className}`)}>
        <InViewWrapper>
          <img
            src={meat}
            alt=""
            className={cn(
              `lg:w-[306px] lg:h-[486px] md:w-[240px] md:h-[300px] w-[25.1vw] h-[37.9vw] object-cover 2xl:w-[23.8vw] 2xl:h-[35.7vw]`,
              {
                "xl:w-[25.2vw] xl:h-[40.8vw]": isCustomWidth,
              }
            )}
          />
        </InViewWrapper>
      </div>
    </>
  );
};
