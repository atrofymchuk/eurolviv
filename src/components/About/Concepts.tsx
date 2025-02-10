import roomLux from "../../assets/About/2roomLux.png";
import terasse from "../../assets/About/terrase.png";
import bussines from "../../assets/About/bussines.png";
import bar from "../../assets/About/bar.png";

export const Concepts = () => {
  return (
    <section className="flex justify-center  bg-white  ">
      <div className="grid md:grid-cols-4 md:w-[1720px] w-[326px] box-border">
        <div className="md:col-span-4 pt-[112px] md:pt-[159px] text-center  border-x border-[#C7C7C7] xl:pb-13.5 pb-6">
          <h1 className="xl:text-[100px] text-[32px] xl:leading-[94px] uppercase leading-[20px] font-cofo">
            досконалість
          </h1>
          <h1 className="xl:text-[100px] text-[32px]  xl:leading-[94px] uppercase leading-[35px] font-cofo">
            у кожній деталі
          </h1>
          <p className="xl:mt-6 mt-2.25 uppercase text-[#8C331B] font-semibold font-cofo">
            наші концепції
          </p>
        </div>

        {[
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
        ].map(({ title, img, alt, text }, index) => (
          <div className="even:border-e-0 " key={index}>
            <div className="md:col-span-1 text-center flex flex-col items-center px-4 py-6 border border-l  border-[#C7C7C7] xl:h-[579px] h-[460px]">
              <h1 className="uppercase md:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {title[0]}
              </h1>
              <h1 className="uppercase md:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {title[1]}
              </h1>
              <img
                src={img}
                alt={alt}
                className="w-[200px] h-[191px] object-cover my-4"
              />

              <p className="text-sm md:text-base flex-grow font-cofo font-normal  px-1 xl:px-5 xl:text-[18px]">
                {text}
              </p>

              <div className="mt-auto">
                <button className="font-semibold border border-[#8C331B] text-[#8C331B] px-8 py-3 rounded-full uppercase text-sm md:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white font-cofo">
                  детальніше
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="md:col-span-4 h-[165px] md:w-[1720px] w-[326px] md:border-x border-x border-[#C7C7C7]"></div>
      </div>
    </section>
  );
};
