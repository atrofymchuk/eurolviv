import { usePagesInfoStore } from "@/store/usePagesInfoStore";
import { MoreInfoFirstCol } from "@/components/Room/MoreInfoFirstCol";
import { MoreInfoSecondCol } from "@/components/Room/MoreInfoSecondCol";
import { MoreInfoThirdCol } from "@/components/Room/MoreInfoThirdCol";
import { useParams } from "react-router-dom";
import cn from "classnames";

export const MoreInfo = () => {
  const { roomType } = useParams();
  const isShowOtherInfo =
    roomType === "lux" ||
    roomType === "lux-two-rooms" ||
    roomType === "semi-lux";
  const { amenities, availableService } = usePagesInfoStore();
  return (
    <div className="flex flex-col items-center md:items-start md:ps-[7.45%] bg-[#A47762] ">
      <div className="md:max-w-[90.83%]  max-w-[81.9%] w-full justify-center items-center md:items-start md:justify-center border-x border-[#C7C7C7]">
        <div className="grid grid-cols-1 md:grid-cols-[35.59%_30.65%_33.76%] w-full">
          <div
            className={cn(
              `col-span-1 w-full ${
                isShowOtherInfo ? "" : "order-2 md:order-none"
              }`
            )}
          >
            <MoreInfoFirstCol
              isShowOtherInfo={isShowOtherInfo}
              amenities={amenities}
            />
          </div>

          <div className="col-span-1 md:border-x border-[#C7C7C7] ">
            <MoreInfoSecondCol
              availableService={availableService}
              isShowOtherInfo={isShowOtherInfo}
            />
          </div>
          <div
            className={cn(
              `col-span-1 w-full hidden md:flex  ${
                isShowOtherInfo ? "" : "order-3 md:order-none"
              }`
            )}
          >
            <MoreInfoThirdCol isShowOtherInfo={isShowOtherInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
