import { TerraseCard } from "./TerraceCard";
import { TerraseT } from "../../types/types";
import { useTranslation } from "react-i18next";
import { FormatBoldText } from "../common/FormatBoldText";
import { AbootSliderContainer } from "../Restaurant/AbootSliderContainer";
import cn from "classnames";

type TerraseToProps = {
  terase: TerraseT;
  index: number;
};

export const Terrase = ({ terase, index }: TerraseToProps) => {
  const { descOne, descTwo, descThree, title, preview } = terase;
  const { t } = useTranslation();

  const isLowerTerrase = index === 2;

  return (
    <>
      <div className="w-screen flex items-center justify-center">
        <div
          className={cn(
            `md:w-[93.23%]  w-[89.7%]  flex flex-col items-center border-[#B3B3B3AD] border-b  ${
              index !== 0 ? "border-t" : ""
            }`
          )}
        >
          <div className="border-x border-[#B3B3B3AD] grid grid-cols-1 md:grid-cols-[49.97%_50.03%] w-full">
            <div
              className={`h-[193px] border-b hidden border-e border-[#B3B3B3AD] ${
                index === 0 ? " md:block" : "hidden"
              }`}
            ></div>
            <div
              className={`h-[193px] border-b hidden   border-[#B3B3B3AD] ${
                index === 0 ? "md:block" : "hidden"
              }`}
            ></div>
            <div className="flex-col flex items-center justify-center   md:border-e   border-[#B3B3B3AD] ">
              <div className="overflow-hidden w-full   flex flex-col items-center justify-center ">
                <div className="2xl:px-[3.02vw_3.85vw] xl:px-[35px_40px] text-center md:text-left px-[18px] 2xl:py-[50px_33px] lg:py-[30px_20px] py-[50px_33px]">
                  <h1
                    className="px-10 md:px-0 uppercase  2xl:text-[5.21vw] xl:text-[5.25vw] lg:text-[52px] md:text-[40px] text-[32px] leading-[81%] 
                  tracking-[-0.07em] text-[#242425] w-full 2xl:w-[506px] xl:w-[70%] whitespace-normal [text-wrap:balance]"
                  >
                    {t(title)}
                  </h1>
                  <div className="space-y-4 xl:w-[106%] 2xl:mt-[1.93vw] mt-[27px]">
                    <div
                      className={`leading-[100%]
                       ${index === 2 ? "xl:w-[97%]  2xl:w-[96.7%]" : ""}
                       ${index === 1 ? "xl:w-[85%] 2xl:w-[85%]" : ""}
                       `}
                    >
                      <FormatBoldText
                        desc={descOne}
                        isLowerTerrase={isLowerTerrase}
                      />
                    </div>
                    <div
                      className={`leading-[100%]
                    ${index === 0 ? "xl:w-[95%] 2xl:w-[100%]" : ""}
                      ${index === 1 ? "xl:w-[90%] 2xl:w-[90%]" : ""}
                      ${index === 2 ? "xl:w-[90%] 2xl:w-[95%]" : ""}

                      `}
                    >
                      <FormatBoldText desc={descTwo} />
                    </div>
                    <div
                      className={`leading-[100%] 
                       ${index === 0 ? " 2xl:w-[90%]" : ""}

${index === 1 ? "xl:w-[85%] 2xl:w-[84%]" : ""}
                      `}
                    >
                      <FormatBoldText desc={descThree} />
                    </div>
                    {index === 0 && (
                      <div className="leading-[100%] lg:flex hidden mt-[39px]">
                        <p className="text-[#444444] uppercase 2xl:text-[0.94vw] xl:text-[0.94vw] leading-[120%]">
                          <span className="font-cofo-medium">
                            {t("terasesState.mainTerrase.hookan")}
                            <br />
                          </span>
                          <span className=" ">
                            {t("terasesState.mainTerrase.hookanTime.0")}
                            <br />
                            {t("terasesState.mainTerrase.hookanTime.1")}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col flex items-center justify-center ">
              <div>
                <div className="grid  grid-cols-2  overflow-hidden h-full">
                  {preview.map((el, index) => (
                    <TerraseCard key={index} el={el} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AbootSliderContainer slides={terase.imgs} isTerrase={true} index={index}/>
    </>
  );
};
