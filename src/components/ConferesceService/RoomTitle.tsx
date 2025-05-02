import { useTranslation } from "react-i18next";
import cn from "classnames";
import { memo } from "react";

type RoomTitleProps = {
  title: string;
  size: string;
  isOnTop: boolean;
  id: string;
};

export const RoomTitle = memo(({ title, size, isOnTop, id }: RoomTitleProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col-reverse lg:flex-row 2xl:items-center justify-center order-5 lg:order-none h-[29.07vw]" id={id}>
      <div
        className={cn(
          `${
            isOnTop ? " lg:border-x border-x" : "lg:border-x border-x"
          } 2xl:ps-[1.53vw] xl:ps-[1.7vw] lg:ps-[1.9vw] md:ps-[1.8vw] items-center flex 2xl:block border-[#C7C7C7]
           2xl:py-[1.83vw_1.67vw] xl:p-[2vw] lg:p-[2.2vw] md:p-[2.4vw] w-full relative h-[29.07vw] ps-[2.2vw]`
        )}
      >
        <h1 className="uppercase text-[8.53vw] sm:text-[7.5vw] md:text-[7.6vw] lg:text-[6vw] xl:text-[5.25vw] 2xl:text-[5.24vw] text-[#242425] md:font-cofo-medium
        md:whitespace-nowrap 2xl:font-normal flex flex-col lg:tracking-[-0.05em] tracking-[-0.07em] leading-[95%] 2xl:leading-[81%] overflow-visible 2xl:mt-0 ">
          <span className={`order-1 2xl:order-2 inline w-fit xl:w-[100%] `}>
            {t(title)} 
          </span>
          <span className="order-1 2xl:order-2 inline w-fit 2xl:pt-[0.5vw] ">
            {t(size)}
          </span>
        </h1>
      </div>
    </div>
  );
}); 