import menu from "../../assets/Terrase/Aditionally/menu.png";
import bar from "../../assets/Terrase/Aditionally/bar.png";
import celebrating from "../../assets/Terrase/Aditionally/celebrating.png";

const cards = [
  {
    src: menu,
    title: "меню",
    text: "Страви з нашого меню — це нове, несподіване прочитання класики, яке точно потішить ваші смакові рецептори! У нас не просто їдять, у нас насолоджуються істинним смаком життя.",
  },
  {
    src: celebrating,
    title: "святкування",
    text: "На нашій терасі кожна подія набуває нового виміру стилю: чи то урочистий корпоратив, чи камерне святкування, атмосфера підкорює з першого погляду. Бездоганне середовище, щоб відзначити звершення або просто насолодитися теплотою спілкування.",
  },
  {
    src: bar,
    title: "бар",
    text: "Коктейлі, що дивують! Якісні інгредієнти, ідеальний баланс смаків і подача, яку ви запамʼятаєте — грайливий акцент кожного вечора.",
  },
];

export const Additionally = () => {
  return (
    <div className="flex flex-col items-center justify-center relative ">
        <div className="border-x border-[#B3B3B3AD]"> 

      <div className="grid grid-cols-[872px_873px]  relative">
        <div className="absolute left-1/2 -translate-x-1/2  translate-y-1/2  px-8 py-4 text-center z-10">
          <p className="font-blessed text-[36px] leading-[70%] text-[#252526]">
            Додатково
          </p>
          <h1 className="uppercase text-[233px] leading-[81%] text-[#252526] tracking-[-9%] w-[1557px]">
            тераса ruff
          </h1>
          <p className="uppercase w-[432px] text-[#000000] mx-auto mt-[41px] leading-[120%] text-[20px] ">
            На нашій терасі кожна подія набуває нового виміру стилю
          </p>
        </div>

        <div className="border-e border-[#B3B3B3AD] h-[520px]"></div>

        <div className="h-[499px]"></div>
      </div>
      <div className="grid grid-cols-3 items-start px-7">
        {cards.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-start h-[561px]">
              <img
                src={item.src}
                alt={item.title}
                className="max-w-[529px] max-h-[561px] min-w-[528px]"
                />
            </div>
            <h4 className="uppercase text-[32px] tracking-[-5%] leading-[104%] pt-[26px]">
              {item.title}
            </h4>
            <p className="uppercase w-[528px] text-[#888888]  pt-[27px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};
