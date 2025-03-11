import { bedWithPet } from "../../store/exportsImg";

export const MoreInfoThirdCol = ({
  isShowOtherInfo,
}: {
  isShowOtherInfo: boolean;
}) => {
  return (
    <div
      className={`flex flex-col py-15 items-center ${
        isShowOtherInfo ? "justify-start" : "justify-end"
      } h-full w-full `}
    >
      <div className="flex flex-col items-center justify-between gap-2 w-full 2xl:max-h-[512px] px-5">
        <img
          src={bedWithPet}
          alt="bedWithPet"
          className=" 2xl:h-[512px] xl:h-[371px]  lg:h-[300px] md:h-[250px] object-cover w-full h-full md:block hidden "
        />
      </div>
    </div>
  );
};
