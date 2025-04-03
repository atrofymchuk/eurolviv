import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

type FormData = {
  checkIn: Date;
  checkOut: Date;
  guests: string;
};

const schema = yup.object().shape({
  checkIn: yup.date().required("Оберіть дату заїзду"),
  checkOut: yup
    .date()
    .required("Оберіть дату виїзду")
    .min(yup.ref("checkIn"), "Дата виїзду повинна бути після дати заїзду"),
  guests: yup.string().required("Оберіть кількість гостей"),
});

export const HeaderBookingForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      guests: "2 ДОРОСЛИХ, 0 ДІТЕЙ",
    },
  });

  const onSubmit = (data: FormData) => {
    navigate("/booking", {
      state: {
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        guests: data.guests,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row items-center gap-4 mt-8 bg-white/26 backdrop-blur-[14.3px] p-6 rounded-lg max-w-4xl mx-auto w-full "
    >
      <div className="lg:flex-row gap-4 w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex-1">
          <p className="text-white uppercase mb-2 lg:text-[16px]">
            {t("ДАТА ЗАЇЗДУ")}
          </p>
          <Controller
            name="checkIn"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  selectsStart
                  startDate={field.value}
                  minDate={new Date()}
                  className={cn(
                    "w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none",
                    errors.checkIn && "border-red-500 border"
                  )}
                  placeholderText="Оберіть дату"
                />
                {errors.checkIn && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.checkIn.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex-1">
          <p className="text-white uppercase mb-2 text-sm">
            {t("ДАТА ВИЇЗДУ")}
          </p>
          <Controller
            name="checkOut"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  selectsEnd
                  startDate={field.value}
                  minDate={new Date()}
                  className={cn(
                    "w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none",
                    errors.checkOut && "border-red-500 border"
                  )}
                  placeholderText="Оберіть дату"
                />
                {errors.checkOut && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.checkOut.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex-1">
          <p className="text-white uppercase mb-2 text-sm">{t("ГОСТІ")}</p>
          <Controller
            name="guests"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <select
                  {...field}
                  className={cn(
                    "w-full p-3 rounded bg-white/20 text-white appearance-none cursor-pointer outline-none",
                    errors.guests && "border-red-500 border"
                  )}
                >
                  <option value="2 ДОРОСЛИХ, 0 ДІТЕЙ">
                    2 ДОРОСЛИХ, 0 ДІТЕЙ
                  </option>
                  <option value="2 ДОРОСЛИХ, 1 ДИТИНА">
                    2 ДОРОСЛИХ, 1 ДИТИНА
                  </option>
                  <option value="2 ДОРОСЛИХ, 2 ДІТЕЙ">
                    2 ДОРОСЛИХ, 2 ДІТЕЙ
                  </option>
                  <option value="1 ДОРОСЛИЙ">1 ДОРОСЛИЙ</option>
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
      </div>

      <button
        type="submit"
        className="bg-[#A47762] hover:bg-[#8C331B] transition-colors text-white uppercase font-cofo-medium text-sm px-8 py-3 rounded whitespace-nowrap"
      >
        {t("ЗАБРОНЮВАТИ НОМЕР")}
      </button>
    </form>
  );
};
