
import aboutImageFst from '../../assets/Restaurant/about1.jpg'
import aboutImageScd from '../../assets/Restaurant/about2.jpg'
import aboutImageTrd from '../../assets/Restaurant/about3.jpg'


export const AboutRestaurant = ()=>{
    return(
        <div className="flex flex-col  justify-center items-center "> 
            <div className="grid lg:grid-cols-[748px_1041px] grid-cols-[334px]">
                <div className="border-x border-b border-[#B3B3B3] lg:h-[53px]"></div>
                <div className="border-e border-b border-[#B3B3B3] lg:h-[53px]"></div>
                <div className="border-x lg:border-b border-[#B3B3B3] flex flex-col items-center justify-center lg:pt-[54px] lg:pb-[60px] lg:text-start text-center">
                    <div className="lg:w-[635px] w-[299px] ">
                        
                    <p className="font-blessed  leading-[70%] lg:text-[36px] text-[#242425] text-[16px] lg:pt-0 pt-[33px]" >Про ресторан </p>
                    <h1 className="uppercase lg:text-[100px] tracking-[-7%] lg:leading-[81%] leading-[50%] pt-[8px] lg:pt-[12px] text-[#242425] text-[64px]">ruff <span className="lg:text-[64px] lg:tracking-[-6%] text-[32px]"> <br className='lg:hidden '/>  &nbsp;{'{Р’УФ}'} -</span></h1>
                    <div className="lg:space-y-6 space-y-3 lg:pt-[45px]">

                    <p className="uppercase text-[#252526] lg:text-[18px] leading-[22.6px] text-[12px]">панорамний ресторан на 8 поверсі Євроготелю. Звідси Львів постає у своїй первозданній красі - старовинні дахи складаються в неповторну мозаїку, а небо стає частиною інтерʼєру.</p>
                    <p className="uppercase text-[#252526] lg:text-[18px] leading-[22.6px] text-[12px]"><span className='lg:font-bold'>Ресторан вміщує 115 гостей</span>, в меню — найкращі рецепти європейської та української кухні, від класики до авторських інтерпретацій. А щоранку, коли місто лише прокидається, ми зустрічаємо вас неперевершеними сніданками з панорамою Львова.</p>
                    <p className="lg:block hidden uppercase text-[#252526] lg:text-[18px] leading-[22.6px] text-[12px]"><span className='lg:font-bold'>Для наших маленьких гостей</span> — особливе дитяче меню, для ділових зустрічей — збалансовані бізнес-ланчі, а для гурманів — сезонні гастрономічні відкриття.</p>
                    <p className="lg:block hidden uppercase text-[#252526] lg:text-[18px] leading-[22.6px] text-[12px]"> 
                        <span className='lg:font-bold'>Авторські коктейлі в RUFF {`{Р’УФ}`}</span> натхненні неповторним характером міста, а вишукані страви смакують по-особливому — адже навколо такий краєвид!
                        </p>
                    </div>
                    </div>
                </div>

                
                <div className="lg:border-e border-x lg:border-x-0 border-t lg:border-t-0 border-[#B3B3B3]  lg:border-b // ">
                    <div className="flex items-center justify-center px-[4px] lg:px-0">
                        <div className='border-e border-[#B3B3B3] border-b w-full flex items-center justify-center lg:pt-[15px] lg:pb-[20px] pt-[10px] pb-[13px] '>
                            <img src={aboutImageFst} alt="" className='lg:w-[490px] lg:h-[319px] w-[155px] h-[103px]' />
                        </div>
                        <div className=' border-[#B3B3B3] border-b w-full flex items-center justify-center lg:pt-[15px] lg:pb-[20px] pt-[10px] pb-[13px] '>
                            <img src={aboutImageScd} alt="" className='lg:w-[490px] lg:h-[319px] w-[155px] h-[103px]' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center lg:pt-[12px] lg:pb-[34px] pt-[10px]' >
                        <img src={aboutImageTrd} alt="" className='lg:w-[1001px] lg:h-[292px] object-cover w-[316px] h-[206px]'/>
                    </div>
                </div>

                <div className="border-x border-b border-[#B3B3B3] flex flex-col items-center justify-center py-[27px] lg:mb-10 lg:text-start text-center space-y-3 lg:hidden ">
                <p className="uppercase text-[#252526] lg:text-[18px] leading-[22.6px] text-[12px]"><span className='lg:font-bold'>Для наших маленьких гостей</span> — особливе дитяче меню, для ділових зустрічей — збалансовані бізнес-ланчі, а для гурманів — сезонні гастрономічні відкриття.</p>
                    <p className="uppercase text-[#252526] lg:text-[18px] leading-[22.6px] text-[12px]"> 
                        <span className='lg:font-bold'>Авторські коктейлі в RUFF {`{Р’УФ}`}</span> натхненні неповторним характером міста, а вишукані страви смакують по-особливому — адже навколо такий краєвид!
                        </p>
                </div>
            </div>
        </div>
    )
}