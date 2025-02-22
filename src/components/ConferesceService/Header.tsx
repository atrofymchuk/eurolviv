import headerPhoto from "../../assets/ConferenceService/BigHall.jpg";
import headerPhotoMobile from "../../assets/ConferenceService/hallPhone.jpg";
import { useModalStore } from "../../store/useModalStore";

export const Header = () => {
  const { openModalOrder } = useModalStore();
  return (
    <div className="w-full relative">
      <img
        src={headerPhoto}
        alt="preview"
        className="object-cover w-full lg:h-[1181px] lg:block hidden  h-[808px]"
      />
      <img
        src={headerPhotoMobile}
        alt="preview"
        className="object-cover lg:hidden w-full lg:h-[1181px]  h-[808px]"
      />
      <div
        className="absolute inset-0 "
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                 linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.36%, #252526 100%)`,
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col  items-center justify-center text-center text-white z-10">
        <h4 className="font-cofo leading-[22.68px] font-semibold underline text-sm decoration-transparent xl:mb-4">
          СТВОРЕНИЙ ЩОБ ЗАКОХУВАТИ У
          <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
            Львів
          </span>
        </h4>
        <h1
          className="font-cofo xl:text-[183px] uppercase text-[64px] font-normal z-20  xl:leading-[146.4px] lg:w-[1523px]
        leading-[52.13px] tracking-[-7%] text-center underline decoration-transparent "
        >
          конференц-сервіс
        </h1>
        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22.68px] lg:w-[635px] lg:pt-[46px] pt-[30px] w-[335px]  text-[14px] leading-[17.5px]  ">
          ділові зустрічі які надихають
        </p>
        <button
          onClick={openModalOrder}
          className="uppercase bg-[#EDE8E5] text-[#252526] w-fit  px-[34.5px] py-[13.5px] rounded-3xl font-semibold text-sm mt-4 xl:mt-6.5 hover:cursor-pointer"
        >
          замовити подію
        </button>
        <button className="uppercase hover:bg-[#EDE8E5] hover:text-[#252526] text-[#EDE8E5] border-[#EDE8E5] border w-fit  px-[25.5px] py-[13.5px] rounded-3xl font-semibold text-sm mt-2 lg:hidden hover:cursor-pointer">
          конференц - меню
        </button>
      </div>
    </div>
  );
};
