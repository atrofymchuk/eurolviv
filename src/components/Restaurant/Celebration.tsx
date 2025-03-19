
import { useModalStore } from "../../store/useModalStore";
import   { useTranslation } from "react-i18next";
import { weddingFst, weddingScd, weddingTrd } from "../../store/exportsImg";
    export const Celebration = () => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[93.16%] border-[#B3B3B3] md:border-b">
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 w-full md:border-x border-[#B3B3B3] md:border-t ">
        <div className="lg:h-[616px]  hidden md:flex justify-end  "></div>

        <div className="lg:h-[616px] h-[454px] flex border-[#B3B3B3] border-x  flex-col items-center lg:justify-end justify-center text-center lg:pb-[70px]">
          <span className="font-blessed  block text-center leading-[70%] text-[16px] xl:text-[36px] lg:leading-[25.2px] ml-2 xl:inline lg:pb-[19px]">
            Ruff
          </span>
          <h1 className="uppercase lg:w-fit w-[217px] md:w-[317px] xl:text-[100px] lg:text-[54px] md:text-[44px]  lg:leading-[67px] leading-[94%]   text-[32px] tracking-[-7%] lg:whitespace-nowrap   ">
            {t('restaurant.celebration.title')}
          </h1>
          <div className="lg:space-y-4 space-y-4 lg:mt-[37px] mt-[24px]">
            <p className="text-[#252526] 2xl:w-[722px] lg:w-[520px] xl:w-[620px] md:w-[420px] md:text-[14px]  w-[319px] uppercase lg:text-[18px]  lg:leading-[120%] text-[12px] ">
              {t('restaurant.celebration.desc.0')}
            </p>
            <p className="text-[#252526] 2xl:w-[722px] lg:w-[520px] xl:w-[620px] md:w-[420px]  md:text-[14px]  w-[319px] uppercase lg:text-[18px]  lg:leading-[120%] text-[12px] ">
              {t('restaurant.celebration.desc.1')}
            </p>
          </div>
          <button onClick={()=>onOpenModal('menu')} className="uppercase lg:text-[14px] text-[12px] font-semibold bg-[#8C331B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#8C331B] border border-[#8C331B] lg:px-[22px] py-[12.5px] px-[23px]  lg:py-[13px] rounded-full lg:mt-[45px] mt-[26px]">
            {t('buttons.celebrationMenu')}
          </button>
        </div>
        <div className="md:flex hidden  border-[#B3B3B3]"></div>
      </div>
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 border-x md:border-b-0   border-y border-[#B3B3B3] w-full">
        <div className="flex items-center justify-center px-5 py-5  ">
            <img
              src={weddingFst}
            alt=""
            className="md:w-full md:h-full  w-[300px] h-[310px]  2xl:max-h-[620px] xl:max-h-[520px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-5 md:border-x border-y md:border-y-0 border-[#B3B3B3]  py-5 ">
          <img
            src={weddingScd}
            alt=""
            className="md:w-full md:h-full  w-[300px]  2xl:max-h-[620px]  xl:max-h-[520px] h-[392px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-5 py-5 ">
          <img
            src={weddingTrd}
            alt=""
            className="md:w-full md:h-full  2xl:max-h-[620px]  xl:max-h-[520px] w-[300px] h-[316px] object-cover"
          />
          </div>
      </div>
    </div>
  );
};
