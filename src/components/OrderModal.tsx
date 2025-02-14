import Modal from "react-modal";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import calendarIco from "../assets/icons/Modal/calendar.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

type FormData = {
  date: Date | null;
  name: string;
  phone: string;
  email: string;
  guests: string;
  needRooms: boolean;
};

const OrderModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Форма відправлена:", data);

    console.log(data.date);

    toast.success("Форма успішно надіслана!", { position: "top-right" });
    setTimeout(() => {
        reset()
      onClose();
    }, 5000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex  lg:items-center lg:justify-center"
      overlayClassName="fixed inset-0 bg-black/49 z-100"
    >
      <div className="bg-white  lg:w-[504px] lg:h-fit h-screen  relative flex flex-col justify-center p-[37px] pt-0 items-center">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
          <IoClose />
        </button>
        <div className="lg:items-center flex flex-col">
          <h2 className="lg:mb-[25px]  text-center lg:text-[48px] text-[32px] leading-[30px]  lg:leading-[39px] lg:w-[337px] lg:pt-[68px] items-center lg:tracking-[-0.07em] uppercase text-[#252526]">
            Замовити <br className="lg:hidden block"/> подію
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
              toast.error("Виберіть коректну дату", { position: "top-right" });
            }
          })}
          className="mt-4 flex flex-col gap-3"
        >
          <div className="relative">
            <div className="flex justify-between items-center border-b border-[#C9C9C9] lg:pb-[8px] pb-[8px]">
              <label className="font-cofo flex items-center text-[14px] lg:text-[18px] uppercase ">
                Дата заходу
              </label>
              <div className="bg-[#A47762] rounded-full p-2 w-fit">
                <img
                  className="text-xl cursor-pointer"
                  src={calendarIco}
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                />
              </div>
            </div>

            {isDatePickerOpen && (
              <div className="absolute z-10 mt-2 bg-white shadow-md p-2 rounded-lg">
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: "Виберіть дату" }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => {
                        field.onChange(date);
                        setIsDatePickerOpen(false);
                      }}
                      minDate={
                        new Date(new Date().setDate(new Date().getDate()))
                      }
                      showPopperArrow={false}
                      inline
                    />
                  )}
                />
              </div>
            )}
          </div>

          <div className="lg:pt-[18px] space-y-[8px] lg:w-[436px]">
            <input
              type="text"
              {...register("name", { required: "Введіть контактну особу" })}
              placeholder="КОНТАКТНА ОСОБА"
              className="font-cofo w-full py-[14px] px-[15px] lg:text-[14px] text-[12px] rounded-full outline-none bg-[#C2C2C242] ps-[25px]"
            />

            <input
              type="tel"
              {...register("phone", {
                required: "Введіть номер телефону",
                pattern: {
                  value: /^[0-9]{10,15}$/, 
                  message: "Некоректний номер телефону",
                },
              })}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ""); 
              }}
            
              placeholder="НОМЕР ТЕЛЕФОНУ"
              className="font-cofo w-full py-[14px] px-[15px] lg:text-[14px] text-[12px] rounded-full outline-none bg-[#C2C2C242] ps-[25px]"
            />

            <input
              type="email"
              {...register("email", {
                required: "Введіть email",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Некоректний email",
                },
              })}
              placeholder="EMAIL"
              className="font-cofo w-full py-[14px] lg:text-[14px] text-[12px] px-[15px] ps-[25px] rounded-full outline-none bg-[#C2C2C242]"
            />

            <div className="relative w-full">
              <select
                className="w-full font-cofo py-[14px] lg:text-[14px] text-[12px] px-[25px] rounded-full outline-none bg-[#C2C2C242] uppercase appearance-none pr-10 text-[#7C7C7C]"
                {...register("guests", {
                  required: "Оберіть кількість гостей",
                })}
              >
                <option value="" className="text-[#7C7C7C]">
                  Кількість осіб
                </option>
                <option className="font-cofo" value="1">1</option>
                <option className="font-cofo" value="2">2</option>
                <option className="font-cofo" value="3">3</option>
                <option className="font-cofo" value="4">4</option>
              </select>
              <IoIosArrowDown className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#252526] text-xl pointer-events-none" />
            </div>

            <div className="flex items-center gap-2 text-sm justify-center text-[#A47762] lg:mt-[25px] lg:mb-[39px] lg:p-0 pt-[10px] pb-[8px]">
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
                Чи потрібні номери для гостей?
              </label>
            </div>

            <button
              type="submit"
              className="w-full lg:py-[14.5px] bg-[#A47762] py-[14px] font-cofo  text-white uppercase font-semibold rounded-full hover:cursor-pointer"
            >
              Надіслати
            </button>
          </div>
        </form>

        <ToastContainer
          position="top-right"
          style={{ zIndex: 100 }}
          autoClose={5000}
        />
      </div>
    </Modal>
  );
};

export default OrderModal;
