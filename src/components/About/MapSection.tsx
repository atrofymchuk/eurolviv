import { InViewWrapper } from "../utils/InViewWrapper";
import MapComponent from "./Map";

export const MapSection = () => {
  return (
    <div className="flex justify-end items-end h-full w-full max-h-[34rem] xl:min-h-[541px] lg:h-[28rem] min-h-[290px]  lg:ms-auto lg:pt-[30px] lg:pe-[27px] p-4 md:p-0 border-t lg:border-t-0 border-[#C7C7C7] max-w-[862px] ">
      <InViewWrapper>
        <MapComponent />
      </InViewWrapper>
    </div>
  );
};