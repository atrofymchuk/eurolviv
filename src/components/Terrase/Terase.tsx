import { TerraseCard } from "./TerraseCard";
import { TerraseT } from "../../types/types";
import { useTranslation } from "react-i18next";

import { mainFst, mainScd, mainTrd, mainFth } from "../../store/exportsImg";
const main = [mainFst, mainScd, mainTrd, mainFth];

type TerraseToProps = {
  terase: TerraseT;
  index: number;
};

export const Terrase = ({ terase, index }: TerraseToProps) => {
  const { desc, descTwo, imgs, title, titleTwo } = terase;
  const { t } = useTranslation()
  const translatedDesc = t(desc);
  let firstPart = translatedDesc;
  let secondPart = "";
  
  if (index === 0) {
    const splitIndex = translatedDesc.indexOf(".") + 1; 
    if (splitIndex > 0 && splitIndex < translatedDesc.length) {
      firstPart = translatedDesc.slice(0, splitIndex); 
      secondPart = translatedDesc.slice(splitIndex).trim(); 
    }
  }

  return (
    <>
      <hr className="w-full border-[#B3B3B3AD] " />

      <div className="max-w-[90.3%] w-full flex flex-col items-center border-[#B3B3B3AD] ">
        <div className="border-x border-[#B3B3B3AD] grid grid-cols-[49.97%_50.03%] w-full">
          <div className="flex-col flex items-center justify-center h-[420px] border-e  border-[#B3B3B3AD] ">
            <div className="overflow-hidden w-full   flex flex-col items-center justify-center ">
              <div>

              <h1 className="uppercase 2xl:text-[100px] xl:text-[80px] lg:text-[52px] md:text-[40px] text-[28px] leading-[94%] tracking-normal text-[#242425] w-full max-w-[506px] break-words whitespace-normal">
                {t(title)}

              </h1>
              <p className="uppercase 2xl:text-[16px]  text-[14px]  font-semibold w-full 2xl:max-w-[586px] xl:max-w-[400px] lg:max-w-[450px] md:max-w-[350px] max-w-[250px] pt-[30px] break-words whitespace-normal">
                {index == 0 ? (
                  <>
                    <span className="text-[#8C331B]">{firstPart} &nbsp;</span>
                    <span className="text-[#000000]">{secondPart}</span>
                  </>
                ) : (
                  <span className="text-[#000000]">{t(desc) }</span>
                )}
              </p>
                </div>
            </div>
          </div>
          <div className="flex-col flex items-center justify-center h-[420px]">
            <div>

            <h1 className="uppercase 2xl:text-[36px] xl:text-[24px] lg:text-[24px] md:text-[18px] text-[18px] leading-[94%] tracking-[-2%] text-[#242425] xl:max-w-[580px] lg:max-w-[450px] md:max-w-[350px] max-w-[250px]" >
              {t(titleTwo)}
            </h1>
            <p className="uppercase 2xl:text-[16px] text-[14px] 2xl:max-w-[586px] xl:max-w-[400px] lg:max-w-[450px] md:max-w-[350px] max-w-[250px] pt-[30px] text-[#444444]">
              <span className="text-[#444444]">{t(descTwo)}</span>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center  relative items-center ">
        <div className="max-w-[90.31%]   grid grid-cols-1 absolute  z-[-5] border-[#B3B3B3AD] border-x   w-full">
          <div className="2xl:h-[600px] xl:h-[573px] lg:h-[900px] md:h-[900px] h-[900px] border- w-full  border-[#B3B3B3AD] "></div>
        </div>
        <hr className="w-full border-[#B3B3B3AD] " />

        <div className="grid xl:grid-cols-4 grid-cols-2  overflow-hidden ">
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
