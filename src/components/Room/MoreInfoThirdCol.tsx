import { dog } from "../../store/exportsImg";
import cn  from "classnames";

export const MoreInfoThirdCol = ({
  isShowOtherInfo,
}: {
  isShowOtherInfo: boolean;
}) => {
  return (
    <div
      className={cn(`flex flex-col pt-[54px] lg:py-20 md:py-10 items-center ${
        isShowOtherInfo ? "justify-start" : "justify-end"
      } h-full w-full`)}
    >
      <div className="flex flex-col items-center justify-between gap-2 w-full 2xl:max-h-[26.67vw]">
        <img loading="lazy"
          src={dog}
          alt="dog"
          className="2xl:h-[26.67vw] xl:h-[371px] lg:h-[300px] md:h-[250px] 2xl:px-[1.3vw] object-cover w-full h-full md:block hidden lg:px-3 md:px-2"
        />
      </div>
    </div>
  );
};
