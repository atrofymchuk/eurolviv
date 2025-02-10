import ReviewSlider from "./ReviewSlider";

export const Rewies = () => {
  return (
    <section className="flex flex-col items-center bg-[#A47762] *:font-cofo ">
      <div className="grid md:grid-cols-2   md:w-[1720px] w-[334px] md:px-0 px-1 box-border border-collapse ">
        <div className="md:col-span-1 border-s border-[#C7C7C7] pt-[52px] md:pt-[109px] h-full   flex flex-col">
          <h1 className="font-cofo md:text-[198px] uppercase tracking-[-0.09em] text-[#EDE8E5] text-start leading-[160px] md:ps-[20px]">
            Відгуки
          </h1>
          <div className="flex gap-10 text-start ">
            <p className="uppercase w-[450px] md:text-[16px] md:leading-[16px] font-cofo  text-[#E9E9E9] md:ps-[39px] md:pt-[38px]">
              100 номерів, де кожна деталь творить особливу естетику. Від
              стандартних кімнат до люксів — незмінно висока якість сервісу.
            </p>
            <button className="uppercase text-[#A47762] font-semibold bg-[#EDE8E5] w-fit h-fit md:mt-[38px] md:px-[22.5px] md:py-[13px] rounded-full">
              забронювати номер
            </button>
          </div>
        </div>
        <div className="md:col-span-1 border-e  border-[#C7C7C7] pt-[52px] md:pt-[109px] h-full justify-center items-center flex flex-col">
          <h2 className="uppercase text-[100px] md:leading-[81px] md:tracking-[-0.09em] text-[#EDE8E5] flex flex-col">
            <span className="relative left-[-105px]">Наших</span>
            <span className="relative left-[105px]">гостей</span>
          </h2>
        </div>
      </div>
      <div className="w-full min-h-[300px] flex justify-center items-center">
  <ReviewSlider />
</div>


    </section>
  );
};
