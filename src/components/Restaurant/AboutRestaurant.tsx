import { useTranslation } from "react-i18next";
import { aboutImageFst, aboutImageScd, aboutImageTrd } from "../../store/exportsImg";
export const AboutRestaurant = () => {

  const {t} = useTranslation()
  return (
    <div className="flex flex-col  justify-center items-center w-[93.16%] mx-auto">
      <div className="grid md:grid-cols-[41.82%_58.18%] w-full grid-cols-1 ">
        <div className="border-x border-b h-[33px] border-[#B3B3B3] lg:h-[53px]"></div>
        <div className="border-e md:border-b border-[#B3B3B3] lg:h-[53px]"></div>
        <div className="border-x md:border-b border-[#B3B3B3] flex flex-col items-center justify-center lg:pt-[54px] lg:pb-[60px] md:text-start text-center">
          <div className="2xl:w-[635px]  w-[299px] lg:w-[406px] ">
            <p className="font-blessed  leading-[70%] 2xl:text-[36px] xl:text-[28px] lg:text-[24px] md:text-[18px]  text-[#242425] text-[16px] lg:pt-0 pt-[33px]">
              {t('restaurant.about.title')}
            </p>
            <h1
              className="uppercase tracking-[-7%] lg:leading-[81%] leading-[50%] pt-[8px] lg:pt-[12px] text-[#242425]  2xl:text-[100px]  text-[64px]"
            >

              ruff

              <span className="2xl:text-[64px] lg:tracking-[-6%]    text-[32px]">
               
                <br className="md:hidden " /> &nbsp;{t('restaurant.about.title2')} -
              </span>
            </h1>
            <div className="lg:space-y-6 space-y-3 lg:pt-[45px]">
              <p className="uppercase text-[#252526] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px] leading-[22.6px] ">
                {t('restaurant.about.desc.first')}
              </p>
              <p className="uppercase text-[#252526] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px] leading-[22.6px] ">
                <span className="lg:font-bold">{t('restaurant.about.desc.second.0')}</span>
                {t('restaurant.about.desc.second.1')}
              </p>
              <p className="md:block hidden uppercase text-[#252526] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px] leading-[22.6px] ">
                <span className="lg:font-bold">{t('restaurant.about.desc.third.0')}</span>{" "}
                {t('restaurant.about.desc.third.1')}
              </p>
              <p className="md:block hidden uppercase text-[#252526] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px] leading-[22.6px] ">
                <span className="lg:font-bold">
                  {t('restaurant.about.desc.fourh.0')}
                </span>{" "}
                {t('restaurant.about.desc.fourh.1')}
                  {t('restaurant.about.desc.fourh.2')}
              </p>
            </div>
          </div>
        </div>

        <div className="md:border-e border-x md:border-x-0 border-t md:border-t-0 border-[#B3B3B3]  md:border-b ">
          <div className="flex items-center justify-center ">
            <div className="border-e border-[#B3B3B3] border-b w-full flex items-center justify-center lg:pt-[15px] lg:pb-[20px] pt-[10px] pb-[13px] ">
                <img
                  src={aboutImageFst}
                  alt=""
                  className=" w-full h-full  px-2 object-cover"
                />
            </div>
            <div className=" border-[#B3B3B3] border-b w-full flex items-center justify-center lg:pt-[15px] lg:pb-[20px] pt-[10px] pb-[13px] ">
                <img
                  src={aboutImageScd}
                  alt=""
                  className=" w-full h-full px-2 object-cover"
                />
            </div>
          </div>
          <div className="flex items-center justify-center lg:pt-[12px] lg:pb-[34px] pt-[10px]">
            <img
                src={aboutImageTrd}
                alt=""
                className=" w-full h-full px-2.5 object-cover"
              />
          </div>
        </div>

        <div className="border-x border-b border-[#B3B3B3] flex flex-col items-center justify-center py-[27px]   lg:mb-10 md:text-start text-center md:hidden  ">
            <div className="2xl:w-[635px] w-[299px]   ">

          <p className="uppercase text-[#252526] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px] leading-[22.6px]">
            <span className="lg:font-bold"> {t('restaurant.about.desc.third.0')}</span> —
            {t('restaurant.about.desc.third.1')}
          </p>

          <p className="uppercase text-[#252526] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[12px]  leading-[22.6px] mt-2">
            <span className="lg:font-bold">
              {t('restaurant.about.desc.fourh.0')}
            </span>{" "}
            {t('restaurant.about.desc.fourh.1')}
            {t('restaurant.about.desc.fourh.2')}
          </p>
            </div>
        </div>
      </div>
    </div>
  );
};
