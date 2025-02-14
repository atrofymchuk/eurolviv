import standartSingle from "../../assets/Rooms/standart_single.jpg";
import square from "../../assets/icons/Rooms/square.svg";
import guests from "../../assets/icons/Rooms/guests.svg";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    image: standartSingle,
    desc: "Оптимальний вибір для ділової подорожі",
    title: "стандарт одномісний",
    area: "15М²",
    guests: "1",
  },
  {
    id: 2,
    image: standartSingle,
    desc: "Комфорт та зручність для вашого відпочинку ",
    title: "стандарт з великим ліжком",
    area: "18М²",
    guests: "2",
  },
  {
    id: 3,
    image: standartSingle,
    desc: "Тиша і зручність в центрі ділового міста",
    title: "стандарт з двома ліжками",
    area: "18М²",
    guests: "2",
  },
  {
    id: 4,
    image: standartSingle,
    desc: "Ритм міста поруч, затишок усередині",
    title: "стандарт з великим ліжком та балконом",
    area: "18М²",
    guests: "2",
  },
  {
    id: 5,
    image: standartSingle,
    desc: "Відчуйте гармонію між стилем та комфортом",
    title: "стандарт з двома ліжками та балконом",
    area: "15М²",
    guests: "2",
  },
  {
    id: 6,
    image: standartSingle,
    desc: "Номер, де кожна деталь має значення ",
    title: "напівлюкс",
    area: "15М²",
    guests: "2",
  },
  {
    id: 7,
    image: standartSingle,
    desc: "затишок, який зустрічає вас в центрі Львова",
    title: "люкс двокімнатний",
    area: "38М²",
    guests: "2+2",
  },
  {
    id: 8,
    image: standartSingle,
    desc: "Для гостей, які цінують винятковість",
    title: "люкс покращений imperial",
    area: "60М²",
    guests: "2",
  },
  {
    id: 9,
    image: standartSingle,
    desc: "Комфорт та сервіс європейського рівня",
    title: "люкс покращений elegant",
    area: "60М²",
    guests: "2",
  },
];

export const RoomsInfo = () => {
  return (
    <div className="w-full flex-col flex items-center">
      <div className="grid lg:grid-cols-[1720px]  grid-cols-[334px] ">
        <div className="border-x border-[#C7C7C7]  ">
          <div className="lg:space-y-[11px]">
            <div className="lg:block hidden mt-[114px] ">
              <h1 className="uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em]">
                <span className="text-[#8C331B]">100 номерів</span>, кожен з
                яких{" "}
              </h1>
              <div className="flex flex-col items-end ">
                <div className="w-fit lg:space-y-[11px] ">
                  <h1 className=" uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em]">
                    продуманий до найменших
                  </h1>
                  <h1 className="mb-[24px] uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em]">
                    деталей{" "}
                  </h1>
                  <div className="flex  lg:mt-[43px] items-center ">
                    <p className="text-[16px] leading-[20px] text-[#252526]  uppercase pt-10 ">  
                      Забронюйте номер безпосередньо на сайті <br /> та
                      гарантовано отримайте найкращу ціну <br />
                      прямо зараз.
                    </p>
                    <button className=" font-cofo font-extrabold uppercase  ms-[30px] z-20 bg-[#8C331B] text-white hover:cursor-pointer px-[38px]  h-fit py-[13px] rounded-full text-[14px]">
                      забронювати
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:hidden inline  ">
              <h1 className="text-[32px] leading-[32px] tracking-[-0.07em] uppercase mt-[53px]  text-center">
                <span className="text-[#8C331B]">100 номерів,</span>
                <span>
                  кожен <br /> з яких продуманий до найменших дрібниць
                </span>
              </h1>
              <div className="flex flex-col text-center lg:mt-[43px] mt-[24px]  items-center">
                <p className="text-[12px] leading-[15px] text-[#252526] uppercase ">
                  Забронюйте номер безпосередньо на сайті <br /> та гарантовано
                  отримайте найкращу ціну <br />
                  прямо зараз.
                </p>
                <button className=" font-cofo font-extrabold  uppercase mt-[24px] mb-[20px] z-20 bg-[#8C331B] text-white hover:cursor-pointer px-[23px]  h-fit py-[12px] rounded-full text-[12px] ">
                  забронювати
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 pt-[43px]">
            {rooms.map((room, index) => {
              const isFirstInRow = index % 3 === 0;
              const isLastInRow = (index + 1) % 3 === 0;
              return (
                <div
                  key={room.id}
                  className={`lg:border lg:border-s-0  border-[#C7C7C7]  
      ${isFirstInRow ? "lg:ps-[20px] p-4" : "p-4"}  
      ${isLastInRow ? "lg:pe-[20px] lg:border-e-0 border-t" : "border-t"} 
      ${index < rooms.length - 3 ? "lg:border-b-0 border-t" : ""} 
      lg:p-[15px]`}
                >
                  <div>
                    <div className="items-center flex justify-center">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="lg:w-[530px] lg:h-[416px] w-[301px] h-[230px] object-cover"
                      />
                    </div>

                    <div className="lg:h-[297px] h-[191px]">
                      <div className="flex justify-between mx-auto lg:pt-[19px] pt-[10.5px] lg:w-[530px] w-[301px] items ">
                        <div className="flex items-center">
                          <img src={square} alt="square" />
                          <p className="font-cofo uppercase lg:leading-[20px] text-[12px] ps-[11.12px] lg:text-[16px] text-[#252526] lg:ps-[11.62px]">
                            площа: {room.area}
                          </p>
                        </div>
                        <div className="flex items-center ">
                          <img src={guests} alt="square" />
                          <p className="font-cofo uppercase lg:ps-[11.62px] text-[12px] ps-[11.12px] lg:leading-[20px] lg:text-[16px] text-[#252526]">
                            гостей: {room.guests}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center items-center h-full">
                        <div className="flex flex-col text-center items-center justify-between h-full lg:max-h-[200px] max-h-[125px] w-full lg:max-w-[472px] ">
                          <div className="flex-1 flex flex-col justify-start w-full">
                            <h1 className="font-cofo uppercase lg:text-[40px] lg:max-w-full  lg:leading-[36px] lg:tracking-[-0.06em]  tracking-[-0.03em] text-[24px] leading-[22px] font-semibold">
                              {room.title}
                            </h1>
                            <p className="uppercase lg:text-[18px] lg:leading-[21px] mt-[15px] tracking-[-0.04em] text-[12px] leading-[14px] text-[#6B6B6B]">
                              {room.desc}
                            </p>
                          </div>

                          <Link
                            to=""
                            className="uppercase lg:py-[10px] lg:px-[20px] mt lg:text-[18px] py-[8px] px-[9px]  text-[12px] border rounded-full text-[#A47762] font-cofo font-semibold"
                          >
                            переглянути номер
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
