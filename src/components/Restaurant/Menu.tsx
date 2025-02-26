import { MenuPC } from "./MenuPC";
import { MenuSmallWidth } from "./MenuSmallWidth";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div>
        <div className="grid lg:grid-cols-[638px_514px_637px] lg:h-full h-[521px] grid-cols-[334px] ">
          <div className="lg:h-[375px] lg:flex hidden lg:justify-end border-s border-t border-[#B3B3B3] "></div>

          <div className="lg:h-[375px] flex  border-[#B3B3B3] border-x border-t flex-col  items-center lg:justify-end text-center lg:pb-[70px] pb-[5px] pt-[55px] lg:pt-0">
            <span className="font-blessed xl:font-extrabold block text-center text-[16px] xl:text-[36px] lg:leading-[25.2px] leading ml-2 xl:inline lg:pb-[19px]">
              Меню
            </span>
            <h1 className="uppercase lg:text-[64px] lg:leading-[67px] leading-[94%] text-[32px]  tracking-[-7%] lg:whitespace-nowrap ">
              Меню, що балансує між традиціями <br /> та сучасністю
            </h1>
          </div>
          <div className="lg:flex hidden  border-[#B3B3B3] lg:border-t border-e "></div>

          <MenuPC className="lg:flex hidden" />
          <MenuSmallWidth className="flex lg:hidden" />

          <div className="lg:h-[329px] lg:flex hidden  lg:justify-end border-s border-[#B3B3B3] lg:pe-2.25"></div>
          <div className="lg:h-[329px] flex border-[#B3B3B3]  border-x flex-col  text-center  items-center">
            <p className="uppercase text-[#888888] lg:text-[16px] text-[12px] lg:leading-[120%]  lg:w-[359px] lg:pt-[39px]">
              Ретельно підібрана винна карта доповнює смакову гармонію.
            </p>
            <button className="uppercase text-[#8C331B] border-[#8C331B] border hover:cursor-pointer hover:bg-[#8C331B] hover:text-white rounded-full lg:text-[16px] mb-[30px] lg:mb-0 text-[13px] lg:mt-[19px] mt-[24px] lg:py-[13px] py-[12px] px-[20.5px]  lg:px-[17.5px]">
              переглянути меню
            </button>
          </div>
          <div className="lg:h-[329px] lg:flex hidden   border-[#B3B3B3] lg:ps-2.25 border-e"></div>
        </div>
      </div>
    </div>
  );
};
