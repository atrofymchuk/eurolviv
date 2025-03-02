type ReviewSliderCardToProps = {
  text: string;
  impression: string;
};

export const ReviewSliderCard = ({
  text,
  impression,
}: ReviewSliderCardToProps) => {
  return (
    <div className="mx-auto lg:mx-0 flex flex-col 2xl:h-[458px] lg:h-[270px] 2xl:w-[581px]  items-center border-e border-b border-s md:border-s-0 border-t xl:border-t-0 p-5 lg:p-0 lg:border-b-0 md:h-[254px]  border-[#B3B3B3] lg:pt-[52px] xl:h-[277px]  ">
      <div className="lg:pe-5 xl:pe-0">
        <p className="uppercase 2xl:text-[20px] text-[12px] text-[#8C331B] font-semibold">відгук</p>
        <p className="uppercase 2xl:text-[18px] text-[12px] text-[#6B6B6B] lg:leading-[22.6px] leading-[15px] 2xl:w-[469px] xl:w-[369px] lg:w-[300px] lg:pt-[13px]">
          {text}
        </p>
       {impression.length > 0 && <p className="uppercase 2xl:text-[18px] text-[12px] lg:leading-[22px] 2xl:pt-[29px]  pt-[15px]">
          <span className="font-semibold"> Загальне враження:</span>
          {impression}
        </p>}
      </div>
    </div>
  );
};
