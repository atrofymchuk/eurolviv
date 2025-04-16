import { InViewWrapper } from "../utils/InViewWrapper";
import MapComponent from "./Map";

export const MapSection = () => {
  return (
    <div className="flex  justify-end items-end h-full w-full  2xl:h-[29.7vw] xl:h-[32vw] lg:h-[28rem] min-h-[290px] '
     lg:ms-auto 2xl:pt-[1.563vw] xl:pt-[20px] xl:pe-[17px] 2xl:pe-[1.406vw] p-4 md:p-0 border-t lg:border-t-0 border-[#C7C7C7]  ">
      <InViewWrapper>
        <MapComponent />
      </InViewWrapper>
    </div>
  );
};