import ImageSlider from "./Slider";


export const Mission = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white *:font-cofo">
      <div className="grid xl:grid-cols-3 items-center xl:w-[1720px] w-[340px] xl:px-0 px-1 box-border border-collapse">
        <div className="xl:col-span-3 border-x border-[#C7C7C7] pt-[52px] xl:pt-[109px] h-full justify-center items-center flex">
          <div className="flex-col text-center">
            <h1 className="uppercase text-[#8C331B] font-semibold text-sm xl:text-2xl leading-[30px] px-2" >
              міссія
            </h1>
            <h1 className="uppercase text-[32px] xl:text-[100px]/[81px] tracking-[-0.03em] leading-[30px] px-2" >
              елегантність,
            </h1>
            <h1 className="uppercase text-[32px] xl:text-[100px]/[81px] tracking-[-0.03em] leading-[30px] px-2" >
              переосмислена по-новому
            </h1>
            <p className="uppercase max-w-[801px] mx-auto xl:text-[18px] pt-7 xl:px-0 px-[10px] text-[12px]">
              У Євроготелі ми створили простір, де діловий ритм сучасності
              переплітається з неквапливою грацією старого Львова
            </p>
            <p className="uppercase max-w-[801px] mx-auto xl:text-[18px] xl:px-0  text-[12px] pt-7 px-4">
              Ми віримо в гостинність, яка промовляє просто до серця та в
              бездоганний сервіс, що передбачає ваші потреби
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full xl:h-[600px]  h-fit items-center flex justify-center">
        <div className="absolute border-[#C7C7C7] border-x h-full lg:w-[1720px] w-[332px]"></div>
        <ImageSlider />
      </div>

      <div className="grid xl:grid-cols-3 items-center xl:w-[1720px] w-[332px] box-border border-collapse">
        <div className="xl:col-span-3 border-x border-[#C7C7C7] h-full justify-center items-center flex">
          <div className="flex-col text-center">
            <p
              className="text-[#8C331B] uppercase xl:max-w-[530px] max-w-[230px] text-[12px] xl:text-[20px] font-semibold leading-[15px] xl:leading-[25.2px] text-center 
              overflow-hidden text-ellipsis 
              "
            >
              Ми створені, щоб закохати вас у Львів, і наша найбільша винагорода
              — зустрічати гостей, що повертаються до нас знову і знову
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
