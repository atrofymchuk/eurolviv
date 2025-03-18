import { CiLocationOn } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { mapContacts } from "../../store/exportsImg";

export const Location = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col mt-[45px] lg:mt-[159px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-cofo uppercase lg:leading-[81px] lg:tracking-[-0.04em] lg:text-[100px] text-[32px] tracking-[-0.05em] leading:[34px] text-[#252526]">
          {t("contacts.location.locationTitle")}
        </h1>
        <p className="flex items-center text-[12px] font-cofo uppercase underline underline-offset-[18%] lg:text-[18px] lg:leading-[22.6px] lg:ps-[4px] lg:mt-[22px] mt-[11.5px] decoration-[6.5%]">
          <CiLocationOn color="black" className="font-semibold" />
          {t("contacts.info.addressDesc")}
        </p>
        <a
          target="_blank"
          href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
          className="inline-flex w-fit uppercase hover:bg-white hover:text-[#252526] px-[18px] py-[10.5px] text-[12px] lg:text-[14px] lg:px-[18.5px] lg:py-[9px]
         rounded-full font-cofo font-semibold mb-[25px] lg:mb-0 mt-[19px] lg:mt-[21px] hover:cursor-pointer bg-[#252526] text-white border border-[#252526]"
        >
          {t("buttons.route")}
        </a>
      </div>

      <div className="relative w-full lg:h-full h-[332px] mt-[18px]">
        <div className="absolute bg-white lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] rounded-full lg:top-[46%] top-[42%] lg:left-[46%] left-[40.1%] -translate-x-1/2 -translate-y-1/2 z-10"></div>

        <div className="absolute flex lg:top-[47%] lg:left-[48.9%] top-[44%] left-[48.5%] -translate-x-1/2 -translate-y-1/2 text-4xl text-[#8C331B] z-20 items-center">
          <FaMapMarkerAlt className="w-[50px] h-[50px]" />
          <p className="uppercase text-black font-semibold font-cofo lg:text-[16px] lg:leading-[20.6px] text-[10px] leading-[12.6px]">
            {t("contacts.location.eurohotel")}
          </p>
        </div>
        <InViewWrapper>

        <img
          src={mapContacts  }
          alt="map"
          className="w-full h-full object-cover object-center grayscale"
        /></InViewWrapper>
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
