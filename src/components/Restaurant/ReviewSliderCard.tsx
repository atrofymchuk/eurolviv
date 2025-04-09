

export const ReviewSliderCard = ({ img }: { img: string }) => {
  return (
    <div
      className="w-full lg:mx-0 flex flex-col 2xl:h-[458px] lg:h-[350px] 2xl:w-[572px] xl:w-[450px] lg:w-[350px]  
      border-b border-s border-e md:border-s-0 md:border-e-0 border-t xl:border-t-0
    lg:border-b-0 md:h-[254px] border-[#B3B3B3] xl:h-[458px] overflow-hidden "
    >
      <div className=" h-full lg:px-[18px] p-[9px] lg:py-[19px_18px] flex items-center  ">
        <img src={img} alt="review" className="w-full h-full " />
      </div>
    </div>
  );
};
