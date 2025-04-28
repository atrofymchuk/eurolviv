
import { useTranslation } from "react-i18next";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { ConceptCasd } from "./ConceptCasd";  
export const Concepts = () => {
  const { t } = useTranslation();
  const { concepts } = usePagesInfoStore();
  
  return (
    <section className="w-full flex justify-center flex-col items-center bg-white  ">
      <div className="grid xl:grid-cols-4 w-full lg:grid-cols-2 box-border   border-[#C7C7C7]  fluid-container mx-auto max-w-[89.6%] ">
        <div className="xl:col-span-4 md:col-span-2 pt-[112px] 2xl:pt-[8.281vw] text-center border-x border-[#C7C7C7] xl:pb-[34px] 2xl:pb-[2.813vw] pb-6 ">
          <h1 className="text-[32px] 2xl:text-[5.208vw] xl:text-[5vw] md:font-cofo-medium text-[#252526] leading-[94%] uppercase font-cofo  tracking-[-0.04em]">
            {t("about.concepts.title")}
          </h1>
          <h1 className="text-[32px] 2xl:text-[5.208vw] xl:text-[5vw] md:font-cofo-medium leading-[94%] text-[#252526]  uppercase font-cofo  tracking-[-0.04em]">
            {t("about.concepts.heading.0")}
          </h1>
          <p className="mt-2 xl:mt-6 uppercase text-[#8C331B] 2xl:text-[1.25vw] xl:text-[1.2vw] text-[3.2vw] font-semibold lg:font-medium font-cofo-medium">
            {t("about.concepts.desc")}
          </p>
        </div>


        {concepts.map(({ title, img, alt, text, to }, index) => (
          <ConceptCasd key={index} title={title} img={img} alt={alt} text={text} index={index} to={to} />
        ))} 

        <div className="xl:col-span-4 md:col-span-2 xl:h-[165px] xl:w-full  xl:border-x border-x xl:border-b xl:border-t-0 border-t md:h-0  border-[#C7C7C7] "></div>
      </div>
    </section>
  );
};
