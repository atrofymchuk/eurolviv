import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
import { mapContacts } from "@/store/exportsImg";
import { RouteButton } from "@/components/Buttons/RouteButton";
import { location } from "@/store/exportsIcons";
export const Location = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col mt-[45px] 2xl:mt-[8.28vw] lg:mt-[159px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-cofo uppercase lg:tracking-[-0.04em] 2xl:text-[5.21vw] text-[8.53vw] tracking-[-0.05em] leading-[80%]  text-[#252526]">
          {t("contacts.location.locationTitle")}
        </h1>
        <p
          className="flex items-center text-[3.2vw] font-cofo-medium uppercase underline  underline-offset-[22%] lg:text-[18px] 
        2xl:text-[0.94vw] lg:ps-[4px] lg:mt-[22px] mt-[11.5px] decoration-[6.5%]"
        >
          <img
            src={location}
            alt="location"
            className="2xl:w-[0.94vw] 2xl:h-[0.94vw] lg:w-[18px] lg:h-[18px] md:w-[16px] md:h-[16px] "
          />
          {t("contacts.info.addressDesc")}
        </p>
        <RouteButton className="mb-[25px] lg:mb-0 mt-[19px] lg:mt-[21px] 2xl:mt-[1.09vw] 2xl:w-[10.26vw]! 2xl:h-[2.03vw] 2xl:text-[0.73vw] lg:w-[197px] w-[178px] text-center flex items-center justify-center" />
      </div>

      <div className="relative w-full lg:h-full h-[332px] mt-[18px]">
        <div className="absolute bg-white lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] rounded-full lg:top-[46%] top-[42%] lg:left-[46%] left-[40.1%] -translate-x-1/2 -translate-y-1/2 z-10"></div>

        <div className="absolute flex lg:top-[47%] lg:left-[48.9%] top-[44%] left-[48.5%] -translate-x-1/2 -translate-y-1/2 text-[8.53vw] text-[#8C331B] z-20 items-center">
          <FaMapMarkerAlt className="w-[50px] h-[50px]" />
          <p className="uppercase text-black font-cofo-medium lg:text-[16px] lg:leading-[20.6px] text-[2.67vw] leading-[12.6px]">
            {t("contacts.location.eurohotel")}
          </p>
        </div>
        <InViewWrapper>
          <img
            src={mapContacts}
            alt="map"
            className="w-full h-full object-cover object-center grayscale"
          />
        </InViewWrapper>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 7.4%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>
    </div>
  );
};
