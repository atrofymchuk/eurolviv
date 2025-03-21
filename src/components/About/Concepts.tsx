
import { useTranslation } from "react-i18next";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { ConceptCasd } from "./ConceptCasd";  
export const Concepts = () => {
  const { t } = useTranslation();
  const { concepts } = usePagesInfoStore();
  
  return (
    <section className="w-full flex justify-center flex-col items-center bg-white  ">
      <div className="grid xl:grid-cols-4 w-full lg:grid-cols-2 box-border   border-[#C7C7C7]  fluid-container mx-auto max-w-[89.58%] ">
        <div className="xl:col-span-4 md:col-span-2 pt-[112px] xl:pt-[159px] text-center border-x border-[#C7C7C7] xl:pb-[54px] pb-6 ">
          <h1 className="text-[32px] xl:text-[100px] leading-[20px] xl:leading-[94px] uppercase font-cofo tracking-[-0.04em]">
            {t("about.concepts.title")}
          </h1>
          <h1 className="text-[32px] xl:text-[100px] leading-[35px] xl:leading-[94px] uppercase font-cofo tracking-[-0.07em]">
            {t("about.concepts.heading.0")}
          </h1>
          <p className="mt-2 xl:mt-6 uppercase text-[#8C331B] xl:text-[24px] text-[12px]  font-cofo-medium">
            {t("about.concepts.desc")}
          </p>
        </div>

        {concepts.map(({ title, img, alt, text }, index) => (
          <ConceptCasd key={index} title={title} img={img} alt={alt} text={text} index={index} />
        ))} 

        <div className="xl:col-span-4 md:col-span-2 xl:h-[165px] xl:w-full  xl:border-x border-x xl:border-b xl:border-t-0 border-t md:h-0  border-[#C7C7C7] "></div>
      </div>
    </section>
  );
};
