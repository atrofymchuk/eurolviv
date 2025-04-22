import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import "../HeaderPage/styles.css";
import { DatePickerField } from "./DatePickerField";
import { GuestsSelect } from "./GuestsSelect";
import { BookButton } from "./BookButton";
import { FormData } from "../../../types/headerTypes";
import { formSchema } from "../../../schemas/bookRoom";
import { useTranslation } from "react-i18next";

export const HeaderBookingForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      checkIn: null,
      checkOut: null,
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
      className="flex flex-col lg:flex-row gap-4  py-[17px_15px] 2xl:mt-[3.96vw] mt-[59px] bg-white/26 backdrop-blur-[14.3px] 2xl:py-[2vw_1.52vw] xl:py-[1.2vw_1.8vw] xl:px-[1.52vw_1.47vw] 2xl:px-[1.82vw_1.77vw] rounded-2xl 2xl:w-[40.26vw] xl:w-[42vw] mx-auto  w-[91%]"
    >
      <div className="lg:flex-row gap-4 w-full text-start ">
        <div className="flex gap-x-[3px] 2xl:gap-x-[0.57vw] xl:gap-x-[0.42vw] px-[20px_11px] lg:px-0">
          <DatePickerField
            name="checkIn"
            control={control}
            errors={errors}
            label="home.header.bookingForm.checkIn"
            placeholderKey="home.header.bookingForm.chooseDateIn"
          />

          <DatePickerField
            name="checkOut"
            control={control}
            errors={errors}
            label="home.header.bookingForm.checkOut"
            placeholderKey="home.header.bookingForm.chooseDateOut"
          />
        </div>
        <div className="">

        <p className="text-white uppercase 2xl:mt-[1.09vw] lg:mt-[21px] mt-[12px]  2xl:text-[1.09vw] xl:text-[1.09vw] md:font-cofo-medium text-[2.67vw] ps-[20px] lg:ps-0" >
          {t("home.header.bookingForm.gusts.title")}
        </p>

        <div className="flex gap-[11px] 2xl:gap-[2.24vw] flex-col md:flex-row">
          <div className="px-[19px_18px] lg:px-0 w-full">

          <GuestsSelect control={control} errors={errors} />
          </div>
          <div className="px-[15px] lg:px-0">

          <BookButton />
          </div>
        </div>
        </div>
      </div>
    </form>
  );
};
