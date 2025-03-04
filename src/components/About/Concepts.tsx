import roomLux from "../../assets/About/2roomLux.png";
import terasse from "../../assets/About/terrase.png";
import bussines from "../../assets/About/bussines.png";
import bar from "../../assets/About/bar.png";
import { useTranslation } from "react-i18next";



export const Concepts = () => {
  
  const {t} = useTranslation()
  const concepts = [
    
      {
        title: [t("about.concepts.frstCard.title.0"), t("about.concepts.frstCard.title.1")],
        img: roomLux,
        alt: "bedroom",
        text: t("about.concepts.frstCard.desc"),
      },
      {
        title: [t("about.concepts.secondCard.title.0"), t("about.concepts.secondCard.title.1")],
        img: terasse,
        alt: "terrace",
        text: t("about.concepts.secondCard.desc"),
      },
      {
        title: [t("about.concepts.thirdCard.title.0"), t("about.concepts.thirdCard.title.1")],
        img: bussines,
        alt: "conference",
        text: t("about.concepts.thirdCard.desc"),
      },
      {
        title: [t("about.concepts.fourthCard.title.0"), t("about.concepts.fourthCard.title.1")],
        img: bar,
        alt: "karaoke",
        text: t("about.concepts.fourthCard.desc"),
      },
    ]  


  return (
    <section className="w-full flex justify-center flex-col items-center bg-white  ">
      <div className="grid xl:grid-cols-4 w-full lg:grid-cols-2 box-border   border-[#C7C7C7]  px-4 md:px-6 sm:px-6 xl:px-6 2xl:px-0 fluid-container mx-auto max-w-[1720px]  ">
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
            className={`border border-[#C7C7C7] 
              ${index === concepts.length - 2 ? "md:border-e-0 xl:border-e md:border-b" : ""}
              ${
              index === 0 ? "xl:border-l md:border-e-0 md:border-b-0 xl:border-r xl:border-b" : "xl:border-l-0 xl:border-t border-t-0 md:border-t md:border-b-0 xl:border-b "
            }`}
          >
            <div className="text-center flex flex-col items-center px-6 py-8 xl:h-[579px] h-[469px]">
              <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {title[0]}
              </h1>
              <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo">
                {title[1]}
              </h1>
              <img
                src={img}
                alt={alt}
                className="w-[200px] h-[191px] object-cover xl:my-6 my-4"
              />
              <p className="text-sm xl:text-base flex-grow font-cofo font-normal px-2  xl:text-[16px]  2xl:text-[18px]">
                {text}
              </p>
              <div className="mt-auto">
                <button className="font-semibold border border-[#8C331B] text-[#8C331B] px-8 py-3 rounded-full uppercase text-sm xl:text-base transition-all duration-300 hover:bg-[#8C331B] hover:text-white font-cofo">
                  {t("buttons.details")}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Нижня рамка */}
        <div className="xl:col-span-4 md:col-span-2 xl:h-[165px] xl:w-full  xl:border-x border-x xl:border-b xl:border-t-0 border-t md:h-0  border-[#C7C7C7] "></div>
      </div>
    </section>
  );
};
