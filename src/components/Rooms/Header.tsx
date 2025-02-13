import headerPhoto from '../../assets/Rooms/header.jpg'

export const Header = ()=>{
    return(
        <div className="w-full relative">
        <img src={headerPhoto} alt="" className="object-cover w-full" />
        <div className="absolute inset-0 bg-[linear-gradient(2.57deg,rgba(255,255,255,0)_0.95%,#FFFFFF_95.83%)]"></div>

        <div className="absolute inset-0 flex flex-col mb-10 items-center justify-center text-center text-black z-10">
          <h4 className="font-cofo leading-[22.68px] font-semibold underline text-sm decoration-transparent xl:mb-4">
            СТВОРЕНИЙ ЩОБ ЗАКОХУВАТИ У
            <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
              Львів
            </span>
          </h4>
          <h1 className="font-cofo xl:text-[198px]  text-[64px] font-normal z-20 text-[#00000] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
            КОНТАКТИ
          </h1>
        </div>
      </div>
    )
}