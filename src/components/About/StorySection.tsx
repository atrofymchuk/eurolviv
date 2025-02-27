import Section from "../../assets/About/Section.png";

export const StorySection = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full px-4 sm:px-6 md:px-6 lg:px-6 2xl:px-6">
      <div className="fluid-container mx-auto border-x border-[#C7C7C7] grid grid-cols-1 md:grid-cols-[1fr_1fr] 2xl:grid-cols-[1280px_440px]   items-center justify-center w-full max-w-[1720px]">
        
        <div className="border-b border-e md:border-e-0 border-[#C7C7C7] pt-[50px] sm:pt-[60px] md:pt-[100px] lg:pt-[70px] lg:h-[384px] p-4 lg:pb-0 text-center md:text-left">
          <h1 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[60px] 2xl:text-[80px] font-normal leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[72px] 2xl:leading-[81px] tracking-[-0.07em] uppercase text-[#242425]">
            Євроготель-
          </h1>
          <h1 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[60px] 2xl:text-[80px] font-normal leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[72px] 2xl:leading-[81px] tracking-[-0.017em] uppercase text-[#242425] md:text-end">
            Історія <br className="md:hidden block"/> гостинності
          </h1>

          <div className="flex flex-col items-center md:items-start text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl text-[#252526] uppercase mt-3.5 mb-5 font-semibold">
            <div className="w-fit">
              <span>Розташований в самому серці Львова, Євроготель поєднує традиції</span>
            </div>
            <div className="w-fit">
              <span>з сучасною вишуканістю</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-s border-b border-[#C7C7C7] h-full"></div>

        <div className="border-r  md:border-r-0 flex justify-center items-center w-full md:w-auto border-[#C7C7C7] border-b p-0">
          <img
            src={Section}
            alt="Reception"
            className="h-[120px] sm:h-[160px] md:h-[220px] lg:h-[400px] 2xl:h-[500px] w-full md:w-auto object-cover object-center relative p-2 sm:p-3 md:p-4 lg:p-5 2xl:p-6"
          />
        </div>

        <div className="border-l  border-[#C7C7C7] flex flex-col h-full text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-normal tracking-[-0.01em] text-left">
          <p className="text-xs sm:text-sm md:text-[12px] lg:text-lg 2xl:text-2xl text-gray-800 p-4 md:p-1.5 md:px-3 uppercase font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[28px]">
            Історія цих стін починається ще в
            <span className="font-bold text-[#8C331B]"> 1973</span> році, коли тут був відкритий готель, що став символом своєї епохи. Тут зупинялися зірки культового фільму «ДʼАртаньян і три мушкетери», відпочивала творча еліта, народжувалися нові традиції.
          </p>

          <p className="border-t p-4 sm:p-6 md:p-1.5 md:px-3 lg:p-3 border-[#C7C7C7] text-xs sm:text-sm md:text-[12px] lg:text-lg 2xl:text-2xl mt-auto font-medium leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[28px] tracking-[-0.01em] uppercase text-[#8C331B] border-b">
            Сучасний Євроготель розпочав свою історію після масштабної реконструкції 2007 року. Сьогодні він дарує своїм гостям неповторну атмосферу старого міста разом із бездоганним сервісом європейського рівня.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 border-x border-[#C7C7C7] w-full h-[30px] sm:h-[40px] md:h-[60px] lg:h-[80px] 2xl:h-[100px]"></div>
      </div>
    </section>
  );
};
