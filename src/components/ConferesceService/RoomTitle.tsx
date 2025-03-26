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
          } items-center lg:justify-center flex 2xl:block border-[#C7C7C7] 2xl:p-[35px] w-full relative h-full ps-[10px]`
        )}
      >
        <h1 className="uppercase 2xl:text-[100px] text-[32px] sm:text-[40px] md:text-[58px] 2xl:leading-[81%] 2xl:w-[1200px] 2xl:font-normal flex flex-col 2xl:tracking-[-4%] tracking-[-0.07em] leading-[90%] overflow-visible mt-auto 2xl:mt-0 2xl:mb-0 mb-5">
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