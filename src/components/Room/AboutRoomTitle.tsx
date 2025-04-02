import cn from "classnames";
import { useTranslation } from "react-i18next";
export const AboutRoomTitle = ({ nameRoom }: { nameRoom: string }) => {
  const { t } = useTranslation();
  return (
    <div
    className={cn(`md:border-t md:border-e ps-[10px]  md:justify-start md:ps-2.5 flex 2xl:block border-[#C7C7C7] 2xl:p-[35px] w-full relative`)}
  >
    <h1 className="uppercase 2xl:text-[100px] xl:text-[80px] text-[32px] lg:text-[60px] 2xl:leading-[81px] 2xl:font-normal leading-[86%] tracking-[-0.026em] flex flex-col justify-center lg:h-full">
      {t(nameRoom).length > 16 ? (
        <>
          {(() => {
            const words = t(nameRoom).split(' ');
            const midpoint = Math.ceil(words.length / 2);
            
            const firstLine = words.slice(0, midpoint).join(' ');
            const secondLine = words.slice(midpoint).join(' ');
            
            return (
              <>
                <span className="md:whitespace-nowrap order-1 md:order-1 block">
                  {firstLine}
                </span>
                <span className="md:whitespace-nowrap order-2 md:order-2 block">
                  {secondLine}
                </span>
              </>
            );
          })()}
        </>
      ) : (
        <span className="md:whitespace-nowrap">{t(nameRoom)}</span>
      )}
    </h1>
  </div>)
};

