import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { previewImg } from "../../store/exportsImg";
import cn from "classnames";
import "./roomsSlider.css";

export const AboutHome = () => {
  const { t,i18n } = useTranslation();
  const isEng = i18n.language === "en";
  
  return (
    <div className="flex flex-col  xl:items-start xl:justify-start  justify-center items-center overflow-x-hidden overflow-y-hidden ">
      <div className="grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%] grid-cols-[89.07%]  justify-center md:justify-stretch   mx-0 w-full">
        <div className="md:flex hidden border-[#C7C7C7]  border-b"></div>
        <div className="md:border-x flex flex-col border-x  xl:flex-row justify-around items-center space-y-2 2xl:space-y-0 xl:space-y-0 border-[#C7C7C7]   border-b">
          
          <div className="  md:flex hidden *: flex-col md:flex-row lg:h-[168px] items-center  px-2   ">
            <p className=" uppercase 2xl:w-[256px] 
            text-[3.2vw] 
              md:text-[1.17vw]
              lg:text-[0.97vw] 
              xl:w-[189px]
              lg:w-[169px]

              xl:text-[0.83vw] 2xl:text-[.83vw]
               font-cofo-medium   ">
              {t("home.about.aboutRooms.0")}
            </p>
            <p className=" 
            text-[3.2vw] 
              md:text-[1.17vw]
              lg:text-[0.97vw] 
              xl:w-[169px]
              lg:w-[159px]

              xl:text-[0.83vw] 2xl:text-[.83vw]
               uppercase 2xl:w-[229px]  font-cofo-medium  ">
              {t("home.about.aboutRooms.1")}
            </p>
          </div>
          
          <div className="p-4 ps-[14px] flex  md:hidden">
            <div>
              <p className="md:text-[14px] uppercase font-cofo-medium text-[10px] pe-[2px]">
                {t("home.about.aboutRooms.0")}
              </p>
            </div>
            <div>
              <p className="md:text-[14px] uppercase font-cofo-medium text-[10px]  pe-[15px]">
                {t("home.about.aboutRooms.1")}
              </p>
              
            </div>
            <div>
              <p className="md:text-[14px] uppercase font-cofo-medium text-[10px]">
                {t("home.about.aboutRooms.2")}
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex hidden border-[#C7C7C7] md:border-e  border-x md:border-x-0 md:border-s-0 xl:justify-start   lg:items-center p-4  border-b">
          <div className=" md:w-[80%] lg:w-[0%] lg:mb-2">
            <p className="uppercase font-cofo-medium 
              text-[3.2vw] 
              md:text-[1.17vw]
              lg:text-[0.97vw] 
              xl:text-[0.83vw] 2xl:text-[.83vw] 
              xl:w-[10.42vw]
              lg:w-[129px]
              p-[0.53vw]
               2xl:w-[12vw] 2xl:ms-[2.29vw]
               lg:p-0">
              {t("home.about.aboutRooms.2")}
            </p>
          </div>
        </div>
        <div className="border-b border-[#C7C7C7] md:flex hidden"></div>

        <div className="border-[#C7C7C7] md:border-e-0 border-x md:border-x-0 ps-[14px] pt-[19px]  2xl:border-e-0 xl:border-e-0 lg:border-b 2xl:border-b-0 xl:border-b-0 lg:block 2xl:py-0 xl:py-0 flex flex-col lg:items-center ">
          <p className="text-[12px] sm:text-xs md:text-base lg:text-lg xl:text-xl  uppercase 2xl:text-[24px] xl:text-[22px] sm:text-[28px] tracking-[-0.05em] font-cofo-medium 2xl:ps-[72px] xl:ps-[60px] lg:ps-[30px] 2xl:pt-[90px] xl:pt-[85px] ">
            {t("home.about.title")}
          </p>
        </div>

        <div className="border-x   border-[#C7C7C7] ps-[14px] lg:ps-[48px] xl:ps-[30px] 2xl:ps-[50px]  flex flex-col mt  xl:pb-[43px]  2xl:pt-0 xl:pt-0 md:pt-10  pt-[10px]">
          <div className="2xl:mt-[90px] xl:mt-[85px] pb-5 xl:pb-0">
            <h1 className={cn("text-[8.53vw] w-[89.58vw] xl:space-y-[11px] sm:text-[3.65vw] leading-[81%] md:text-[3.52vw] lg:text-[3.33vw] xl:text-[3.96vw] 2xl:text-[5.21vw] uppercase text-[#242425] tracking-[-0.07em]", {
            })}>
              <span className="tracking-[-0.07em] ">
              {t("home.about.heading.0")} 
              </span>
              <span className="tracking-[-0.1em] ">
              {t("home.about.heading.1")} 
              </span>
              <br className="hidden md:block"/>
              <span className="md:whitespace-nowrap">
                {t("home.about.heading.2")}
              </span>
            </h1>
          </div>
        </div>
        <div className="md:flex hidden -z-1 flex-col relative border-s md:border-s-0  2xl:border-s-0 xl:border-s-0 items-center lg:items-start 2xl:items-start xl:items-start border-e border-[#C7C7C7] "></div>

        <div className="border-[#C7C7C7] md:col-span-2 md:border-e border-x border-b md:border-b-0 about-home-image-container
          h-full
          md:h-[39.06vw]
          lg:h-[30.56vw] lg:pe-[1.67vw]
          xl:h-[31.77vw] xl:pe-[1.67vw]
          2xl:h-[37.5vw] 2xl:pe-[2.71vw]">
          <img 
            loading="lazy"
            src={previewImg}
            alt=""
            className=""
          />
        </div>

        <div className="flex flex-row md:flex-col  justify-center md:justify-start border-x md:border-x-0 md:border-e border-[#C7C7C7] ">
          <div className="    flex flex-col md:flex-col items-center">
            <div className="flex flex-col 2xl:px-[30px_19px] 2xl:space-y-[19px] xl:space-y-[16px] md:space-y-2 space-y-3 md:order-none order-2 px-[14px_10px] pt-[30px] md:pt-0 ">
                <p className={cn(`uppercase font-cofo tracking-[-0.04em] font-normal text-[#444444]
                  text-[3.73vw]
                  sm:text-[2.08vw]
                  md:text-[1.17vw]
                  lg:text-[0.97vw]
                  xl:text-[0.94vw] xl:leading-[1.15vw]
                  2xl:text-[1.04vw] 2xl:leading-[1.25vw] 2xl:p-0 xl:p-0`, {
                })}>
                  {t("home.about.desc.0")}
              </p>
              <p className="uppercase font-cofo tracking-[-0.04em] font-normal text-[#8C331B]
                text-[3.73vw]
                sm:text-[2.08vw]
                md:text-[1.17vw]
                lg:text-[0.97vw]
                xl:text-[0.94vw] xl:leading-[1.15vw]
                2xl:text-[1.04vw] 2xl:leading-[1.25vw] 2xl:p-0 xl:p-0">
                {t("home.about.desc.1")}
              </p>
              <p className="uppercase font-cofo tracking-[-0.04em] font-normal text-[#444444]
                text-[3.73vw]
                sm:text-[2.08vw]
                md:text-[1.17vw]
                lg:text-[0.97vw]
                xl:text-[0.94vw] xl:leading-[1.15vw]
                2xl:text-[1.04vw] 2xl:leading-[1.25vw] 2xl:p-0 xl:p-0">
                {t("home.about.desc.2")}
              </p>
              <Link
                to="/about"
                className="border w-fit border-[#8C331B] hover:text-[#EDE8E5]  hover:bg-[#8C331B] uppercase px-7.25 py-2.5 font-cofo-medium xl:px-[29px] xl:py-[10px] lg:px-[20px] lg:py-[8px] md:px-[10px] mt-[18px] md:mt-0
                 md:py-[6px] xl:text-[16px] md:text-[12px] text-[12px] rounded-full text-[#8C331B] mb-[58px] md:mb-0
                 2xl:mt-2.5 xl:mt-4.5">
                {t("buttons.details")}
              </Link>
            </div>

            <div className="relative flex  md:w-full  justify-start self-start  md:order-none order-1 ">
              <div className="md:absolute top-0 left-0 max-w-[89.07%] pt-[20px] xl:pt-[50px] xl:ps-[33px] w-full md:w-fit  md:px-0 px-[14px_10px]">
                <h1 className={cn("md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] text-[#242425] text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[3.65vw] 2xl:text-[5.21vw]", {})}>
                  {t("home.about.quality.0")}
                </h1>
                <h1 className={cn("md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] text-[#242425] text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[3.65vw] 2xl:text-[5.21vw]", {})}>
                  {t("home.about.quality.1")}
                </h1>
                <h1 className={cn("md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] h-fit text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[3.65vw] xl:translate-x-1/4 2xl:text-[5.21vw] 2xl:translate-x-42", {
                  "2xl:translate-x-78": isEng
                })}>
                  {t("home.about.quality.2")}
                </h1>
                <h1 className={cn("md:whitespace-nowrap uppercase leading-[84%] tracking-[-0.1em] text-[#242425] text-[8.53vw] inline sm:text-[4.17vw] md:text-[3.12vw] md:block lg:text-[3.33vw] xl:text-[3.65vw] 2xl:text-[5.21vw]", {})}>
                  {t("home.about.quality.3")}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#C7C7C7] flex-1 lg:ms-[50px] xl:ms-[100px] h-[50px] lg:h-[125px] md:flex hidden"></div>
        <div className="border-x border-[#C7C7C7] lg:h-[125px]  flex-1 lg-[100px] h-[50px] md:flex hidden"></div>
        <div className="border-e border-[#C7C7C7] lg:h-[125px]  flex-1 lg:pe-[50px] p-5 h-[50px] md:flex hidden"></div>
        <div className="border-e border-[#C7C7C7] lg:h-[125px]   h-[50px] md:flex hidden"></div>
      </div>

      <div className="md:grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%]  hidden"></div>
    </div>
  );
};
