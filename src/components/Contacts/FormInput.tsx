import { UseFormRegister } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormInputProps {
  register: UseFormRegister<FormValues>;
  name: keyof FormValues;
  placeholder: string;
}

export const FormInput = ({ register, name, placeholder }: FormInputProps) => {
  return (
    <input
      {...register(name)}
      type="text"
      placeholder={placeholder}
      className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[27.24vw] text-[3.2vw] lg:text-[18px]  2xl:text-[0.94vw] rounded-full lg:px-[18px] lg:py-[12px] xl:py-[0.78vw] xl:ps-[1.25vw]"
    />
  );
}; 