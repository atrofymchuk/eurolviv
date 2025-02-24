import coffe from "../../assets/Terrase/Menu/Coffe.png";
import meat from "../../assets/Terrase/Menu/meat.png";
import spagetti from "../../assets/Terrase/Menu/spagetti.png";

export const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div>
        <div className="grid lg:grid-cols-[638px_514px_637px]  grid-cols-[334px] ">
          <div className="lg:h-[375px] flex justify-end border-s border-t border-[#B3B3B3] "></div>

          <div className="lg:h-[375px] flex border-[#B3B3B3] border-x border-t flex-col items-center justify-end text-center pb-[70px]">
            <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-[36px] lg:leading-[25.2px] ml-2 xl:inline lg:pb-[19px]">
              Меню
            </span>
            <h1 className="uppercase lg:text-[64px] lg:leading-[67px] lg:w- lg:tracking-[-7%] whitespace-nowrap ">
              Меню, що балансує між традиціями <br /> та сучасністю
            </h1>
          </div>
          <div className="flex  border-[#B3B3B3] border-t border-e"></div>

          <div className="flex  justify-end border-s border-[#B3B3B3] lg:pe-2.25">
            <img
              src={coffe}
              alt=""
              className="lg:w-[456px] lg:h-[686px] w-[97px] h-[146px] object-cover "
            />
          </div>
          <div className="flex border-[#B3B3B3] flex-col  text-center  items-center">
            <img
              src={spagetti}
              alt=""
              className="lg:w-full lg:h-[686px] w-[97px] h-[146px] object-cover "
            />
          </div>
          <div className="flex border-[#B3B3B3] lg:ps-2.25 border-e">
            <img
              src={meat}
              alt=""
              className="lg:w-[456px] lg:h-[686px] w-[97px] h-[146px] object-cover"
            />
          </div>

          <div className="lg:h-[329px] flex justify-end border-s border-[#B3B3B3] lg:pe-2.25"></div>
          <div className="lg:h-[329px] flex border-[#B3B3B3]  border-x flex-col  text-center  items-center">
            <p className="uppercase text-[#888888] lg:text-[16px] lg:leading-[120%] lg:w-[359px] lg:pt-[39px]">
              Ретельно підібрана винна карта доповнює смакову гармонію.
            </p>
            <button className="uppercase text-[#8C331B] border-[#8C331B] border  rounded-full lg:text-[16px] lg:mt-[19px] lg:py-[13px] lg:px-[17.5px]">
              переглянути меню
            </button>
          </div>
          <div className="lg:h-[329px] flex  border-[#B3B3B3] lg:ps-2.25 border-e"></div>
        </div>
      </div>
    </div>
  );
};
