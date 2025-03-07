import Modal from "react-modal";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import { calendar} from "../../store/exportsIcons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import OrderModalForm from "./OrderModalForm";

Modal.setAppElement("#root");

export interface FormData {
  date: Date;
  name: string;
  phone: string;
  email: string;
  guests: string;
  needRooms?: boolean;
}

const OrderModal = ({
  onCloseGlobalModal,
}: {
  onCloseGlobalModal: () => void;
}) => {
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    date: yup.date().required(t("orderModal.errors.date")),
    name: yup
      .string()
      .required(t("orderModal.errors.name"))
      .min(2, t("validation.nameShort")),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, t("orderModal.errors.tel2"))
      .required(t("orderModal.errors.tel")),
    email: yup
      .string()
      .email(t("orderModal.errors.email2"))
      .required(t("orderModal.errors.email")),
    guests: yup.string().required(t("orderModal.errors.guests")),
    needRooms: yup.boolean(),
  });

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

  const onSubmit: SubmitHandler<FormData> = useCallback(
    (data) => {
      console.log("Форма відправлена:", data);
      toast.success(t("orderModal.toast.success"));
      setTimeout(() => {
        reset();
        onCloseGlobalModal();
      }, 5000);
    },
    [t, reset, onCloseGlobalModal]
  );


  return (
    <div className="bg-white  lg:w-[504px] lg:h-fit h-screen  relative flex flex-col justify-center p-[37px] pt-0 items-center">
      <button
        className="absolute top-4 right-4 text-2xl hover:cursor-pointer"
        onClick={onCloseGlobalModal}
      >
        <IoClose />
      </button>
      <div className="lg:items-center flex flex-col">
        <h2 className="lg:mb-[25px]  text-center lg:text-[48px] text-[32px] leading-[30px]  lg:leading-[39px] lg:w-[337px] lg:pt-[68px] items-center lg:tracking-[-0.07em] uppercase text-[#252526]">
          {t("orderModal.title.0")} <br className="lg:hidden block" />{" "}
          {t("orderModal.title.1")}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit, () => {
          Object.values(errors).forEach((error) => {
            if (error?.message) {
              toast.error(error.message, { position: "top-right" });
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
          <div className="flex justify-between items-center border-b border-[#C9C9C9] lg:pb-[8px] pb-[8px]">
            <label className="font-cofo flex items-center text-[14px] lg:text-[18px] uppercase ">
              {t("orderModal.date")}
            </label>
            <div className="bg-[#A47762] rounded-full p-2 w-fit">
              <img
                className="text-xl cursor-pointer"
                src={calendar}
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              />
            </div>
          </div>

          {isDatePickerOpen && (
            <div className="absolute z-10 mt-2 bg-white shadow-md p-2 rounded-lg">
              <Controller
                name="date"
                control={control}
                rules={{ required: t("orderModal.errors.date") }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    dateFormat="dd/MM/yyyy"
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

        <OrderModalForm register={register} />
      </form>

      <ToastContainer
        position="top-right"
        style={{ zIndex: 100 }}
        autoClose={5000}
      />
    </div>
  );
};

export default OrderModal;
