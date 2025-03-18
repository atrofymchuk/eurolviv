
import MapComponent from "./Map";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { navigate } from "../../store/exportsIcons";
import { hotel } from "../../store/exportsImg";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";

export const WhereWeAre = () => {
  const { t } = useTranslation();
  const {places,infrastructure} = usePagesInfoStore()
  return (
    <section className="flex flex-col   font-cofo">
      <div className="grid lg:grid-cols-[1fr_1fr] max-w-[89.58%]  mx-auto w-full container-fluid border border-t-0 border-[#c7c7c7]">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start  border-t-0 p-4 pe-0 xl:h-[692px] lg:pt-[73px]">
          <div className="lg:ms-[52px]  ">
            <p className="uppercase flex items-center lg:items-start justify-center lg:justify-start">

              <InViewWrapper>
              <img src={navigate} alt="navigate" className="mr-2" />
              </InViewWrapper>
              <span className="underline text-[#8C331B] font-semibold text-[12px] xl:text-lg ">
                {t("about.whereWeAre.desc.0")}
              </span>
            </p>
            <h1 className="uppercase text-3xl xl:text-[100px] font-bold mt-4 text-center lg:text-left leading-[81%] tracking-[-10%] ">
              {t("about.whereWeAre.title")}
            </h1>
            <p className="text-[#8F8F8F] text-sm xl:text-[20px] xl:max-w-[500px] text-center uppercase lg:text-left xl:mt-[52px] mt-6">
              <span className="text-[#8C331B] font-semibold">
                {t("about.whereWeAre.desc.1")}
              </span>
              {t("about.whereWeAre.desc.2")}
            </p>
            <p className="font-semibold text-sm xl:text-lg text-center lg:text-left  uppercase">
              {t("about.whereWeAre.rating")}
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                target="_blank"
                href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
                className="bg-black text-white px-5 py-3 mt-6 text-sm xl:text-lg rounded-full border border-black transition-all hover:bg-white hover:text-black uppercase xl:mt-[50px]"
              >
                {t("buttons.route")}
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full max-h-[34rem] xl:min-h-[521px] lg:h-[28rem] mx-auto my-auto max-w-[862px]  p-5 ps-0">
          <InViewWrapper>

          <MapComponent />
          </InViewWrapper>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 w-full border   border-[#c7c7c7]  border-t-0  container-fluid max-w-[89.58%] mx-auto">
        <div className="p-8 xl:p-12  lg:border-r border-[#c7c7c7]">
          <h2 className="text-[#8C331B] text-xl xl:text-3xl font-semibold text-center xl:text-left">
            {t("about.whereWeAre.infrastructureTitle")}
          </h2>
          <h1 className="uppercase text-3xl xl:text-[100px] font-bold mt-4 text-center xl:text-left leading-[81%] tracking-[-7%]">
            {t("about.whereWeAre.placesTitle")}
          </h1>
          <p className="text-[#252526] text-sm xl:text-lg mt-6 text-center xl:text-left ">
            {t("about.whereWeAre.infrastructureDesc")}
          </p>
          <div className="flex justify-center xl:justify-start mt-6">
            <InViewWrapper>
            <img
              src={hotel}
              alt="hotel"
              className="hidden lg:block w-[760px] h-[582px]"
            />
            </InViewWrapper>
          </div>
        </div>

        <div className="p-8 xl:p-12 border-t lg:border-t-0 border-[#c7c7c7]">
          <h2 className="text-[#8C331B] text-xl xl:text-3xl font-semibold text-center xl:text-left">
            {t("about.whereWeAre.whatIsClose")}
          </h2>
          <ul className="grid gap-3 mt-6 text-left">
            {infrastructure.map(([place, distance], index) => (
              <li
                key={index}
                className="flex justify-between text-sm xl:text-lg"
              >
                <span>{t(place)}</span>
                <span className="text-[#8C331B] font-semibold">{t(distance)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-6 lg:hidden">
            <InViewWrapper>
            <img src={hotel} alt="hotel" className="w-[300px] h-[230px]" />
            </InViewWrapper>
          </div>
          <h2 className="text-[#8C331B] text-xl xl:text-3xl font-semibold text-center xl:text-left mt-10">
            {t("about.whereWeAre.places.heading")}
          </h2>
          <ul className="grid gap-3 mt-6 text-left">
            {places.map(([place, distance], index) => (
              <li
                key={index}
                className="flex justify-between text-sm xl:text-lg"
              >
                <span>{t(place)}</span>
                <span className="text-[#8C331B] font-semibold">{t(distance)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
