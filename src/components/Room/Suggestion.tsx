import { Link } from "react-router-dom";
import { SuggestionT } from "../../store/types";

type SuggestionToProps = {
  suggestion: SuggestionT[];
};

export const Suggestion = ({ suggestion }: SuggestionToProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        {suggestion.map((item, index) => (
          <div
            key={index}
            className="bg-[#252526] relative lg:pt-[240px] pt-[100px] flex flex-col"
          >
            <div className="relative">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#252526] to-transparent"></div>
              <img
                src={item.img}
                alt={item.type}
                className="lg:w-full lg:h-[654px] object-cover"
              />
            </div>

            <div className="absolute top-0 flex flex-col items-center text-center text-white z-10 lg:p-4 p-[51px] w-full lg:h-[250px] justify-s">
              <h1 className="lg:text-[100px] text-[32px] lg:leading-[81px] uppercase leading-[28px] lg:mt-20 lg:min-h-[162px]  flex items-end">
                {item.title}
              </h1>

              {item.size.length > 5 && (
                <p className="uppercase font-semibold lg:text-[24px] text-[14px] lg:leading-[24px] leading-[12px] lg:pt-[19px] pt-[7px]">
                  {item.size}
                </p>
              )}
              <p className="uppercase lg:text-[18px] text-[12px] lg:leading-[22px] max-w-[232px] lg:max-w-full leading-[14px] lg:pt-[38px] pt-[19px] lg:w-[380px]">
                {item.desc}
              </p>
              <Link
                to={`/rooms/${item.type}`}
                className="uppercase lg:py-[12px] lg:mt-[61px] mt-[20px] lg:px-[20px] rounded-full font-semibold border-[0.5px] text-[#FFFFFF] lg:leading-[20px] lg:text-[16px] text-[12px] leading-[15px] py-[12px] px-[17px]"
              >
                переглянути
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
