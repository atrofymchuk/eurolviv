import { Icon } from "../../store/types";

type EquipmentToProps = {
  icons: Icon[];
  price: { hour: number; day: number };
};

export const Equipment = ({ icons, price }: EquipmentToProps) => {
  return (
    <div className="flex w-full bg-[#F2EFEC] justify-center px-[7.5%]  lg:px-0   flex-1  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[21%_42%_37%] w-full max-w-[1920px]  border-[#D9D9D9] border-x lg:border-x-0  box-border" >
        <div className="  border-[#D9D9D9] flex items-center justify-center p-4 sm:p-5 md:p-6 lg:p-8">
          <h1 className="uppercase text-[24px] sm:text-[24px] md:text-[32px] lg:text-[36px] leading-tight tracking-tight text-[#8C331B] text-center md:text-left ">
            Обладнання <br /> у вартості:
          </h1>
        </div>
        <div className="flex justify-center lg:items-center w-full lg:border-x border-[#D9D9D9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 gap-x-10 p-4 sm:p-5 md:p-6 lg:p-8">
            {icons.map((icon, index) => (
              <div key={index} className="flex items-center gap-2">
                <img 
                  src={icon.src} 
                  alt={icon.text} 
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-6 lg:h-6"
                />
                <span className="uppercase text-[#383838] text-[14px] sm:text-[16px] md:text-[18px] font-medium">
                  {icon.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-4 sm:p-5 md:p-6 lg:p-8 md:col-span-2 lg:col-span-1 items-center lg:items-start md:justify-center ">
          <h2 className="uppercase text-[#8C331B] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-tight font-semibold">
            Вартість:
          </h2>
          <div className="space-y-2 mt-2 sm:mt-3 md:mt-4 ">
            <p className="text-[#8C331B] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[26px] xl:text-[32px] leading-tight">
              {price.day} UAH{" "}
              <span className="text-[#383838] font-normal uppercase text-[12px] sm:text-[14px] md:text-[18px] xl:text-[32px]">
                /день
              </span>
            </p>
            <p className="text-[#8C331B] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[26px] xl:text-[32px] leading-tight">
              {price.hour} UAH{" "}
              <span className="text-[#383838] font-normal uppercase text-[12px] sm:text-[14px] lg:text-[14px] md:text-[18px] xl:text-[32px]">
                /година
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
