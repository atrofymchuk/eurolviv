
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../InViewWrapper";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";

export const Concepts = () => {
  const { t } = useTranslation();
  const { concepts } = usePagesInfoStore();
  
  return (
    <section className="w-full flex justify-center flex-col items-center bg-white  ">
      <div className="grid xl:grid-cols-4 w-full lg:grid-cols-2 box-border   border-[#C7C7C7]  fluid-container mx-auto max-w-[89.58%] ">
        <div className="xl:col-span-4 md:col-span-2 pt-[112px] xl:pt-[159px] text-center border-x border-[#C7C7C7] xl:pb-[54px] pb-6 ">
          <h1 className="text-[32px] xl:text-[100px] leading-[20px] xl:leading-[94px] uppercase font-cofo">
            {t("about.concepts.title")}
          </h1>
          <h1 className="text-[32px] xl:text-[100px] leading-[35px] xl:leading-[94px] uppercase font-cofo">
            {t("about.concepts.heading.0")}
          </h1>
          <p className="mt-2 xl:mt-6 uppercase text-[#8C331B] font-semibold font-cofo">
            {t("about.concepts.desc")}
          </p>
        </div>

        {concepts.map(({ title, img, alt, text }, index) => (
          <div
            key={index}
            className={`border  border-[#C7C7C7] 
              ${
                index === concepts.length - 2
                  ? "md:border-e-0 xl:border-e md:border-b"
                  : ""
              }
              ${
                index === 0
                  ? "xl:border-l md:border-e-0 md:border-b-0 xl:border-r xl:border-b"
                  : "xl:border-l-0 xl:border-t border-t-0 md:border-t md:border-b-0 xl:border-b "
              }${index === concepts.length - 1 ? "border-b-0 md:border-b" : ""}`}
          >
            <div className="text-center flex flex-col items-center px-6 py-8 xl:h-[579px] h-[469px]">
              <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {t(title[0])}
              </h1>
              <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {t(title[1])}
              </h1>
              <InViewWrapper>
                <img
                  src={img}
                  alt={alt}
                  className="w-[200px] h-[191px] object-cover xl:my-6 my-4"
                />
              </InViewWrapper>
              <p className="text-sm xl:text-base flex-grow font-cofo font-normal px-2  xl:text-[16px]  2xl:text-[18px]">
                {t(text)}
              </p>
              <div className="mt-auto">
                <button className="font-semibold border border-[#8C331B] text-[#8C331B] px-8 py-3 rounded-full uppercase text-sm xl:text-base transition-all duration-300 hover:bg-[#8C331B] hover:text-white font-cofo">
                  {t("buttons.details")}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="xl:col-span-4 md:col-span-2 xl:h-[165px] xl:w-full  xl:border-x border-x xl:border-b xl:border-t-0 border-t md:h-0  border-[#C7C7C7] "></div>
      </div>
    </section>
  );
};
