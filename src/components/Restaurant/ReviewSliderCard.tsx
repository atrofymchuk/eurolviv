export const ReviewSliderCard = ({
  img,
  index,
}: {
  img: string;
  index: number;
}) => {
  return (
    <div
      className={`w-[calc(100%-1px)] lg:mx-0 flex flex-col 2xl:h-[458px] lg:h-[350px] 2xl:w-full 2xl:max-w-[28vw] xl:w-[28vw] lg:w-[350px]  
      border-b ${index < 4 ? "border-b-0" : ""}
       border-s border-e md:border-s-0 md:border-e border-t xl:border-t-0
    lg:border-b-0 md:h-[254px] border-[#B3B3B3] xl:h-[408px] overflow-hidden `}
    >
      <div className=" h-full lg:px-[18px] p-[9px] lg:py-[19px_18px] flex items-center  ">
        <img src={img} alt="review" className="w-full h-full " />
      </div>
    </div>
  );
};
