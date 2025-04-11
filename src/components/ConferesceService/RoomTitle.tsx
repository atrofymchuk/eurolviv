import { useTranslation } from "react-i18next";
import cn from "classnames";
import { memo } from "react";

type RoomTitleProps = {
  title: string;
  size: string;
  isOnTop: boolean;
};

export const RoomTitle = memo(({ title, size, isOnTop }: RoomTitleProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col-reverse lg:flex-row 2xl:items-center justify-center order-5 lg:order-none h-full">
      <div
        className={cn(
          `${
            isOnTop ? " lg:border-x border-x" : "lg:border-x border-x"
          } 2xl:ps-[39px] xl:ps-[24px] lg:ps-[20px] md:ps-[14px]  items-center  flex 2xl:block border-[#C7C7C7] 2xl:p-[35px] xl:p-[28px] lg:p-[24px] md:p-[18px] w-full relative h-full ps-[10px]`
        )}
      >
        <h1 className="uppercase 2xl:text-[100px] text-[32px] text-[#242425] sm:text-[40px] md:text-[58px] lg:text-[64px] 2xl:leading-[81%] xl:text-[72px]
        md:whitespace-nowrap 2xl:font-normal flex flex-col lg:tracking-[-0.03em] tracking-[-0.07em] leading-[90%] overflow-visible  2xl:mt-0 ">
          <span className="order-1 2xl:order-2 inline w-fit">
            {t(title)}
          </span>
          <span className="order-1 2xl:order-2 inline w-fit 2xl:pt-2.5">
            {t(size)}
          </span>
        </h1>
      </div>
    </div>
  );
}); 