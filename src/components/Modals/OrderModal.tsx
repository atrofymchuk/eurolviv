import Modal from "react-modal";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import { calendar } from "../../store/exportsIcons";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import OrderModalForm from "./OrderModalForm";
import { validationSchema } from "../../schemas/orderHall";
import emailjs from "emailjs-com"; 
import { useIsEnglish } from "../Hooks/useIsEnglish";
import { uk, enUS } from "date-fns/locale";
Modal.setAppElement("#root");

export interface FormData {
  date: Date;
  name: string;
  phone: string;
  email: string;
  guests?: number;
  needRooms?: boolean;
}



const OrderModal = ({
  onCloseGlobalModal,
}: {
  onCloseGlobalModal: () => void;
}) => {
  const { t, i18n } = useTranslation();
  const isEng = useIsEnglish()
  const {
    control,
    register,
    handleSubmit,
    getValues,
    reset,

    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (i18n.language === "uk") {
    registerLocale("uk", uk);
  } else {
    registerLocale("en", enUS);
  }
  
  const onSubmit: SubmitHandler<FormData> = useCallback(
    (data) => {
      setIsLoading(true);
      const templateParams = {
        user_name: data.name,
        user_email: data.email,
        user_phone: data.phone,
        user_guests: data.guests,
        user_date: data.date.toLocaleDateString("uk-UA"),
        user_needRooms: data.needRooms ? "Так" : "Ні",
        user_isEng: isEng ? "Так" : "Ні",
      };
  
      emailjs
        .send(
          "service_giyw17p", 
          "template_a3t0f14", 
          templateParams,
          "0A61tJFFXJIR6r1M1" 
        )
        .then(() => {
          toast.success(t("orderModal.toast.success"));
          setTimeout(() => {
            reset();
            onCloseGlobalModal();
          }, 5000);
        })
        .catch((error) => {
          console.error("Email send error:", error);
          toast.error(t("orderModal.toast.error"));
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [t, reset, onCloseGlobalModal,isEng]
  );

  return (
    <div className="bg-white  lg:w-[504px] lg:h-fit  relative flex flex-col justify-center lg:p-[37px] py-[48px_28px]  items-center px-[7px]">
      <button
        className="absolute lg:top-4 lg:right-4 top-1.5 -right-3 text-2xl hover:cursor-pointer"
        onClick={onCloseGlobalModal}
      >
        <IoClose className="w-[32px] h-[32px]" />
      </button>
      <div className="lg:items-center flex flex-col">
        <h2 className="lg:mb-[25px]  text-center lg:text-[48px] text-[32px] leading-[30px]  lg:leading-[39px] lg:w-[337px] lg:pt-[30px] items-center lg:tracking-[-0.07em] uppercase text-[#252526]">
          {t("orderModal.title.0")}
          {t("orderModal.title.1")}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit, () => {
          Object.values(errors).forEach((error) => {
            if (error?.message) {
              toast.error(t(error.message), { position: "top-right" });
            }
          });
          if (!getValues("date")) {
            toast.error(t("orderModal.toast.errorDate"), {
              position: "top-right",
            });
          }
        })}
        className="mt-4 flex flex-col gap-3"
      >
        <div className="relative">
          <div className="flex justify-between items-center border-b border-[#C9C9C9] lg:pb-[8px]">
            <label className="font-cofo flex items-center text-[12px] lg:text-[18px] uppercase ">
              {t("orderModal.date")}
            </label>
            <div className="bg-[#A47762] rounded-full p-2 w-fit mb-[6px] lg:mb-[0px]">
              <img
                loading="lazy"
                className="text-xl cursor-pointer"
                src={calendar}
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              />
            </div>
          </div>

          {isDatePickerOpen && (
            <div className="absolute z-10 -mt-1 bg-white right-0 rounded-lg">
              <Controller
                name="date"
                control={control}
                rules={{ required: t("orderModal.errors.date") }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    dateFormat="dd/MM/yyyy"
                    locale={i18n.language}
                    disabledKeyboardNavigation={false}
                    onKeyDown={(e) => {
                      e.preventDefault();
                  }}
                    onChange={(date) => {
                      field.onChange(date);
                      
                      setIsDatePickerOpen(false);
                    }}
                    minDate={new Date(new Date().setDate(new Date().getDate()))}
                    showPopperArrow={false}
                    inline
                  />
                )}
              />
            </div>
          )}
        </div>

        <OrderModalForm register={register} isLoading={isLoading} getValues={getValues} />
      </form>

      <ToastContainer
        position="top-right"
        style={{ zIndex: 2000 }}
        autoClose={5000}
      />
    </div>
  );
};

export default OrderModal;
