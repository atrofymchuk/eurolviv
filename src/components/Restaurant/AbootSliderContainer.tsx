import AboutSlider from './AboutSlider'

export const AbootSliderContainer = () =>{

    return (

        <div className='relative flex items-center lg:justify-end justify-end lg:h-[886px] h-[360px] flex-col'>
          <div className='absolute lg:w-[1789px] lg:h-[886px] h-[360px] w-[334px]  border-x border-[#B3B3B3]  z-[-2]'>
          </div>
            <AboutSlider />
            <button className="font-cofo lg:mb-[36px] lg:text-[14px] lg:mt-[38px] font-medium bg-[#8C331B] uppercase  mt-[37px] mb-[55px] text-[#FFFFFF] hover:cursor-pointer px-4.5 py-[13px] rounded-4xl text-[12px]">
          забронювати стіл
        </button>               
        </div>
    )
}


