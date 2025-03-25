import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import cn from "classnames";

type ContactListProps = {
  title: string;
  subtitle?: string;
  phones: string[];
  email: string;
  instagramLink?: string;
  className?: string;
};

export const ContactList = ({
  title,
  subtitle,
  phones,
  email,
  instagramLink,
  className = "",
}: ContactListProps) => {
  return (
    <div
      className={cn(
        "md:block   items-center flex flex-col md:border-b-0 md:border-e-0 border-b border-e md:px-[16px] lg:px-0 border-[#C7C7C7] lg:w-fit h-full  ",
        className
      )}
    >
      <div className="flex flex-col items-center md:items-start h-full">
        <h4 className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo-medium text-[#6B6B6B] uppercase w-[70%] md:w-fit">
          {title}
        </h4>
        {subtitle && (
          <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#999999] uppercase lg:mb-[21px] mt-1 lg:mt-[6px] lg:leading-[22px]">
            {subtitle}
          </p>
        )}
        <div className={cn("lg:space-y-2.25 space-y-1 w-fit", { "lg:mt-[21px] md:mt-1": !subtitle })}>
          {phones.map((phone, index) => (
            <p
              key={index}
              className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-[15px] lg:leading-[22px] whitespace-nowrap"
            >
              {phone}
            </p>
          ))}
        </div>
        <p
          className={cn(
            "text-[12px] lg:text-[14px] pt-[15px] font-cofo-medium uppercase lg:pb-0 xl:text-[20px] lg:pt-[21px] lg:leading-[25px] leading-[12px]",
            { "pb-[24px] mt-auto": !instagramLink }
          )}
        >
          {email}
        </p>
        {instagramLink && (
          <div className="hover:cursor-pointer bg-[#8C331B] w-fit transition-transform hover:scale-110 rounded-full p-1.5 mt-3 mb-[24px] lg:mb-0">
            <Link to={instagramLink} target="_blank">
              <FaInstagram
                color="white"
                className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
