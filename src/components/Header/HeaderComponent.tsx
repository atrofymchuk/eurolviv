interface HeaderComponentProps {
  photo: string;
  desc:string | null
  title:string
  text:string
  textHightlited:string
  buttonText:string
}

export const HeaderComponent: React.FC<{HeaderInfo: HeaderComponentProps}> = ({ HeaderInfo }) => {
  const { photo, desc, title, text = 'створений щоб закохувати у', textHightlited = 'Львів', buttonText } = HeaderInfo;

  return (
    <div className="w-full relative lg:h-[1181px] h-[808px]" >
      <img
        src={photo}
        alt=""
        className="object-cover w-full lg:h-full  h-[808px]"
      />
      <div
        className="absolute inset-0 "
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                 linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.36%, #252526 100%)`,
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col  items-center justify-center text-center text-white z-10">
        <h4 className="font-cofo leading-[22.68px] font-semibold underline text-sm decoration-transparent xl:mb-4 ">
          <span className="uppercase lg:text-[18px]">

          {text}
          </span>
          <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
             {textHightlited}
          </span>
        </h4>
        <h1 className="font-cofo xl:text-[198px] uppercase text-[64px] font-normal z-20  xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
          
          {title}
        </h1>
        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] lg:pt-[46px] pt-[30px] w-[335px]  text-[14px] leading-[17.5px]  ">
       {desc}
        </p>
        <button className=" font-cofo font-extrabold uppercase z-20 bg-[#EDE8E5] text-black hover:cursor-pointer px-9 mt-8 py-3 rounded-4xl text-md">
           {buttonText}
        </button>
      </div>
    </div>
  );
};
