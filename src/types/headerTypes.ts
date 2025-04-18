export interface PageHeaderProps {
    backgroundImage: string;
    mobileSrc?: string;
    objectPosition?: string;
    wrapInView?: boolean;
    gradientStyle?: "dark" | "light" | "contacts";
    textColor?: "white" | "black";
    title: string;
    description?: string;
    size?: string;
    showBackLink?: boolean;
    backLinkTo?: string;
    backLinkText?: string;
    showBookButton?: boolean;
    showOrderButton?: boolean;
    showConferenceMenuButton?: boolean;
    customButton?: React.ReactNode;
    roomInfo?: {
      count?: string;
      view?: string;
      arriveTime?: string;
      leaveTime?: string;
    };
    onOrderClick?: () => void;
  }
  
  export interface HeaderBackgroundProps {
    backgroundImage: string;
    mobileSrc?: string;
    objectPosition?: string;
    wrapInView?: boolean;
    gradientStyle?: "dark" | "light" | "contacts" | "home";
  }
  
  export interface HeaderTitleProps {
    title: string;
    textColor?: "white" | "black";
  }
  
  export interface HeaderNavLinkProps {
    to: string;
    text: string;
  }
  
  export interface HeaderDescriptionProps {
    description: string;
    size?: string;
  }
  
  export interface HeaderActionsProps {
    showBookButton?: boolean;
    showOrderButton?: boolean;
    showConferenceMenuButton?: boolean;
    customButton?: React.ReactNode;
    onOrderClick?: () => void;
  }
  
  export interface HeaderRoomInfoProps {
    roomInfo: {
      count?: string;
      view?: string;
      arriveTime?: string;
      leaveTime?: string;
    };
  }

  import { Control, FieldErrors } from "react-hook-form";

export type FormData = {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: string;
};

export interface DatePickerFieldProps {
  name: string;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  label: string;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  placeholderKey: string;
} 