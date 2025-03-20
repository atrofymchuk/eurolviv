import { InViewWrapper } from "../utils/InViewWrapper";
import MapComponent from "./Map";

export const MapSection = () => {
  return (
    <div className="flex justify-center items-center h-full w-full max-h-[34rem] xl:min-h-[521px] lg:h-[28rem] min-h-[303px] mx-auto my-auto max-w-[862px] p-5">
      <InViewWrapper>
        <MapComponent />
      </InViewWrapper>
    </div>
  );
};