import { Review } from "../../store/types";

export const  ReviewCard =({ review }: { review: Review }) =>{
    return (
        <div className="flex flex-col  lg:w-[533px] lg:max-w-[533px] w-[289px] lg:h-[329px] h-[210px]   bg-[#EDE8E5]  ">
        <div className="pt-[16px] ps-[17px] xl:ps-[34px] xl:pt-[33px] ">
          <h1 className="uppercase text-[16px] text-[#A47762]  xl:text-[48px] xl:leading-[60px] leading-[25.2px] font-semibold font-cofo xl:tracking-[-0.04em]">
            {review.name}
          </h1>
          <p className="text-[#727272]  font-cofo uppercase xl:text-[20px] text-[14px] leading-[17.6px] xl:leading-[25.2px]">
            {review.flag} {review.country}
          </p>
        </div>
      
        <div className="xl:ps-[33px] xl:mt-[34px] max-h-fit mt-[28px] ps-[17px]  ">
        <h2 className="uppercase text-[#A47762] font-semibold xl:text-[20px] text-[14px]   font-cofo ">відгук</h2>
          <p className="uppercase text-[#6B6B6B] xl:pt-[13px] xl:max-w-[476px] text-[12px] xl:text-[18px] xl:leading-[22px] font-cofo leading-[15.1px]">
            {review.text}
          </p>
        </div>
      </div>
      
    );
  }