import navigateIco from "../../assets/icons/About/navigation.svg";
import hotel from "../../assets/About/hotel.png";
import MapComponent from "./Map";

const places = [
  ["Музей “Івана Георгія Пінзеля”", "800 m"],
  ["Музей-заповідник “Личаківський цвинтар”", "1.1 km"],
  ["Площа Галицька та Храм Св. Андрія", "1 km"],
  ["Військовий цвинтар “Марсове поле”", "1.3 km"],
  ["Це́рква Пресвято́ї Євхари́стії", "1.3 km"],
  ["Львівський історичний музей", "1.1 km"],
  ["Площа Ринок", "1.2 km"],
  ["Оперний театр", "1.7 km"],
];

const infrastructure = [
  ["Нова пошта відділення № 31", "150 m"],
  ["Супермаркет", "130 m"],
  ["Аптека", "170 m"],
  ["Стоматологічна клініка", "30 m"],
  ["Обмін валют", "120 m"],
  ["ЛНУ ветеринарної медицини та біотехнологій ім.С. Ґжицького", "290 m"],
  ["ЛНМУ ім. Д. Галицького", "750 m"],
  ["ТЦ “Роксолана”", "800 m"],
];

export const WhereWeAre = () => {
  return (
    <section className="flex flex-col   font-cofo   px-4 md:px-6 sm:px-6 ">
      <div className="grid xl:grid-cols-[1fr_1fr] max-w-[1720px]  mx-auto w-full container-fluid border xl:border-t-0 border-[#c7c7c7]">
        <div className="flex flex-col justify-center items-center xl:items-start  border-t-0 p-4 pe-0 xl:h-[692px]">
          <div className="2xl:ms-[52px] ">

          <p className="uppercase flex items-center justify-center xl:justify-start">
            <img src={navigateIco} alt="navigate" className="mr-2" />
            <span className="underline text-[#8C331B] font-semibold text-sm xl:text-lg ">
              вул. Тершаковців 6А, Львів, 79005, Україна
            </span>
          </p>
          <h1 className="uppercase text-3xl xl:text-6xl font-bold mt-4 text-center xl:text-left">Розташування</h1>
          <p className="text-[#8F8F8F] text-sm xl:text-[20px] xl:max-w-[400px] text-center xl:text-left xl:mt-[52px]">
            <span className="text-[#8C331B] font-semibold">Серце міста</span> - історичний центр Львова знаходиться на відстані всього лиш кроку від нашого готелю.
          </p>
          <p className="font-semibold text-sm xl:text-lg text-center xl:text-left mt-6 ">
            Оцінка наших гостей за відмінне розташування - 9,2.
          </p>
          <div className="flex justify-center xl:justify-start">
            <a 
              target="_blank" 
              href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
              className="bg-black text-white px-5 py-3 mt-6 text-sm xl:text-lg rounded-full border border-black transition-all hover:bg-white hover:text-black uppercase xl:mt-[50px]" 
              >
              Прокласти маршрут
            </a>
          </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full max-h-[34rem] xl:min-h-[521px] mx-auto my-auto max-w-[862px]  p-5 ps-0">
          <MapComponent />
          <div>

          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 w-full border border-[#c7c7c7]  md:border-t-0  container-fluid max-w-[1720px] mx-auto">
        <div className="p-8 xl:p-12  border-r border-[#c7c7c7]">
          

          <h2 className="text-[#8C331B] text-xl xl:text-3xl font-semibold text-center xl:text-left">Інфраструктура</h2>
          <h1 className="uppercase text-3xl xl:text-6xl font-bold mt-4 text-center xl:text-left">Навколо готелю</h1>
          <p className="text-[#252526] text-sm xl:text-lg mt-6 text-center xl:text-left ">
            Зручне розташування поруч із головними пам’ятками, культурними осередками, ресторанами та магазинами.
          </p>
          <div className="flex justify-center xl:justify-start mt-6">
            <img src={hotel} alt="hotel" className="hidden xl:block w-[760px] h-[582px]" />
          </div>
        </div>

        <div className="p-8 xl:p-12 border-t xl:border-t-0 border-[#c7c7c7]">
          <h2 className="text-[#8C331B] text-xl xl:text-3xl font-semibold text-center xl:text-left">Що поблизу?</h2>
          <ul className="grid gap-3 mt-6 text-left">
            {infrastructure.map(([place, distance], index) => (
              <li key={index} className="flex justify-between text-sm xl:text-lg">
                <span>{place}</span>
                <span className="text-[#8C331B] font-semibold">{distance}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-6 xl:hidden">
            <img src={hotel} alt="hotel" className="w-[300px] h-[230px]" />
          </div>
          <h2 className="text-[#8C331B] text-xl xl:text-3xl font-semibold text-center xl:text-left mt-10">
            Головні визначні місця
          </h2>
          <ul className="grid gap-3 mt-6 text-left">
            {places.map(([place, distance], index) => (
              <li key={index} className="flex justify-between text-sm xl:text-lg">
                <span>{place}</span>
                <span className="text-[#8C331B] font-semibold">{distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
