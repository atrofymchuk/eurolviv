import AboutSlider from './AboutSlider'

export const AbootSliderContainer = () =>{

    return (

        <div className='relative flex items-center lg:justify-end justify-end 2xl:h-[886px] xl:h-[750px] lg:h-[650px]  md:h-[570px] h-[360px] flex-col'>
          <div className='absolute w-[93.16%] 2xl:h-[886px]  xl:h-[650px] lg:h-[680px]  md:h-[570px] h-[360px]  border-x border-[#B3B3B3] z-[-2]'>
          </div>
            <AboutSlider  />
            <button className="font-cofo lg:mb-[36px] lg:text-[14px] lg:mt-[38px] font-medium bg-[#8C331B] border border-[#8C331B] hover:text-[#8C331B] uppercase  mt-[37px] mb-[55px] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer px-4.5 py-[13px] rounded-4xl text-[12px]">
          забронювати стіл
        </button>               
        </div>
    )
}


