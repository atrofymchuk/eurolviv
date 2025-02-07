import Section from "../../assets/About/Section.png";

export const StorySection = () => {
  return (
    <section className="flex justify-center px-6 ">
      <div className="grid md:grid-cols-3 items-center max-w-[1720px] w-full px-6 box-border border-collapse">
        <div className="md:col-span-2 border-l border-r border-[#C7C7C7] -me-[0.1%] h-[384px] p-4">
          <h1 className="text-[100px] font-normal leading-[81px] tracking-[-0.07em] text-left font-cofo uppercase text-[#242425]">
            Євроготель -
          </h1>
          <h1 className="text-[100px] font-normal leading-[81px] tracking-[-0.07em] text-right font-cofo uppercase text-[#242425]">
            Історія Гостинності
          </h1>

          <div className="grid text-[24px] text-gray-600 uppercase text-end">
            <span>
              Розташований в самому серці Львова, Євроготель поєднує традиції
            </span>
            <span className="pr-[49.6%]">з сучасною вишуканістю</span>
          </div>
        </div>

        <div className="md:col-span-1 border-r border-[#C7C7C7] h-full"></div>
        <div className="md:col-span-3 border-t border-l border-[#C7C7C7]"></div>

        <div className="md:col-span-2 w-full border-[#C7C7C7] border-b p-0">
          <img
            src={Section}
            alt="Reception"
            className="w-full h-[543px] object-cover object-[50%_25%] relative border-l border-[#C7C7C7] p-4"
          />
        </div>

        <div className="md:col-span-1 font-cofo border-l border-r border-[#C7C7C7] flex flex-col flex-grow h-full text-[24px] font-normal leading-[24px] tracking-[-0.01em] text-left">
          <p className="text-lg text-gray-800 font-cofo p-4 uppercase font-normal w-full">
            Історія цих стін починається ще в
            <span className="font-bold"> 1973</span> році, коли тут був
            відкритий готель, що став символом своєї епохи.Тут зупинялися зірки
            культового фільму «ДʼАртаньян і три мушкетери», відпочивала творча
            еліта, народжувалися нові традиції.
          </p>

          <p className="border-t p-6 border-[#C7C7C7] mt-38.5 text-[24px] font-medium leading-[24px] tracking-[-0.01em] uppercase font-cofo text-[#8C331B] border-b">
            Сучасний Євроготель розпочав свою історію після масштабної
            реконструкції 2007 року. Сьогодні він дарує своїм гостям неповторну
            атмосферу старого міста разом із бездоганним сервісом європейського
            рівня.
          </p>
        </div>
        <div className="col-span-3 border-x border-[#C7C7C7]  h-[119px]"></div>
      </div>
    </section>
  );
};
