type ReviewSliderCardToProps = {
  text: string;
  impression: string;
};

export const ReviewSliderCard = ({
  text,
  impression,
}: ReviewSliderCardToProps) => {
  return (
    <div className="mx-auto lg:mx-0 flex flex-col lg:h-[458px] lg:w-[581px] w-[334px] items-center border-e border-b border-s lg:border-s-0 p-5 lg:p-0 lg:border-b-0 border-[#B3B3B3] lg:pt-[52px]">
      <div>
        <p className="uppercase lg:text-[20px] text-[12px] text-[#8C331B] font-semibold">відгук</p>
        <p className="uppercase lg:text-[18px] text-[12px] text-[#6B6B6B] lg:leading-[22.6px] leading-[15px] lg:w-[469px] lg:pt-[13px]">
          {text}
        </p>
       {impression.length > 0 && <p className="uppercase lg:text-[18px] text-[12px] lg:leading-[22px] lg:pt-[29px] pt-[15px]">
          <span className="font-semibold"> Загальне враження:</span>
          {impression}
        </p>}
      </div>
    </div>
  );
};
