import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { MoreInfoFirstCol } from "./MoreInfoFirstCol";
import { MoreInfoSecondCol } from "./MoreInfoSecondCol";
import { MoreInfoThirdCol } from "./MoreInfoThirdCol";
import { useParams } from "react-router-dom";
export const MoreInfo = () => {

        const {roomType} = useParams()
    const isShowOtherInfo = roomType === "lux" || roomType === "lux-two-room" || roomType === "semi-lux"
  const { amenities, availableService } = usePagesInfoStore();
  return (
    <div className="bg-[#A47762]">
      <div className=" container-fluid mx-auto max-w-[84.04%] border-x border-[#C7C7C7]">
        <div className="grid grid-cols-1 md:grid-cols-[35.64%_30.63%_33.73%] ">
          <div className={`col-span-1 w-full ${isShowOtherInfo ? '' : 'order-2 md:order-none'}`}>
            <MoreInfoFirstCol isShowOtherInfo={isShowOtherInfo} amenities={amenities}/>
          </div>

          <div className="col-span-1 md:border-x border-[#C7C7C7] ">
            <MoreInfoSecondCol availableService={availableService} isShowOtherInfo={isShowOtherInfo} />
          </div>
          <div className={`col-span-1 w-full hidden md:block `}>
            <MoreInfoThirdCol isShowOtherInfo={isShowOtherInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
};
