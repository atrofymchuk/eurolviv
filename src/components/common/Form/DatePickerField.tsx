import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { calendarBooking } from "../../../store/exportsIcons";
import { DatePickerFieldProps } from "../../../types/headerTypes";
import { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  control,
  errors,
  label,
  placeholderKey,
}) => {
  const { t } = useTranslation();
  const width = window.innerWidth;
  const getInputText = () => {
    if (width < 1024) {
      return t(label);
    }
    return t(placeholderKey);
  };
  const [startDate, setStartDate] = useState<Date | string | null>(null);
  const [placeholder] = useState<string>(getInputText());

  const datePickerRef = useRef<DatePicker | null>(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className="w-full">
      <p className="text-white uppercase mb-3 lg:text-[16px] md:flex hidden">{t(label)}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative w-full controller-wrapper">
            <DatePicker
              ref={datePickerRef}
              onChange={(date) => {
                setStartDate(date);
                field.onChange(date);
              }}
              selected={typeof field.value === "string" ? null : field.value}
              startDate={typeof startDate === "string" ? null : startDate}
              minDate={new Date()}
              className={cn(
                "w-full ps-[26px] py-[7.5px] lg:py-[10px] lg:ps-[40px] rounded-xl bg-white/20 text-white placeholder-white/70 outline-none text-[10px] lg:text-[16px]",
                errors[name] && "border-red-500 border"
              )}
              placeholderText={placeholder}
            />
            <img
              src={calendarBooking}
              alt="calendar"
              className="absolute lg:left-3 left-1.25 top-1/2 transform -translate-y-1/2 lg:w-[19px] lg:h-[19px] w-[12px] h-[12px] cursor-pointer"
              onClick={handleIconClick}
            />
            <span
              className="bg-white rounded-full lg:p-[7px] p-[2px]  absolute lg:right-2 right-1.25 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleIconClick}
            >
              <FiChevronDown className="lg:w-[18px] lg:h-[18px] w-[16px] h-[16px]" color="#3D3D3D" />
            </span>
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name]?.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};
