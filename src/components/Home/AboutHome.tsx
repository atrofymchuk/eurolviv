import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { previewImg } from "../../store/exportsImg";
import cn from "classnames";
import "./roomsSlider.css";
import { useCustomWidth } from "../Hooks/useCustomWidth";

export const AboutHome = () => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const isCustomWidth = useCustomWidth(1530, 1700);
  const isMobileWidthSecondary = useCustomWidth(414, 480);
  const isMobileWidthThird = useCustomWidth(390, 413);

  return (
    <div className="flex flex-col  xl:items-start xl:justify-start  justify-center items-center overflow-x-hidden overflow-y-hidden ">
      <div className="grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%] grid-cols-[89.07%]  justify-center md:justify-stretch   mx-0 w-full">
        <div className="md:flex hidden border-[#C7C7C7]  border-b"></div>
        <div className="md:border-x flex flex-col border-x  xl:flex-row 2xl:ps-[27px]  items-center space-y-2 2xl:space-y-0 xl:space-y-0 border-[#C7C7C7]   border-b">
          <div className="w-full justify-between 2xl:pe-[3.1vw]  md:flex hidden *: flex-col md:flex-row lg:h-[15.7vw] 2xl:h-[8.7vw] xl:h-[8vw] items-center  px-2   ">
            <p
              className={` uppercase  
            text-[3.2vw] 
              md:text-[1.17vw]
              lg:text-[0.97vw] 
              xl:w-[13.2vw]
              lg:w-[15.8vw]
              2xl:w-[13.3vw]
              xl:ps-[20px]
              2xl:ps-0
              xl:text-[0.83vw] 2xl:text-[.83vw]
               font-cofo-medium ${
                 isCustomWidth ? "2xl:pe-0 " : "xl:ps-[20px]"
               }`}
            >
              {t("home.about.aboutRooms.0")}
            </p>
            <p
              className={` 
            text-[3.2vw] 
              md:text-[1.17vw]
              lg:text-[0.97vw] 
              lg:w-[14.8vw]
                xl:pe-[20px] xl:w-[13vw]
                2xl:pe-0
              xl:text-[0.83vw] 2xl:text-[.83vw] 
               uppercase 2xl:w-[11.9vw]  font-cofo-medium`}
            >
              {t("home.about.aboutRooms.1")}
            </p>
          </div>

          <div className={` py-[20px]  flex  md:hidden ${isMobileWidthSecondary ? "p-6" : "p-[14px]"}`}>
            <div className="">
              <p className="md:text-[14px] uppercase font-cofo-medium text-[10px] pe-[2px] w-[90%]">
                {t("home.about.aboutRooms.0")}
              </p>
            </div>
            <div >
              <p className={`md:text-[14px] uppercase font-cofo-medium text-[10px] ps-[10px] pe-[13px] ${isMobileWidthSecondary ? "w-[90%]" : "w-[99%]"} ${isMobileWidthThird ? "w-[95%]!" : ""}`}>
                {t("home.about.aboutRooms.1")}
              </p>
            </div>
            <div className="flex justify-end">
              <p className={`md:text-[14px] uppercase font-cofo-medium text-[10px]  ${isMobileWidthSecondary ? "w-[90%]" : "w-[95%]"}`}>
                {t("home.about.aboutRooms.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex hidden border-[#C7C7C7] md:border-e  border-x md:border-x-0 md:border-s-0 xl:justify-start   lg:items-center  2xl:ps-0 xl:ps-[2vw]  border-b">
          <div className=" md:w-[80%] lg:w-[0%] lg:mb-2 ">
            <p
              className="uppercase font-cofo-medium 
              text-[3.2vw] 
              md:text-[1.17vw]
              lg:text-[0.97vw] 
              xl:text-[0.83vw] 2xl:text-[.83vw] 
              xl:w-[11.42vw]
              lg:w-[12vw]
              p-[0.53vw]
               2xl:w-[11vw] 2xl:ms-[2.29vw]
               lg:p-0
               "
            >
              {t("home.about.aboutRooms.2")}
            </p>
          </div>
        </div>
        <div className="border-b border-[#C7C7C7] md:flex hidden"></div>

        <div className="border-[#C7C7C7] md:border-e-0 border-x md:border-x-0 ps-[3vw] pt-[4vw]  2xl:border-e-0 xl:border-e-0 lg:border-b 2xl:border-b-0 xl:border-b-0 lg:block 2xl:py-0 xl:py-0 flex flex-col lg:items-center ">
          <p className=" md:text-[2vw] lg:text-[1.7vw]   uppercase 2xl:text-[1.25vw] xl:text-[1.5vw] sm:text-[3vw] text-[12px] tracking-[-0.05em] font-cofo-medium 2xl:ps-[3.75vw] xl:ps-[4.2vw] lg:ps-[2.8vw] 2xl:pt-[4.7vw] xl:pt-[5.9vw] ">
            {t("home.about.title")}
          </p>
        </div>

        <div className={`border-x   border-[#C7C7C7] ps-[3vw] lg:ps-[4.5vw]  2xl:ps-[1.64vw] flex flex-col xl:pb-[2.3vw] 2xl:pt-0 xl:pt-0 md:pt-[5.2vw] pt-[2.2vw] ${isCustomWidth ? "xl:ps-[1vw]" : "xl:ps-[1.7vw]"}`}>
          <div className="2xl:mt-[4.7vw] xl:mt-[5.9vw] pb-5 xl:pb-0">
            <h1
              className={cn(
                "text-[8.53vw] w-[89.58vw] xl:space-y-[11px] sm:text-[3.65vw] leading-[81%] md:text-[3.52vw] lg:text-[3.33vw] xl:text-[5.3vw] 2xl:text-[5.21vw] uppercase text-[#242425] tracking-[-0.07em]"
              )}
            >
              <div className="tracking-[-0.07em] inline">
                {t("home.about.heading.0")}
              </div>
              <div className={`xl:tracking-[-0.1em] 2xl:ps-4 inline ${isCustomWidth ? "xl:ps-3" : ""}`}>
                {t("home.about.heading.1")}
              </div>
              <br className="hidden md:block" />
              <div className="md:whitespace-nowrap xl:pt-[13px]">
                {t("home.about.heading.2")}
              </div>
            </h1>
          </div>
        </div>
        <div className="md:flex hidden -z-1 flex-col relative border-s md:border-s-0  2xl:border-s-0 xl:border-s-0 items-center lg:items-start 2xl:items-start xl:items-start border-e border-[#C7C7C7] "></div>

        <div
          className="border-[#C7C7C7] md:col-span-2 md:border-e border-x  md:border-b-0 about-home-image-container px-[10px] pb-[10px] lg:px-0
          h-full
          md:h-[39.06vw]
          lg:h-[30.56vw] lg:pe-[1.67vw]
          xl:h-[31.77vw] xl:pe-[1.67vw]
          2xl:h-[37.5vw] 2xl:pe-[2.71vw]"
        >
          <img loading="lazy" src={previewImg} alt="" className="z-1" />
        </div>
        <div className="relavive lg:hidden">
          <hr className="w-screen absolute left-0 border-[#C7C7C7]  text-black bg-black lg:hidden"/>

        </div>

        <div className="flex flex-row md:flex-col  justify-center md:justify-start border-x md:border-x-0 md:border-e border-[#C7C7C7] ">
          <div className="    flex flex-col md:flex-col items-center">
            <div className="flex flex-col 2xl:px-[1.56vw_1vw] 2xl:space-y-[1vw] xl:space-y-[1.1vw] xl:px-[1.2vw_1.5vw] md:space-y-2 space-y-3 md:order-none order-2 px-[3.8vw_2.8vw] pt-[6.7vw] md:pt-0 ">
              <p
                className={cn(
                  `uppercase font-cofo tracking-[-0.04em] font-normal text-[#444444]
                  text-[3.2vw]
                  sm:text-[2.08vw]
                  md:text-[1.17vw]
                  lg:text-[0.97vw]
                  xl:text-[1.04vw] xl:leading-[1.15vw]
                  2xl:text-[1.04vw] 2xl:leading-[1.25vw] 2xl:p-0 xl:p-0`,
                  {}
                )}
              >
                {t("home.about.desc.0")}
              </p>
              <p
                className="uppercase font-cofo tracking-[-0.04em] font-normal text-[#8C331B]
                text-[3.2vw]
                w-[93%] 
                lg:w-auto
                sm:text-[2.08vw]
                md:text-[1.17vw]
                lg:text-[0.97vw]
                xl:text-[1.04vw] xl:leading-[1.15vw]
                2xl:text-[1.04vw] 2xl:leading-[1.25vw] 2xl:p-0 xl:p-0"
              >
                {t("home.about.desc.1")}
              </p>
              <p
                className="uppercase font-cofo tracking-[-0.04em] font-normal text-[#444444]
                text-[3.2vw]
                sm:text-[2.08vw]
                md:text-[1.17vw]
                lg:text-[0.97vw]
                xl:text-[1.04vw] xl:leading-[1.15vw]
                2xl:text-[1.04vw] 2xl:leading-[1.25vw] 2xl:p-0 xl:p-0"
              >
                {t("home.about.desc.2")}
              </p>
              <Link
                to="/about"
                className="border  border-[#8C331B] text-center hover:text-[#8C331B] w-[141px] h-[40px]  hover:bg-[#8C331B] uppercase   font-cofo-medium items-center justify-center flex xl:w-[146px] xl:h-[36px] 2xl:w-[167px] 2xl:h-[46px] mt-[4vw] md:mt-0
                  xl:text-[14px] lg:text-[12px] md:text-[1.3vw] text-[12px] rounded-full text-[#8C331B] mb-[13vw] md:mb-0 
                 2xl:mt-[0.5vw] xl:mt-[0.9vw]"
              >
                {t("buttons.details")}
              </Link>
           
            </div>

            <div className="relative flex  md:w-full  justify-start self-start  md:order-none order-1 ">
              <div className="md:absolute top-0 left-0 max-w-[89.07%] pt-[5.4vw]  xl:pt-[2.6vw] xl:ps-[1vw] w-full md:w-fit   px-[3.8vw_2.2vw]">
                <h1
                  className={cn(
                    "md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] text-[#242425] text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[5.4vw] 2xl:text-[5.21vw]",
                    {}
                  )}
                >
                  {t("home.about.quality.0")}
                </h1>
                <h1
                  className={cn(
                    "md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] text-[#242425] text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[5.4vw] 2xl:text-[5.21vw]",
                    {}
                  )}
                >
                  {t("home.about.quality.1")}
                </h1>
                <h1
                  className={cn(
                    "md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] h-fit text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[5.4vw] xl:translate-x-[9vw] 2xl:text-[5.21vw] 2xl:translate-x-42",
                    {
                      "2xl:translate-x-78": isEng,
                    }
                  )}
                >
                  {t("home.about.quality.2")}
                </h1>
                <h1
                  className={cn(
                    "md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] text-[#242425] text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[5.4vw] 2xl:text-[5.21vw]",
                    {}
                  )}
                >
                  {t("home.about.quality.3")}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="-z-1 border-[#C7C7C7] flex-1 lg:ms-[4.7vw] xl:ms-[7vw] h-[11.2vw] lg:h-[11.7vw] xl:h-[12.5vw] 2xl:h-[6.5vw] md:flex hidden"></div>
        <div className="-z-1 border-x border-[#C7C7C7] lg:h-[11.7vw] flex-1  h-[11.2vw] md:flex hidden  2xl:h-[6.5vw]"></div>
        <div className="-z-1 border-e border-[#C7C7C7] lg:h-[11.7vw] flex-1 lg:pe-[4.7vw] p-5 h-[11.2vw] md:flex hidden 2xl:h-[6.5vw]"></div>
        <div className="-z-1 border-e border-[#C7C7C7] lg:h-[11.7vw] h-[11.2vw] md:flex hidden 2xl:h-[6.5vw]"></div>
      </div>

      <div className="md:grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%]  hidden"></div>
    </div>
  );
};
