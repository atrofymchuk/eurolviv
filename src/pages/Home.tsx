import headerPhoto from "../../assets/Rooms/header.jpg";

export const Header = () => {
  return (
    <div className="w-full relative">
      <img
        src={headerPhoto}
        alt="preview"
        className="object-cover w-full lg:h-[1181px]  h-[808px]"
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
        <h1 className="font-cofo xl:text-[198px] uppercase text-[64px] font-normal z-20  xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
          номери
        </h1>
        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] lg:pt-[46px] pt-[30px] w-[335px]  text-[14px] leading-[17.5px]  ">
          Ми цінуємо вашу довіру і робимо все, щоб ваше перебування стало для
          вас теплим і незабутнім досвідом
        </p>
      </div>
    </div>
  );
};
