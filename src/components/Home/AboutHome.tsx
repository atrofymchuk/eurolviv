import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { previewImg } from "../../store/exportsImg";
export const AboutHome = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col  xl:items-start xl:justify-start  justify-center items-center overflow-x-hidden overflow-y-hidden ">
      <div className="grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%] grid-cols-[89.07%]  justify-center md:justify-stretch   mx-0 w-full">
        <div className="md:flex hidden border-[#C7C7C7]  border-b"></div>
        <div className="md:border-x flex flex-col border-x  xl:flex-row justify-around items-center space-y-2 2xl:space-y-0 xl:space-y-0 border-[#C7C7C7]   border-b">
          
          <div className="  md:flex hidden flex-col md:flex-row lg:h-[168px] items-center 2xl:gap-[100px] py-4 gap-[10px] px-2   ">
            <p className=" lg:text-[14px] xl:text-[16px] uppercase 2xl:w-[256px]  font-cofo-medium 2xl:text-[16px] text-[12px]  ">
              {t("home.about.aboutRooms.0")}
            </p>
            <p className=" lg:text-[14px] xl:text-[16px]   uppercase 2xl:w-[229px]  font-cofo-medium 2xl:text-[16px] text-[12px]  ">
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
          <div className=" md:w-[80%] lg:w-[60%] lg:mb-2">
            <p className="lg:text-[14px] uppercase 2xl:w-[210px] xl:w-[200px] font-cofo-medium xl:text-[16px] text-[12px]  tracking-[0%] 2xl:ms-[44px]  md:text-[12px] p-2 lg:p-0">
              {t("home.about.aboutRooms.2")}
            </p>
          </div>
        </div>
        <div className="border-b border-[#C7C7C7] md:flex hidden"></div>

        <div className="border-[#C7C7C7] md:border-e-0 border-x md:border-x-0 ps-[14px] pt-[19px]  2xl:border-e-0 xl:border-e-0 lg:border-b 2xl:border-b-0 xl:border-b-0 lg:block 2xl:py-0 xl:py-0 flex flex-col lg:items-center ">
          <p className="text-[12px] sm:text-xs md:text-base lg:text-lg xl:text-xl  uppercase 2xl:text-[24px] xl:text-[22px] sm:text-[28px] tracking-[-5%] font-cofo-medium 2xl:ps-[72px] xl:ps-[60px] lg:ps-[30px] 2xl:pt-[90px] xl:pt-[85px] ">
            {t("home.about.title")}
          </p>
        </div>

        <div className="border-x   border-[#C7C7C7] ps-[14px]  flex flex-col mt 2xl:h-[307px] xl:pb-[43px]  2xl:pt-0 xl:pt-0 md:pt-10  pt-[10px]">
          <div className="2xl:mt-[90px] xl:mt-[85px] pb-5 xl:pb-0">
            <h1 className="md:whitespace-nowrap text-[32px] sm:text-[28px]   md:text-[36px] lg:text-[48px] xl:text-[76px] 2xl:text-[100px]  uppercase text-[#242425] leading-[90%] tracking-tight">
              {t("home.about.heading").split(" ").slice(0, -1).join(" ")}
              <br />
              <span className="md:whitespace-nowrap">
                {t("home.about.heading").split(" ").slice(-1)}
              </span>
            </h1>
          </div>
        </div>
        <div className="md:flex hidden -z-1 flex-col relative border-s md:border-s-0  2xl:border-s-0 xl:border-s-0 items-center lg:items-start 2xl:items-start xl:items-start border-e border-[#C7C7C7] "></div>

        <div className=" 2xl:h-[720px] xl:h-[610px] border-[#C7C7C7] md:col-span-2 md:border-e  border-x border-b md:border-b-0 pb-[10px] md:pb-0">
          <img
            src={previewImg}
            alt=""
            className="2xl:w-[1080px] xl:w-[980px] 2xl:h-[720px] xl:h-[610px] md:h-[400px] lg:h-[440px] w-full md:px-0 md:pe-5  px-[10px_9px]"
          />
        </div>

        <div className="flex flex-row md:flex-col 2xl:ps-[33px] justify-center md:justify-start border-x md:border-x-0 md:border-e border-[#C7C7C7] ">
          <div className=" md:max-w-[500px]  lg:max-w-fit flex flex-col md:flex-col items-center">
            <div className="flex flex-col 2xl:space-y-[19px] xl:space-y-[16px] md:space-y-2 space-y-3 md:order-none order-2 px-[14px_10px] pt-[30px] md:pt-0 ">
              <p className="sm:text-[16px] md:text-[12px] lg:text-[14px] xl:text uppercase 2xl:text-[20px] xl:text-[18px] 2xl:leading-[24px] xl:leading-[22px] font-cofo tracking-[-4%] 2xl:w-[443px]  2xl:p-0 xl:p-0 text-[14px] font-normal text-[#444444]">
                {t("home.about.desc.0")}
              </p>
              <p className="sm:text-[16px] md:text-base lg:text-[14px] uppercase 2xl:text-[20px] xl:text-[18px] 2xl:leading-[24px] xl:leading-[22px] font-cofo tracking-[-4%] 2xl:w-[443px]  2xl:p-0 xl:p-0  text-[14px] font-normal text-[#8C331B] md:text-[12px]">
                {t("home.about.desc.1")}
              </p>
              <p className="sm:text-[16px] md:text-base lg:text-[14px] uppercase 2xl:text-[20px] xl:text-[18px] 2xl:leading-[24px] xl:leading-[22px] font-cofo tracking-[-4%] 2xl:w-[443px]  2xl:p-0 xl:p-0  text-[14px] font-normal text-[#444444] md:text-[12px]">
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

            <div className="relative flex w-[89.07%] md:w-full  justify-start self-start  md:order-none order-1 ">
              <div className="md:absolute top-0 left-0  pt-[20px] xl:pt-[50px] w-full md:w-fit  px-[14px_10px]">
                <h1 className="md:whitespace-nowrap  sm:text-[32px] inline md:block  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[84%] text-[32px] md:text-[32px]  tracking-[-10%] text-[#242425]">
                  {t("home.about.quality.0")}
                </h1>
                <h1 className="md:whitespace-nowrap  sm:text-[32px] inline md:block  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[84%] text-[32px] md:text-[32px]  tracking-[-10%] text-[#242425]">
                  {t("home.about.quality.1")}
                </h1>
                <h1 className="md:whitespace-nowrap  sm:text-[32px] inline md:block  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[84%] text-[32px] md:text-[32px]  tracking-[-10%] xl:translate-x-1/4 2xl:translate-x-42 h-fit">
                  {t("home.about.quality.2")}
                </h1>
                <h1 className="md:whitespace-nowrap  sm:text-[32px] inline md:block  xl:text-xl 2xl:text-2xl uppercase 2xl:text-[100px] xl:text-[70px] leading-[84%] text-[32px] md:text-[32px]  tracking-[-10%] text-[#242425]">
                  {t("home.about.quality.3")}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[#C7C7C7] flex-1 lg:ms-[50px] xl:ms-[100px] h-[50px] md:flex hidden"></div>
        <div className="border-x border-[#C7C7C7] flex-1 lg-[100px] h-[50px] md:flex hidden"></div>
        <div className="border-e border-[#C7C7C7] flex-1 lg:pe-[50px] p-5 h-[50px] md:flex hidden"></div>
        <div className="border-e border-[#C7C7C7]  h-[50px] md:flex hidden"></div>
      </div>

      <div className="md:grid md:grid-cols-[24.2%_34.7%_25.8%_15.3%]  hidden"></div>
    </div>
  );
};
