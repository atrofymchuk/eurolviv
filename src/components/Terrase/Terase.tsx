import mainFst from "../../assets/Terrase/MainTerrase/previewFst.png";
import mainScd from "../../assets/Terrase/MainTerrase/previewScd.png";
import mainTrd from "../../assets/Terrase/MainTerrase/previewTrd.png";
import mainFth from "../../assets/Terrase/MainTerrase/previewFth.png";
import { TerraseCard } from "./TerraseCard";
import { TerraseT } from "../../store/types";

const main = [mainFst, mainScd, mainTrd, mainFth];

type TerraseToProps = {
  terase: TerraseT;
  index: number;
};

export const Terrase = ({ terase, index }: TerraseToProps) => {
  const { desc, descTwo, imgs, title, titleTwo } = terase;

  let firstPart = desc;
  let secondPart = "";

  if (index === 0) {
    const splitIndex = desc.indexOf(".") + 1;
    if (splitIndex > 0) {
      firstPart = desc.slice(0, splitIndex);
      secondPart = desc.slice(splitIndex);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col items-center border-[#B3B3B3AD] border-y">
        <div className="border-x border-[#B3B3B3AD] grid grid-cols-[872px_873px]">
          <div className="flex-col flex items-center justify-center h-[420px] border-e border-[#B3B3B3AD]">
            <div>
              <h1 className="uppercase text-[100px] leading-[94%] tracking-[-10%] text-[#242425] w-[686px]">
                {title}
              </h1>
              <p className="uppercase text-[16px] font-semibold w-[586px] pt-[30px]">
                {index == 0 ? (
                  <>
                    {" "}
                    <span className="text-[#8C331B] ">{firstPart} &nbsp;</span>
                    <span className="text-[#000000]">{secondPart}</span>
                  </>
                ) : (
                  <span className="text-[#000000]">{desc}</span>
                )}
              </p>
            </div>
          </div>
          <div className="flex-col flex items-center justify-center h-[420px]">
            <h1 className="uppercase text-[36px] leading-[94%] tracking-[-2%] text-[#242425] w-[580px]">
              {titleTwo}{" "}
            </h1>
            <p className="uppercase text-[16px] w-[586px] pt-[30px]">
              <span className="text-[#8C331B] "></span>
              <span className="text-[#000000]">{descTwo}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center relative">
        <div className="w-[1747px] grid grid-cols-1 absolute self-center">
          <div className="border-x h-[600px] border-[#B3B3B3AD] z-[-1]"></div>
        </div>
        <div className="grid grid-cols-4 overflow-hidden">
          {imgs.map((el, index) => (
            <TerraseCard
              key={index}
              el={el}
              index={index}
              length={main.length}
            />
          ))}
        </div>
      </div>
    </>
  );
};
