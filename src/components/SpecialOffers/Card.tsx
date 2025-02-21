import { Link } from "react-router-dom";

type CardToProps = {
  src: string;
  title: string;
  desc: string;
  classes: string;
  offer: string;
};

export const Card = ({ src, title, desc, classes, offer }: CardToProps) => {
  return (
    <>
      <div className="relative">
        <img
          src={src}
          alt={title}
          className={`lg:w-[529px] lg:h-[510px] object-cover w-[273px] h-[264px] ${classes}`}
        />

        <p className="absolute lg:left-[20px] lg:top-[20px] left-[10px] top-[10px] uppercase lg:w-fit  border bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] lg:py-[13px] py-[7px] px-[12px] lg:px-[22px] rounded-full font-medium lg:text-[16px] text-[10px] leading-[12px]">
          {offer}
        </p>

        <h4
          className="uppercase text-[24px] tracking-[-0.05em] leading-[22px] 
          font-semibold pt-[20px] text-[#252526] lg:text-[32px] lg:leading-[26px] min-h-[60px] flex items-center"
        >
          {title}
        </h4>

        <p className="uppercase text-[12px] text-[#8F8F8F] lg:text-[18px] lg:leading-[17px] leading-[11px] lg:w-fit mt-3">
          {desc}
        </p>
      </div>

      <div className="text-start w-full lg:hidden mt-auto mb-[20px]">
        <Link
          to="/special-offers"
          className="font-semibold border border-[#8C331B] text-[#8C331B] px-4 py-3 rounded-full uppercase text-[12px] xl:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white font-cofo"
        >
          детальніше
        </Link>
      </div>
    </>
  );
};
