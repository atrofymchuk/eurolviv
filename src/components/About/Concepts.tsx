import roomLux from "../../assets/About/2roomLux.png";
import terasse from "../../assets/About/terrase.png";
import bussines from "../../assets/About/bussines.png";
import bar from "../../assets/About/bar.png";


const concepts = [
  
    {
      title: ["комфорт", "без компромісів"],
      img: roomLux,
      alt: "bedroom",
      text: "Стиль, комфорт і увага до деталей — у кожному номері. Тут час ніби сповільнюється, даруючи момент спокою серед міської метушні і наповнюючи кожну мить гармонією",
    },
    {
      title: ["краєвиди,", "що надихають"],
      img: terasse,
      alt: "terrace",
      text: "У панорамному ресторані RUFF та з тераси місто відкривається по-новому. Тут, під львівським небом, локальні смаки набувають сучасного звучання, а панорама міста стає найкращим акомпанементом до вашого відпочинку",
    },
    {
      title: ["настав час для", "бізнес-справ?"],
      img: bussines,
      alt: "conference",
      text: "Натхненні ідеї народжуються саме тут. Наші конференц-зали поєднують продуманий простір та бездоганний сервіс, щоб ви могли сфокусуватися на справах. Ділові зустрічі, зігріті львівською гостинністю",
    },
    {
      title: ["вечірня", "енергетика"],
      img: bar,
      alt: "karaoke",
      text: "Стильний караоке-лаунж – місце, де кожен вечір вирує життям, пульсує енергією вечірнього міста, запрошуючи розділити радість моменту. Тут музика об’єднує, а спогади стають особливими",
    },
  ]  

export const Concepts = () => {
  return (
    <section className="w-full flex justify-center flex-col items-center bg-white  ">
      <div className="grid xl:grid-cols-4 w-full lg:grid-cols-2 box-border   border-[#C7C7C7]  px-4 md:px-6 sm:px-6 xl:px-6 2xl:px-0 fluid-container mx-auto max-w-[1720px]  ">
        <div className="xl:col-span-4 md:col-span-2 pt-[112px] xl:pt-[159px] text-center border-x border-[#C7C7C7] xl:pb-[54px] pb-6 ">
          <h1 className="text-[32px] xl:text-[100px] leading-[20px] xl:leading-[94px] uppercase font-cofo">
            досконалість
          </h1>
          <h1 className="text-[32px] xl:text-[100px] leading-[35px] xl:leading-[94px] uppercase font-cofo">
            у кожній деталі
          </h1>
          <p className="mt-2 xl:mt-6 uppercase text-[#8C331B] font-semibold font-cofo">
            наші концепції
          </p>
        </div>

        {concepts.map(({ title, img, alt, text }, index) => (
          <div
            key={index}
            className={`border border-[#C7C7C7] 
              ${index === concepts.length - 2 ? "md:border-e-0 xl:border-e md:border-b" : ""}
              ${
              index === 0 ? "xl:border-l md:border-e-0 md:border-b-0 xl:border-r xl:border-b" : "xl:border-l-0 xl:border-t border-t-0 md:border-t md:border-b-0 xl:border-b "
            }`}
          >
            <div className="text-center flex flex-col items-center px-6 py-8 xl:h-[579px] h-[469px]">
              <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {title[0]}
              </h1>
              <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {title[1]}
              </h1>
              <img
                src={img}
                alt={alt}
                className="w-[200px] h-[191px] object-cover xl:my-6 my-4"
              />
              <p className="text-sm xl:text-base flex-grow font-cofo font-normal px-2  xl:text-[16px]  2xl:text-[18px]">
                {text}
              </p>
              <div className="mt-auto">
                <button className="font-semibold border border-[#8C331B] text-[#8C331B] px-8 py-3 rounded-full uppercase text-sm xl:text-base transition-all duration-300 hover:bg-[#8C331B] hover:text-white font-cofo">
                  детальніше
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Нижня рамка */}
        <div className="xl:col-span-4 md:col-span-2 xl:h-[165px] xl:w-full  xl:border-x border-x xl:border-b xl:border-t-0 border-t md:h-0  border-[#C7C7C7] "></div>
      </div>
    </section>
  );
};
