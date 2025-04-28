import { UseFormRegister } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { FormData } from "./OrderModal";




   
    export default function OrderModalForm({register}: {register: UseFormRegister<FormData>}) {
  const { t } = useTranslation()
  return <div className="lg:pt-[18px] space-y-[8px] lg:w-[436px] pt-[8px] ">
  <input
    type="text"
    {...register("name")}
    placeholder={t("orderModal.contactPerson")}
    className="font-cofo w-full py-[14px] px-[15px] lg:text-[14px] text-[12px] rounded-full outline-none bg-[#C2C2C242] ps-[25px]"
  />

  <input
    type="tel"
    {...register("phone")}
    placeholder={t("orderModal.phone")}
    className="font-cofo w-full py-[14px] px-[15px] lg:text-[14px] text-[12px] rounded-full outline-none bg-[#C2C2C242] ps-[25px]"
  />

  <input
    type="text"
    {...register("email")}
    placeholder={t("orderModal.email")}
    className="font-cofo w-full py-[14px] lg:text-[14px] text-[12px] px-[15px] ps-[25px] rounded-full outline-none bg-[#C2C2C242]"
  />

  <div className="relative w-full">

<input  placeholder={t("orderModal.guests")}    className="w-full font-cofo py-[14px] lg:text-[14px] text-[12px] px-[25px]  rounded-full outline-none bg-[#C2C2C242] uppercase appearance-none pr-10 text-[#7C7C7C]"
      {...register("guests")}
/>
   
  </div>

  <div className="flex items-center gap-2 text-sm justify-center text-[#A47762] lg:mt-[25px] lg:mb-[39px] lg:p-0 pt-[16px] pb-[19px] ">
    <input
      type="checkbox"
      {...register("needRooms")}
      id="needRooms"
      className="accent-[#A47762] font-cofo appearance-none p-2 checked:bg-[#A47762] border border-[#A47762]"
    />
    <label
      htmlFor="needRooms"
      className="uppercase lg:text-[14px] lg:leading-[17px] font-cofo"
    >
      {t("orderModal.isGuestRooms")}
    </label>
  </div>

  <button
    type="submit"
    className="w-full lg:py-[14.5px] bg-[#A47762] py-[14px] font-cofo  text-white uppercase font-semibold rounded-full hover:cursor-pointer"
  >
    {t("buttons.send")}
  </button>
</div>
}

