export const Header = () => {
  return (
    <div className="flex items-center  justify-center bg-[#252526] lg:pt-[117px] pt-[73px] ">
      <div className="grid lg:grid-cols-[573px_575px_572px] grid-cols-[297px]  text-[#EDE8E5] text-center lg:text-start  ">
        <div className="border-s  border-[#515151] flex flex-col  lg:pt-[96px] lg:ps-[31px] pt-[53px] pb-[49px] lg:mb-0 lg:h-[537px]">
          <h1 className="uppercase lg:leading-[180px] lg:text-[198px] lg:tracking-[-0.09em] z-0 font-cofo text-[48px] leading-[39px] tracking-[-0.1em] text-[#FFFFFF] ">
            спеціальні
          </h1>
          <h1 className="uppercase lg:leading-[180px] lg:text-[198px] lg:tracking-[-0.09em] lg:text-end xl:w-[1680px] text-[48px] leading-[39px] tracking-[-0.1em] text-[#FFFFFF]">
            пропозиції
          </h1>
          <p className=" relative lg:top-[-120px] lg:w-[415px] uppercase lg:text-[18px] text-[12px] p-4 lg:leading-[22px] font-cofo pt-[20px] lg:pt-0">
            Обирайте найкраще для свого відпочинку – комфортні номери, вигідні
            тарифи, особливі бонуси та незабутні враження чекають на вас у
            самому серці Львова
          </p>
        </div>
        <div className="border-s border-e border-[#515151] flex  lg:pt-[267px] lg:ps-[25px] "></div>
        <div className="border-e border-[#515151] flex  items-center"></div>
        <div className="border-e border-[#515151] flex  items-center lg:hidden"></div>
      </div>
    </div>
  );
};
