import cn from "classnames";

type GridBordersProps = {
  isOnTop: boolean;
};

export const GridBorders = ({ isOnTop }: GridBordersProps) => {
  return (
    <>
      <div
        className={cn(
          `2xl:h-[109px] 2xl:border-x-0 box-border border-b w-full lg:h-[89px] h-[53px] border-[#C7C7C7] order-1 lg:order-none`
        )}
      ></div>
      <div
        className={cn(
          `2xl:h-[109px] ${
            isOnTop ? "lg:border-b lg:border-x" : "lg:border-x border-b"
          } 2xl:border-x box-border border-b 2xl:border-e w-full h-[53px] lg:h-[89px] border-[#C7C7C7] order-3 lg:order-none`
        )}
      ></div>
      <div
        className={cn(
          `2xl:h-[109px] ${
            isOnTop ? " lg:border-b " : " lg:border-b "
          } 2xl:border-x-0 box-border w-full h-[53px] lg:h-[89px] border-[#C7C7C7] order-5 lg:order-none`
        )}
      ></div>
      <div
        className={cn(
          `2xl:h-[109px] ${
            isOnTop ? "lg:border-e " : " "
          } box-border w-full h-[109px] border-[#C7C7C7] order-6 lg:order-none lg:hidden`
        )}
      ></div>
    </>
  );
};
