import { Review } from "../../store/types";

export const  ReviewCard =({ review }: { review: Review }) =>{
    return (
        <div className="flex flex-col   overflow-auto  ">
        <div className="pt-[16px] ps-[17px] md:ps-[34px] md:pt-[33px] ">
          <h1 className="uppercase text-[16px] text-[#A47762]  md:text-[48px] md:leading-[60px] leading-[25.2px] font-semibold font-cofo md:tracking-[-0.04em]">
            {review.name}
          </h1>
          <p className="text-[#727272]  font-cofo uppercase md:text-[20px] text-[14px] leading-[17.6px] md:leading-[25.2px]">
            {review.flag} {review.country}
          </p>
        </div>
      
        <div className="md:ps-[33px] md:mt-[34px] max-h-fit mt-[28px] ps-[17px]  ">
        <h2 className="uppercase text-[#A47762] font-semibold md:text-[20px] text-[14px]   font-cofo ">відгук</h2>
          <p className="uppercase text-[#6B6B6B] md:pt-[13px] md:max-w-[476px] text-[12px] md:text-[18px] md:leading-[22px] font-cofo leading-[15.1px]">
            {review.text}
          </p>
        </div>
      </div>
      
    );
  }