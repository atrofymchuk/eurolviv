import { Control, Controller, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { FormData } from "../../../types/headerTypes";

interface GuestsSelectProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export const GuestsSelect: React.FC<GuestsSelectProps> = ({
  control,
  errors,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
   
      <Controller
        name="guests"
        control={control}
        render={({ field }) => (
          <div>
            <select
              {...field}
              className={cn(
                "w-full p-[5px] lg:p-2 ps-0 text-white border-b uppercase border-[#969696] cursor-pointer text-[2vw] 2xl:text-[0.63vw]",
                errors.guests && "border-red-500 border"
              )}
            >
              {[0, 1, 2, 3].map((index) => (
                <option
                  key={index}
                  className="text-black"
                  value={t(`home.header.bookingForm.gusts.options.${index}`)}
                >
                  {t(`home.header.bookingForm.gusts.options.${index}`)}
                </option>
              ))}
            </select>
            {errors.guests && (
              <p className="text-red-500 text-sm mt-1">
                {errors.guests.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};
