import { memo } from "react";
import { Icon } from "../../types/types";
import { useTranslation } from "react-i18next";

type EquipmentToProps = {
  icons: Icon[];
  price: { hour: number; day: number };
};

export const Equipment = memo(({ icons, price }: EquipmentToProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex  bg-[#F2EFEC] justify-center flex-1 2xl:h-[231px] w-full">
      <div className="grid grid-cols-1  py-[41px] lg:py-0 lg:grid-cols-[21%_42%_37%] lg:w-full w-[79.1%]   border-[#D9D9D9] border-x lg:border-x-0  box-border">
        <div className="  border-[#D9D9D9] flex items-center 2xl:ps-[71px] ps-[10px] md:ps-[20px] md:p-6 lg:pb-10 ">
          <h1 className="uppercase text-[24px] sm:text-[24px] md:text-[32px] lg:text-[32px] xl:text-[38px]  2xl:text-[40px] leading-[100%] tracking-[-0.05em] text-[#8C331B]  ">
            {t("conferenceService.equipment.title.0")} <br />
            {t("conferenceService.equipment.title.1")}
          </h1>
        </div>
        <div className="flex  lg:items-center lg:justify-center w-full lg:border-x border-[#D9D9D9] ps-[10px] md:ps-[20px] lg:ps-0 pt-[35px] md:pt-0 xl:pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[60px] xl:gap-x-[80px] 2xl:gap-x-[130px]">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center gap-x-2.5 gap-y-[3px]"
              >
                <img
                  src={icon.src}
                  alt={icon.text}
                  className="w-[22px] h-[22px]  md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 xl:w-[30px] xl:h-[30px]"
                />
                <span className="uppercase text-[#383838] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  {t(icon.text)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col xl:ps-[36px] 2xl:ps-[42px] pt-[50px]  lg:pt-[20px] xl:pt-[30px] 2xl:pt-[42px] xl:pb-[40px]   lg:col-span-1  ps-[10px] md:ps-[20px]">
          <h2 className="uppercase text-[#8C331B] text-[24px] md:text-[28px] xl:text-[30x] 2xl:text-[32px] leading-[100%] tracking-[-0.05em] font-cofo-medium">
            {t("conferenceService.equipment.price")}
          </h2>
          <div className="gap-y-[3px] mt-[15px]  2xl:mt-[27px] ">
            <p className="text-[#8C331B] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[24px] 2xl:text-[32px] xl:text-[28px] leading-tight">
              {price.day} UAH
              <span className="text-[#383838] font-normal uppercase text-[14px]  md:text-[18px] 2xl:text-[32px] xl:text-[28px]">
                /{t("conferenceService.equipment.day")}
              </span>
            </p>
            <p className="text-[#8C331B] text-[14px]  md:text-[24px] lg:text-[24px] 2xl:text-[32px] xl:text-[28px] leading-tight">
              {price.hour} UAH{" "}
              <span className="text-[#383838] font-normal uppercase text-[14px]  md:text-[18px] 2xl:text-[32px] xl:text-[28px]">
                /{t("conferenceService.equipment.hour")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
