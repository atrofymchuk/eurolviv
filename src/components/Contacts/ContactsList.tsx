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
        <h4 className="text-[3.2vw] md:text-[14px] 2xl:text-[0.83vw] xl:text-[0.94vw] font-cofo-medium text-[#6B6B6B] uppercase w-[70%] md:w-fit">
          {title}
        </h4>
        {subtitle && (
          <p className="text-[3.2vw] md:text-[14px] 2xl:text-[0.83vw] xl:text-[0.94vw] text-[#999999] uppercase lg:mb-[21px] my-[6px_12px] mt-1 lg:mt-[6px] xl:mt-[0.31vw]">
            {subtitle}
          </p>
        )}
        <div className={cn("lg:space-y-2.25 2xl:space-y-[0.97vw] space-y-1 w-fit", { "lg:mt-[21px]  2xl:mt-[1.09vw]  mt-[11px]": !subtitle })}>
          {phones.map((phone, index) => (
            <p
              key={index}
              className="text-[3.2vw] md:text-[14px] lg:text-[16px] xl:text-[1.09vw] 2xl:text-[1.04vw] leading-[15px]  whitespace-nowrap"
            >
              {phone}
            </p>
          ))}
        </div>
        <p
          className={cn(
            "text-[3.2vw] lg:text-[14px] pt-[12px] 2xl:pt-[22px] xl:pt-[18px] font-cofo-medium uppercase lg:pb-0 xl:text-[1.09vw] 2xl:text-[1.04vw] ",
            { "pb-[24px] mt-auto": !instagramLink }
          )}
        >
          {email}
        </p>
        {instagramLink && (
          <div className="hover:cursor-pointer bg-[#8C331B] w-fit transition-transform hover:scale-110 rounded-full p-1.5 mt-3 2xl:mt-[0.63vw] mb-[24px] lg:mb-0">
            <Link to={instagramLink} target="_blank">
              <FaInstagram
                color="white"
                className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] xl:w-[1.72vw] xl:h-[1.72vw] 2xl:w-[1.58vw] 2xl:h-[1.58vw]"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
