import { Link } from "react-router-dom";
import { SuggestionT } from "../../store/types";

type SuggestionToProps = {
  suggestion: SuggestionT[];
};

export const Suggestion = ({ suggestion }: SuggestionToProps) => {
  return (
    <div className="w-full bg-[#252526] flex justify-center">
      <div className="grid lg:grid-cols-2 grid-cols-1  lg:pt-[200px]">
        {suggestion.map((item, index) => (
          <div key={index} className="relative mt-30 lg:mt-0">
            <img
              src={item.img}
              alt={item.type}
              className="lg:w-full lg:h-[654px] object-cover object-[10%_20%]"
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#252526] to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center text-center text-white z-10 p-4  top-[-90px] lg:top-[-60px]">
              <h1 className="lg:text-[100px] text-[32px] lg:leading-[81px] uppercase leading-[28px] truncate-[0.07em] lg:truncate-[-0.04em]">
                {item.title}
              </h1>
              <p className="uppercase font-semibold lg:text-[24px] text-[14px] lg:leading-[24px] leading-[12px] lg:pt-[19px] pt-[7px]">
                {item.size}
              </p>
              <p className="uppercase lg:text-[18px] text-[12px] lg:leading-[12px] max-w-[232px] lg:max-w-full leading-[14px] lg:pt-[38px] pt-[19px]">
                {item.desc}
              </p>
              <Link to={item.type} className="uppercase lg:py-[12px] lg:mt-[51px] mt-[28px] lg:px-[20px]  rounded-full font-semibold border-[0.5px]  text-[#FFFFFF] lg:leading-[20px] lg:text-[16px] text-[12px] leading-[15px] py-[12px] px-[17px]">переглянути</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
