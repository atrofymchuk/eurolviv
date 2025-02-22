import { Icon } from "../../store/types";

type EquipmentToProps = {
  icons: Icon[];
  price:{hour:number, day:number}
};

export const Equipment = ({ icons, price }: EquipmentToProps) => {
  return (
    <div className="flex w-full bg-[#F2EFEC] justify-center">
      <div className="grid lg:grid-cols-[395px_816px_706px] w-full border-x lg:border-x-none border-[#D9D9D9] lg:max-w-none max-w-[295px]">
        <div className="lg:border-e border-[#D9D9D9] flex lg:items-center lg:justify-center lg:p-5 p-5 pb-[15px] ">
          <h1 className="uppercase lg:text-[40px] text-[24px] leading-[100%] tracking-tight text-[#8C331B]">
            Обладнання <br /> у вартості:
          </h1>
        </div>

        <div className="lg:border-e  border-[#D9D9D9] grid lg:grid-cols-2 grid-cols-1 gap-x-[40px] lg:gap-y-[10px] px-4 py-5 justify-center">
          {icons.map((icon, index) => (
            <div key={index} className="flex items-center lg:gap-2 gap-[6px] ">
              <img src={icon.src} alt={icon.text} className="lg:w-6 lg:h-6 w-[22px] h-[22px]" />
              <span className="uppercase text-[#383838] text-[18px] font-medium">
                {icon.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center p-5 ">
          <h2 className="uppercase text-[#8C331B] lg:text-[32px] text-[24px] tracking-[-5%] font-semibold">
            Вартість:
          </h2>
          <p className="text-[#8C331B] lg:text-[32px] text-[14px] leading-none mt-2">
          {price.day} UAH <span className="text-[#383838] font-normal uppercase">/день</span>
          </p>
          <p className="text-[#8C331B] lg:text-[32px] text-[14px] ">
          {price.hour} UAH <span className="text-[#383838] font-normal uppercase">/година</span>
          </p>
        </div>
      </div>
    </div>
  );
};
