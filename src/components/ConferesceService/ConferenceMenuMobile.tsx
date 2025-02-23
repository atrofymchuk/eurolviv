type ConferenceMenuMobileCardToProps = {
  img: string;
};

export const ConferenceMenuMobileCard = ({
  img,
}: ConferenceMenuMobileCardToProps) => {
  return (
    <div className="flex flex-col items-center relative ">
      <img src={img} alt="" className="w-screen h-[432px] object-cover " />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.25%, #252526 100%),
                       linear-gradient(0deg, rgba(37, 37, 38, 0.2), rgba(37, 37, 38, 0.2))`,
        }}
      ></div>

      <div className="absolute">
        <div className="space-y-[13px]">
          <p className="uppercase text-[#FFFFFF] text-[24px] tracking-[-7%] leading-[104%] pt-[44px] text-center">
            фуршет
          </p>
          <button className="uppercase text-[#EDE8E5] border px-4 py-2 lg:text-[16px] border-[#EDE8E5] rounded-full lg:mt-[37px] font-medium">
            переглянути меню
          </button>
        </div>
        <div className="space-y-[13px]">
          <p className="uppercase text-[#FFFFFF] text-[24px] tracking-[-7%] leading-[104%] pt-[44px] text-center">
            обіди та вечері
          </p>
          <button className="uppercase text-[#EDE8E5] border px-4 py-2 lg:text-[16px] border-[#EDE8E5] rounded-full lg:mt-[37px] font-medium">
            переглянути меню
          </button>
        </div>
        <div className="space-y-[13px]">
          <p className="uppercase text-[#FFFFFF] text-[24px] tracking-[-7%] leading-[104%] pt-[44px] text-center">
            каво-перерви
          </p>
          <button className="uppercase text-[#EDE8E5] border px-4 py-2 lg:text-[16px] border-[#EDE8E5] rounded-full lg:mt-[37px] font-medium">
            переглянути меню
          </button>
        </div>
      </div>
    </div>
  );
};
