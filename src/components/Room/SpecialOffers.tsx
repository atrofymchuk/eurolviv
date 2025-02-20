import military from "../../assets/SpecialOffers/military.jpg";
// import birthday from "../../assets/SpecialOffers/birthday.png";
import buissenes from "../../assets/SpecialOffers/buissenes.jpg";
// import newlyweds from "../../assets/SpecialOffers/newlyweds.png";
import photosession from "../../assets/SpecialOffers/photosession.jpg";
import bedwithpet from "../../assets/Rooms/AdditionaInfo/bedwithpet.png";
import { Link } from "react-router-dom";

const specials = [
  {
    src: military,
    title: "тариф для військових",
    desc: " Ми щиро вдячні нашим військовим за те, що маємо можливістьнадалі працювати",
    offer: "-20% на проживання для військових ",
    classes:'object-[1%_50%]'
  },
  {
    src: buissenes,
    title: "бізнес - тариф денний",
    desc: "Коротка зупинка для бізнесу чи натхнення? Обирайте наш денний бізнес-тариф з 50%",
    offer: "-50% бізнес-тариф денний",
    classes:'object-[50%_45%]'
  },
  {
    src: bedwithpet,
    title: "Подорож з домашнім улюбленцем",
    desc: "Наш пакет створений для того, щоб ваш улюбленець відчував себе як вдома",
    offer: "лапки вітаються",
    classes:'object-[60%_45%]'
  },
  {
    src: photosession,
    title: "фотосесія",
    desc: "Шукаєте стильну локацію для найкращих фото? Eurohotel запрошує вас скористатися унікальною можливістю ",
    offer: "фотосесія",
    classes:'object-[50%_0%]'
  },
];

export const SpecialOffers = () => {
  return (
    <div className="w-full flex flex-col lg:items-end lg:justify-end items-end justify-end mb-[71px] lg:mb-[75px]">
      <div className="grid lg:grid-cols-[1756px] grid-cols-[335px]  border-s border-[#C7C7C7] ">
        <div className=" border-b border-[#C7C7C7]">
          <div className="lg:h-[254px] flex items-center lg:pt-5 pt-[82px] ps-[20px] pb-[24px] lg:ps-0 lg:pb-[24px] ">
            <h1 className="uppercase font-cofo lg:text-[100px] text-[32px] lg:ms-[19px] lg:leading-[81px] w-[278px] lg:w-fit font-semibold lg:font-normal leading-[28px] flex flex-col tracking-[-0.04em]">
              спеціальні пропозиції
            </h1>
          </div>
        </div>
        <div className="flex overflow-hidden ">
          {specials.map((el, index) => (
            <div
              key={index}
              className="relative lg:w-[484px] lg:h-[668px] h-[426px] w-[269px] p-3.75 pb-0 border-e border-b border-[#C7C7C7] flex-shrink-0"
            >
              <img
                src={el.src}
                alt={el.title}
                className={`lg:w-[444px] lg:h-[428px] object-cover  w-[240px] h-[232px] ${el.classes}`}
              />
              <p className="left-[25px] top-[25px] absolute uppercase lg:w-fit w-[150px] border border-[0.5] font-cofo bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] lg:top-8.5 lg:py-[13px] py-[7px] px-[12px] lg:px-[10px] rounded-full lg:left-8.5 font-semibold lg:text-[16px] text-[10px] leading-[12px]">
                {el.offer}
              </p>

              <div className="flex flex-col">
                <div className="h-[200px] flex flex-col lg:justify-around">
                  <h4 className="uppercase font-cofo text-[#252526] lg:text-[24px] lg:leading-[26px] leading-[22px] font-semibold tracking-[-0.05em] text-[20px] lg:mt-[28px] mt-[20px]">
                    {el.title}
                  </h4>
                  <p className="uppercase font-cofo text-[#8F8F8F] lg:text-[16px] lg:w-fit w-[228px] lg:leading-[17px] lg:mt-[22px] text-[10px] mt-[13px]">
                    {el.desc}
                  </p>

                    <div className="lg:mt-auto mt-[33px]">
                    <Link to='/special-offers' className="mt-auto font-semibold border border-[#8C331B] text-[#8C331B] px-8 py-3 rounded-full uppercase text-sm xl:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white font-cofo">
                      детальніше
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
