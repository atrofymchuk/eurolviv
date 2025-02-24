type ReviewSliderCardToProps = {
  text: string;
  impression: string;
};

export const ReviewSliderCard = ({
  text,
  impression,
}: ReviewSliderCardToProps) => {
  return (
    <div className="flex flex-col lg:h-[458px] lg:w-[581px] items-center border-e border-[#B3B3B3] lg:pt-[52px]">
      <div>
        <p className="uppercase lg:text-[20px] text-[#8C331B]">відгук</p>
        <p className="uppercase lg:text-[18px] text-[#6B6B6B] leading-[22.6px] lg:w-[469px] lg:pt-[13px]">
          {text}
        </p>
       {impression.length > 0 && <p className="uppercase lg:text-[18px] lg:leading-[22px] lg:pt-[29px]">
          <span className="font-semibold"> Загальне враження:</span>{" "}
          {impression}
        </p>}
      </div>
    </div>
  );
};
