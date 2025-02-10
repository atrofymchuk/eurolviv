import navigateIco from "../../assets/icons/About/navigation.svg";
import map from "../../assets/About/place.png";
import hotel from "../../assets/About/hotel.png";

export const WhereWeAre = () => {
  return (
    <section className="flex flex-col items-center bg-white *:font-cofo">
      <div className="grid md:grid-cols-2 items-center  md:w-[1720px] w-[334px] md:px-0 px-1 box-border border-collapse">
        <div className="md:col-span-1 border border-t-0 md:border-b-0 md:border-r-0 border-[#C7C7C7]  h-full justify-center items-center flex">
          <div className="flex-col  text-center md:text-start pt-[61px] md:pt-0">
            <p className="uppercase flex ">
              <img src={navigateIco} alt="navigateico" className="pe-1 " />
              <span className="underline uppercase text-[#8C331B] font-semibold  text-[11px]  md:text-[18px] leading-[15px] md:leading-[22px] font-cofo decoration-[6.5%] underline-offset-[18%]">
                вул. Тершаковців 6А, Львів, 79005, Україна
              </span>
            </p>
            <h1 className="uppercase md:text-[100px] text-[32px] tracking-[-0.05em]  leading-[30px] md:leading-[81px] pt-2.25  md:pt-[26px]">
              розташування
            </h1>

            <div className="flex justify-center md:justify-start">
              <p className="uppercase text-[#8F8F8F] font-cofo w-[270px] md:w-[512px] leading-[14.4px] md:leading-[22px] text-[12px] md:text-[18px] pt-10 md:pt-14 text-center md:text-start">
                <span className="text-[#8C331B] font-semibold">
                  Серце міста
                </span>{" "}
                - історичний центр Львова знаходиться на відстані всього лиш
                кроку від нашого готелю.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="uppercase font-semibold leading-[15px] md:leading-[24px]  md:text-start text-center  text-[12px]  md:text-[18px] pt-10 w-[226px] md:w-[445px]">
                оцінка наших гостей за відмінне розташування - 9,2.
              </p>
            </div>

            <a
              target="_blank"
              href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
              className="inline-flex w-fit uppercase bg-[#252526] text-white px-[18px] py-[12.5px] md:px-[22px] md:py-[13px] md:text-[16px] text-[12px] rounded-full font-cofo font-semibold mb-7.5 mt-5 md:mb-0 md:mt-[50px] hover:cursor-pointer hover:bg-white hover:text-[#252526] border border-[#252526] box-border"
            >
              Прокласти маршрут
            </a>
          </div>
        </div>
        <div className="flex md:block border-s md:border-s-0 border-r h-full justify-center items-center border-[#C7C7C7] m-0 md:pt-7.5 md:pe-6.75">
          <img
            src={map}
            alt="map"
            className="md:w-[862px] md:h-[541px] md:mb-[101px] w-[303px] h-[290px] py-4.25 mx-auto"
          />
        </div>

        <div className="md:grid-cols-1 border-e h-full justify-start border-[#C7C7C7] pt-11  border ">
          <p className="uppercase text-[#8C331B] font-semibold text-[12px] md:text-[24px] tracking-[-0.05em] leading-[22px] font-cofo md:text-start text-center ps-0 md:ps-[57px]">
            інфраструктура
          </p>
          <h1 className="uppercase leading-[30px] md:leading-[81px] text-[32px] md:text-[100px] font-cofo tracking-[-0.07em] px-0 md:pt-[25px] md:ps-[50px] md:text-start text-center">
            навколо
          </h1>
          <h1 className="uppercase leading-[30px] md:leading-[81px] text-[32px] md:text-[100px] font-cofo tracking-[-0.07em] px-0 md:ps-[50px] md:text-start text-center">
            готелю
          </h1>

          <p className="uppercase text-[12px] md:text-[18px] w-[320px] md:w-[534px] text-center md:text-start tracking-[-0.01em] text-[#252526] font-cofo leading-[14.4px] md:leading-[21px] p-0 pt-4.5 md:pt-[65px] md:ps-[59px]">
            Зручне розташування поруч із головними пам’ятками, культурними
            осередками, ресторанами та магазинами
          </p>
          <div className="flex justify-center pb-10">
            <img
              src={hotel}
              alt="hotel"
              className="md:w-[760px] md:h-[582px] pt-[49px] self-center hidden md:block"
            />
          </div>
        </div>

        <div className="md:grid-cols-1 border-s md:border-s-0 border-t-0 md:border-t border-y border-e h-full justify-start border-[#C7C7C7] text-center md:text-start pt-[31px] md:pt-[44px]">
          <h1 className="uppercase text-[24px] md:text-[40px] text-[#8C331B] font-cofo tracking-[-0.05em] p-0 md:ps-9.75 leading-[40px]">
            що поблизу?
          </h1>
          <ul className="grid gap-3 pt-[26px] md:pt-14.75 px-4 text-start md:px-10">
            {[
              ["Нова пошта відділення № 31", "150 m"],
              ["Супермаркет", "130 m"],
              ["Аптека", "170 m"],
              ["Стоматологічна клініка", "30 m"],
              ["Обмін валют", "120 m"],
              [
                "ЛНУ ветеринарної медицини та біотехнологій ім.С. Ґжицького",
                "290 m",
              ],
              ["ЛНМУ ім. Д. Галицького", "750 m"],
              ["ТЦ “Роксолана”", "800 m"],
            ].map(([place, distance], index) => (
              <li
                key={index}
                className="grid grid-cols-[1fr_auto] gap-4 uppercase text-[#252526]"
              >
                <span className="font-cofo  leading-[15px] md:leading-[25px] md:text-[20px] text-[12px]">
                  {place}
                </span>
                <span className="text-right leading-[15px] md:leading-[25px] md:text-[20px] text-[12px] font-semibold text-[#8C331B]">
                  {distance}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center ">
            <img
              src={hotel}
              alt="hotel"
              className=" w-[300px] h-[230px] pt-[26px] self-center block md:hidden"
            />
          </div>
          <h1 className="uppercase text-[24px] md:text-[40px] text-[#8C331B] text-center  md:text-start font-cofo tracking-[-0.05em] p-0 md:ps-9.75 pt-[42px] md:pt-15 leading-[24px] md:leading-[40px]">
            головні <br className="hidden md:block" /> визначні{" "}
            <br className="block md:hidden" /> місця
          </h1>
          <ul className="grid gap-3 pt-[26px] md:pt-14.75  px-4 text-start md:px-10 md:mb-0 mb-[30px]">
            {[
              ["Музей “Івана Георгія Пінзеля”", "800 m"],
              ["Музей-заповідник “Личаківський цвинтар”", "1.1 km"],
              ["Площа Галицька та Храм Св. Андрія", "1 km"],
              ["Військовий цвинтар “Марсове поле”", "1.3 km"],
              ["Це́рква Пресвято́ї Євхари́стії", "1.3 km"],
              ["Львівський історичний музей", "1.1 km"],
              ["Площа Ринок", "1.2 km"],
              ["Оперний театр", "1.7 km"],
            ].map(([place, distance], index) => (
              <li
                key={index}
                className="grid grid-cols-[1fr_auto] gap-4 uppercase text-[#252526] ]"
              >
                <span className="font-cofo  leading-[15px] md:leading-[25px] md:text-[20px] text-[12px]">
                  {place}
                </span>
                <span className="text-right leading-[15px] md:leading-[25px] md:text-[20px] text-[12px] font-semibold text-[#8C331B]">
                  {distance}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
