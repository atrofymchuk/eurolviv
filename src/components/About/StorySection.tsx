import Section from "../../assets/About/Section.png";

export const StorySection = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full px-4 lg:px-0">
      <div className="grid grid-cols-[334px] lg:grid-cols-[1280px_440px] items-center justify-center w-full max-w-[1280px] box-border border-collapse ">
        
        <div className="border-l border-b border-e lg:border-e-0 border-[#C7C7C7] pt-[76px] lg:pt-[137px] lg:h-[384px] p-4  text-center lg:text-left">
          <h1 className="text-[28px] lg:text-[100px] font-normal leading-[30px] lg:leading-[81px]  tracking-[-0.07em] uppercase text-[#242425]">
            Євроготель-
          </h1>
          <h1 className="text-[28px] lg:text-[100px] font-normal leading-[30px] lg:leading-[81px] tracking-[-0.017em] uppercase text-[#242425] lg:text-end">
            Історія <br className="lg:hidden block"/> гостинності
          </h1>

          <div className="flex flex-col items-center lg:items-start text-sm sm:text-[18px] lg:text-[20px] text-[#252526] uppercase mt-3.5 mb-5 font-semibold">
            <div className="w-fit">
              <span>Розташований в самому серці Львова, Євроготель поєднує традиції</span>
            </div>
            <div className="w-fit">
              <span>з сучасною вишуканістю</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-e border-s border-b border-[#C7C7C7] h-full"></div>

        <div className="border-r border-l lg:border-r-0 flex justify-center items-center w-full lg:w-auto border-[#C7C7C7] border-b p-0">
          <img
            src={Section}
            alt="Reception"
            className="h-[180px] sm:h-[250px] lg:h-[543px] w-full lg:w-auto object-cover object-center relative p-3 lg:p-4"
          />
        </div>

        {/* Описовий текст */}
        <div className="border-l border-r border-[#C7C7C7] flex flex-col h-full text-[18px] lg:text-[24px] font-normal tracking-[-0.01em] text-left">
          <p className="text-sm sm:text-[16px] lg:text-[20px] text-gray-800 p-4 uppercase font-normal leading-[20px] lg:leading-[24px]">
            Історія цих стін починається ще в
            <span className="font-bold text-[#8C331B]"> 1973</span> році, коли тут був відкритий готель, що став символом своєї епохи. Тут зупинялися зірки культового фільму «ДʼАртаньян і три мушкетери», відпочивала творча еліта, народжувалися нові традиції.
          </p>

          <p className="border-t p-4 sm:p-6 border-[#C7C7C7] text-sm sm:text-[16px] lg:text-[20px] mt-auto font-medium leading-[20px] lg:leading-[24px] tracking-[-0.01em] uppercase text-[#8C331B] border-b">
            Сучасний Євроготель розпочав свою історію після масштабної реконструкції 2007 року. Сьогодні він дарує своїм гостям неповторну атмосферу старого міста разом із бездоганним сервісом європейського рівня.
          </p>
        </div>

        {/* Нижній відступ */}
        <div className="col-span-1 lg:col-span-2 border-x border-[#C7C7C7] w-full h-[43px] lg:h-[119px]"></div>
      </div>
    </section>
  );
};
