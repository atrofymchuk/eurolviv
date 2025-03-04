import { useTranslation } from "react-i18next";


export default function ContactUsForm() {
  const { t } = useTranslation();   
  return  <div className="xl:ps-[95px] md:ps-[40px] flex flex-col items-center md:items-start lg:pb-10 lg:pt-0 pb-[42px] pt-[50px] md:border-b-0 border-b border-[#C7C7C7]  ">
  <div className="flex flex-col items-center md:items-start ">
    <h2 className="uppercase font-cofo lg:text-[39px] text-[32px] lg:tracking-[-0.05em]">
      {t("contacts.info.writeUs")}
    </h2>
    <div className="lg:space-y-[14px] lg:pt-[31px] space-y-1.5 flex flex-col items-center md:items-start w-full">
      <input
        type="text"
        placeholder={t("contacts.info.name")}
        className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px]  md:w-full text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px] 2xl:pe-[296px]"
      />
      <input
        type="text"
        placeholder={t("contacts.info.email")}
        className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px]  md:w-full text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px] 2xl:pe-[296px]"
      />
      <input
        type="text"
        placeholder={t("contacts.info.message")}
        className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px]  md:w-full text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px] 2xl:pe-[296px]"
      />
      <button
        className="uppercase font-cofo mt-[12px]  2xl:max-w-[523px] w-full  md:w-full text-sm py-[9px] font-semibold text-white border border-[#A47762] hover:text-[#A47762] hover:bg-white
  hover:cursor-pointer bg-[#A47762] rounded-full 
  lg:py-[15px] 2xl:px-[203px] xl:px-[150px] lg:mt-[31px]"
      >
        {t("buttons.send")}
      </button>
    </div>
  </div>
</div>
}

