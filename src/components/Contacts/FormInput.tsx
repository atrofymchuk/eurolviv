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
      className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-full 2xl:max-w-[523px] text-[12px] lg:text-[18px] rounded-full lg:px-[18px] lg:py-[12px] xl:py-[15px] xl:ps-[24px]"
    />
  );
}; 