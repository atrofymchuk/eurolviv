import { UseFormGetValues, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormData } from "./OrderModal";
import { useState, useRef, useEffect } from "react";
import './orderModal.css'

export default function OrderModalForm({
  register,
  isLoading,
}: {
  register: UseFormRegister<FormData>;
  isLoading: boolean;
  getValues: UseFormGetValues<FormData>;
}) {
  const { t } = useTranslation();
  const [phoneValue, setPhoneValue] = useState("");
  const [rawPhoneValue, setRawPhoneValue] = useState("");
  const prevInputLengthRef = useRef(0);

  const formatPhoneNumber = (digitsOnly: string): string => {
    if (digitsOnly.length === 0) return "";
    if (digitsOnly.length < 3) return `+${digitsOnly}`;
    if (digitsOnly.length < 6)
      return `+${digitsOnly.slice(0, 2)} (${digitsOnly.slice(2)})`;
    if (digitsOnly.length < 9)
      return `+${digitsOnly.slice(0, 2)} (${digitsOnly.slice(
        2,
        5
      )}) ${digitsOnly.slice(5)}`;
    if (digitsOnly.length < 11)
      return `+${digitsOnly.slice(0, 2)} (${digitsOnly.slice(
        2,
        5
      )}) ${digitsOnly.slice(5, 8)}-${digitsOnly.slice(8)}`;

    return `+${digitsOnly.slice(0, 2)} (${digitsOnly.slice(
      2,
      5
    )}) ${digitsOnly.slice(5, 8)}-${digitsOnly.slice(8, 10)}-${digitsOnly.slice(
      10,
      Math.min(12, digitsOnly.length)
    )}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= phoneValue.length) {
      const newRawValue = rawPhoneValue.slice(0, -1);
      setRawPhoneValue(newRawValue);
      setPhoneValue(formatPhoneNumber(newRawValue));
    } else {
      const digits = inputValue.replace(/\D/g, "");

      const newDigits = digits.slice(0, 12);

      let newRawValue = "";
      if (digits.length > rawPhoneValue.length) {
        newRawValue = newDigits;
      } else {
        const newChars = inputValue.replace(/[^0-9]/g, "");
        newRawValue = (rawPhoneValue + newChars).slice(0, 12);
      }

      setRawPhoneValue(newRawValue);
      setPhoneValue(formatPhoneNumber(newRawValue));
    }
    console.log(e.target.value);
    prevInputLengthRef.current = phoneValue.length;
  };

  useEffect(() => {
    prevInputLengthRef.current = phoneValue.length;
  }, [phoneValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && e.currentTarget.selectionStart === 0) {
      setRawPhoneValue("");
      setPhoneValue("");
    }
  };

  return (
    <div className="lg:pt-[18px] space-y-[8px] lg:w-[436px] pt-[8px] ">
      <input
        type="text"
        {...register("name")}
        placeholder={t("orderModal.contactPerson")}
        className="font-cofo w-full py-[14px] px-[15px] lg:text-[14px] text-[12px] placeholder- text-[#7C7C7C] rounded-full outline-none bg-[#C2C2C242] ps-[25px]"
      />

      <input
        type="tel"
        {...register("phone", {
          setValueAs: () => rawPhoneValue,
          value: phoneValue,
        })}
        value={phoneValue}
        onChange={handlePhoneChange}
        onKeyDown={handleKeyDown}
        placeholder={t("orderModal.phone")}
        className="font-cofo w-full py-[14px] px-[15px] lg:text-[14px] text-[12px] text-[#7C7C7C] rounded-full outline-none bg-[#C2C2C242] ps-[25px]"
      />

      <input
        type="text"
        {...register("email")}
        placeholder={t("orderModal.email")}
        className="font-cofo w-full py-[14px] lg:text-[14px] text-[12px] px-[15px] text-[#7C7C7C] ps-[25px] rounded-full outline-none bg-[#C2C2C242]"
      />

      <div className="relative w-full">
        <input
          type="number"
          min={0}
          placeholder={t("orderModal.guests")}
          className="w-full font-cofo  py-[14px] lg:text-[14px] input-number text-[12px] px-[25px]  rounded-full outline-none bg-[#C2C2C242] uppercase  pr-10 text-[#7C7C7C]"
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
        disabled={isLoading}
        className="w-full lg:py-[14.5px] bg-[#A47762] py-[14px] font-cofo  text-white uppercase font-semibold rounded-full hover:cursor-pointer"
      >
        {isLoading ? t("buttons.sending") : t("buttons.send")}
      </button>
    </div>
  );
}
