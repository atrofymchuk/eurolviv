import { Control, FieldErrors } from "react-hook-form";

export type FormData = {
  checkIn: Date;
  checkOut: Date;
  guests: string;
};

export interface DatePickerFieldProps {
  name: "checkIn" | "checkOut";
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  label: string;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  placeholderKey: string;
} 