import Section from "../../assets/About/Section.png";

export const StorySection = () => {
  return (
    <section className="flex justify-center px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 items-center md:max-w-[1720px] w-[334px] md:w-full box-border border-collapse">
      <div className="md:col-span-2 border-l border-r border-b md:border-b-0 w-[334px] md:w-full border-[#C7C7C7] -me-[0.1%] md:h-[384px] p-4">
        <h1 className="md:text-[100px] text-[32px] font-normal md:leading-[81px] leading-[25px] tracking-[-0.07em] md:text-left text-center font-cofo uppercase text-[#242425]">
          Євроготель -
        </h1>
        <h1 className="md:text-[100px] text-[32px] text-center font-normal md:leading-[81px] leading-[25px] tracking-[-0.07em] md:text-right font-cofo uppercase text-[#242425]">
          Історія Гостинності
        </h1>

        <div className="grid text-sm md:text-[24px] text-[#252526] uppercase text-center md:text-end mt-3.5 mb-5 font-semibold">
          <span>
            Розташований в самому серці Львова, Євроготель поєднує традиції
          </span>
          <span className="md:pr-[49.6%] md:text-end text-center">
            з сучасною вишуканістю
          </span>
        </div>
      </div>

      <div className="md:col-span-1 border-r border-[#C7C7C7] h-full"></div>
      <div className="md:col-span-3 md:border-t border-l border-[#C7C7C7]"></div>

      <div className="md:col-span-2 w-[334px] row-span-1 border-r border-l md:border-r-0 flex justify-center items md:w-full border-[#C7C7C7] border-b p-0">
        <img
          src={Section}
          alt="Reception"
          className="md:w-full md:h-[543px] w-[313px] h-[150px] object-cover object-[50%_34%] md:object-[50%_25%] relative p-3 md:p-4"
        />
      </div>

      <div className="md:col-span-1 row-span-1 font-cofo border-l w-[334px] md:w-full border-r border-[#C7C7C7] flex flex-col flex-grow h-full text-[24px] font-normal tracking-[-0.01em] text-left">
        <p className="md:text-lg text-gray-800 font-cofo p-4 uppercase font-normal w-full text-center md:text-start text-sm md:leading-[24px] leading-[14px]">
          Історія цих стін починається ще в
          <span className="font-bold text-[#8C331B]"> 1973</span> році, коли
          тут був відкритий готель, що став символом своєї епохи. Тут
          зупинялися зірки культового фільму «ДʼАртаньян і три мушкетери»,
          відпочивала творча еліта, народжувалися нові традиції.
        </p>

        <p className="border-t p-6.5 border-[#C7C7C7] md:mt-42.5 md:text-[24px] text-sm text-center md:text-start font-medium md:leading-[24px] leading-[14px] tracking-[-0.01em] uppercase font-cofo text-[#8C331B] border-b">
          Сучасний Євроготель розпочав свою історію після масштабної
          реконструкції 2007 року. Сьогодні він дарує своїм гостям неповторну
          атмосферу старого міста разом із бездоганним сервісом європейського
          рівня.
        </p>
      </div>
      <div className="col-span-1 md:col-span-3 border-x border-[#C7C7C7] w-[334px] xl:w-full h-[43px] md:h-[119px]"></div>
    </div>
  </section>
  );
};
