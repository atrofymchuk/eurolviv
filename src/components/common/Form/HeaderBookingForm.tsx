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
      className="flex flex-col lg:flex-row gap-4  py-[17px_15px] lg:mt-[85px] mt-[59px] bg-white/26 backdrop-blur-[14.3px] lg:py-[29px_39px] lg:px-[35px_34px] rounded-2xl lg:max-w-3xl mx-auto lg:w-full w-[91%]"
    >
      <div className="lg:flex-row gap-4 w-full text-start ">
        <div className="flex gap-x-[3px] lg:gap-x-[11px] px-[20px_11px] lg:px-0">
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

        <p className="text-white uppercase lg:mt-[21px] mt-[12px]  lg:text-[16px] md:font-cofo-medium text-[10px] ps-[20px] lg:ps-0" >
          {t("home.header.bookingForm.gusts.title")}
        </p>

        <div className="flex gap-[11px] md:gap-[43px] flex-col md:flex-row">
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
