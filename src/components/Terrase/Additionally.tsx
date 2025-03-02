import menu from "../../assets/Terrase/Aditionally/menu.png";
import bar from "../../assets/Terrase/Aditionally/bar.png";
import celebrating from "../../assets/Terrase/Aditionally/celebrating.png";

const cards = [
  {
    src: menu,
    title: "меню",
    text: {
      base: "Смакуйте вишукані страви.",
      md: "Насолоджуйтесь незабутніми смаками.",
      xl: "Страви з нашого меню — це нове, несподіване прочитання класики, яке точно потішить ваші смакові рецептори! У нас не просто їдять, у нас насолоджуються істинним смаком життя.",
    },
  },
  {
    src: celebrating,
    title: "святкування",
    text: {
      base: "Створюйте незабутні моменти.",
      md: "Атмосфера для будь-якої події.",
      xl: "На нашій терасі кожна подія набуває нового виміру стилю: чи то урочистий корпоратив, чи камерне святкування, атмосфера підкорює з першого погляду.",
    },
  },
  {
    src: bar,
    title: "бар",
    text: {
      base: "Авторські коктейлі та гарний настрій.",
      md: "Скуштуйте напої з характером.",
      xl: "Коктейлі, що дивують! Якісні інгредієнти, ідеальний баланс смаків і подача, яку ви запамʼятаєте — грайливий акцент кожного вечора.",
    },
  },
];

export const Additionally = () => {
  return (
    <>
      <hr className="w-full border-[#B3B3B3AD]" />
      <div className="flex flex-col items-center justify-center relative ">
        <div className="border-x border-[#B3B3B3AD] max-w-[90.31%] w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 relative w-px-4 sm:px-6 md:px-8 lg:px-10 xl:px-6 2xl:px-0 text-center">
            <div className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-14 md:top-1/2 md:-translate-y-1/2 px-4 sm:px-8 py-4 z-10">
              <p className="font-blessed text-[24px] sm:text-[28px] md:text-[36px] leading-[70%] text-[#252526]">
                Додатково
              </p>
              <h1 className="uppercase text-[64px] sm:text-[128px] md:text-[120px] xl:text-[203px] leading-[90%] xl:leading-[81%] text-[#252526] tracking-[-5%] md:tracking-[-9%] w-full md:w-[1000px] xl:w-[1557px]">
                тераса ruff
              </h1>
              <p className="uppercase w-full sm:w-[360px] md:w-[432px] text-[#000] mx-auto mt-[20px] md:mt-[41px] leading-[120%] text-[16px] sm:text-[18px] md:text-[20px]">
                На нашій терасі кожна подія набуває нового виміру стилю
              </p>
            </div>

            <div className="border-e border-[#B3B3B3AD] h-[320px] sm:h-[420px] md:h-[520px]"></div>
            <div className="h-[300px] sm:h-[399px] md:h-[499px] "></div>
          </div>

          {/* Контентні картки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-7">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${index === cards.length - 1 && 'sm:col-span-2 xl:col-span-1' }`}
              >
                {/* Зображення */}
                <div className="flex items-start h-auto ">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-[529px] h-[529px] xl:w-[528px] xl:h-[559px] lg:w-[420px] lg:h-[420px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] object-cover"
                  />
                </div>

                {/* Текстова частина */}
                <h4 className="uppercase text-[24px] sm:text-[28px] md:text-[32px] tracking-[-3%] sm:tracking-[-5%] leading-[104%] pt-[16px] sm:pt-[20px] md:pt-[26px]">
                  {item.title}
                </h4>
                <p className="uppercase w-full sm:w-[300px] md:w-[400px] xl:max-w-[528px] 2xl:min-w-[508px] text-[#888888] pt-[16px] sm:pt-[20px] md:pt-[27px] text-[14px] sm:text-[16px] md:text-[14px] px-6 xl:text-[18px]">
                  {item.text.xl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
