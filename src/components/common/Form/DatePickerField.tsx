import DatePicker, { registerLocale } from "react-datepicker";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { calendarBooking } from "@/store/exportsIcons";
import { DatePickerFieldProps } from "@/types/headerTypes";
import { useState, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FormData } from "@/types/headerTypes";
import "@/components/common/Form/datePickerStyles.css";
import { uk, enUS } from "date-fns/locale";

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  control,
  errors,
  label,
  placeholderKey,
  classNameCalendar,
}) => {
  const { t, i18n } = useTranslation();
  const width = window.innerWidth;
  const getInputText = () => {
    if (width < 1024) {
      return t(label);
    }
    return t(placeholderKey);
  };
  const [startDate, setStartDate] = useState<Date | string | null>(null);

  if (i18n.language === "uk") {
    registerLocale("uk", uk);
  } else {
    registerLocale("en", enUS);
  }

  const datePickerRef = useRef<DatePicker | null>(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className="w-full ">
      <p className="text-white uppercase mb-3 2xl:text-[0.83vw] xl:text-[1.09vw] lg:text-[14px] md:flex hidden">
        {t(label)}
      </p>
      <Controller
        name={name as keyof FormData}
        control={control}
        render={({ field }) => (
          <div className="relative w-full">
            <div className="relative w-full controller-wrapper rounded-xl">
              <DatePicker
                ref={datePickerRef}
                disabledKeyboardNavigation={true}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                onInputClick={() => {
                  handleIconClick();
                }}
                locale={i18n.language}
                calendarClassName={classNameCalendar}
                onChange={(date) => {
                  setStartDate(date);
                  field.onChange(date);
                }}
                selected={typeof field.value === "string" ? null : field.value}
                startDate={typeof startDate === "string" ? null : startDate}
                minDate={new Date()}
                className={cn(
                  "w-full min-h-9 ps-[26px] pe-10 lg:ps-[40px] lg:pe-10 py-[7.5px] 2xl:py-[0.52vw] 2xl:ps-[2.08vw] lg:text-[14px] xl:ps-[3vw] xl:py-[0.67vw] rounded-xl bg-white/20 text-white placeholder-white/70 outline-none text-[10px] 2xl:text-[0.83vw]",
                  errors[name as keyof FormData] && "border-red-500 border"
                )}
                placeholderText={getInputText()}
              />
              <img
                src={calendarBooking}
                alt="calendar"
                className="absolute lg:left-3 left-2 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-[18px] lg:h-[18px] 2xl:w-[1vw] 2xl:h-[1vw] max-w-[20px] max-h-[20px] cursor-pointer object-contain"
                onClick={handleIconClick}
              />
              <span
                className="bg-white rounded-full p-1 lg:p-1.5 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer shrink-0 flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7"
                onClick={handleIconClick}
              >
                <FiChevronDown
                  className="w-3 h-3 lg:w-3.5 lg:h-3.5 2xl:w-[0.94vw] 2xl:h-[0.94vw] 2xl:max-w-[14px] 2xl:max-h-[14px] shrink-0"
                  color="#3D3D3D"
                />
              </span>
            </div>
            {errors[name as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">
                {t(errors[name as keyof FormData]?.message as string)}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};
