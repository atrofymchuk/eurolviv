import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import hotel from "../../assets/Contacts/hotel.png";

export const Info = () => {

  const {t} = useTranslation()


  return (
    <div className="flex lg:flex-row flex-col items-center">
      <div className="grid grid-cols-[334px] md:grid-cols-[668px] lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr] 2xl:grid-cols-[894px_1126px] lg:border-b border-[#C7C7C7] lg:border-e border-s xl:border-s-0">
        <div className="xl:ps-[95px] md:ps-[40px] pt-4.5 border-e border-[#C7C7C7] lg:w-full lg:pt-[68px] lg:h-[540px] border-b lg:text-start">
          <h1 className="font-cofo uppercase xl:pt-0  text-center lg:text-start 
            text-[32px] md:text-[32px] lg:text-[48px] xl:text-[80px] 2xl:text-[100px] 
            tracking-[0.07em] leading-[1.2] lg:leading-[1.1] xl:leading-[1]  
            lg:tracking-[-0.04em]">
            {t('contacts.info.title')}
          </h1>
          <div className="lg:mt-[39px] mt-[25px] space-y-7 lg:block items-center text-center lg:text-start flex flex-col">
            <p className="font-cofo uppercase 
              text-[12px] md:text-[14px] lg:text-[14px] 
              leading-[1.4] lg:leading-[1.3] 
              text-[#252526] 
              w-[299px] md:w-[340px] lg:w-[370px]">
              {t('contacts.info.desc')}
            </p>
            <p className="font-cofo uppercase 
              text-[12px] md:text-[14px] lg:text-[14px] 
              leading-[1.4] lg:leading-[1.3] 
              text-[#8C331B] font-semibold 
              w-[299px] md:w-[340px] lg:w-[370px]">
              {t('contacts.info.contactUs')}
            </p>
          </div>
          <div className="flex flex-col lg:mt-10 mt-6 mb-6.5 space-y-3 lg:mb-[53px] items-center lg:items-start">
            <h4 className="text-[12px] md:text-[14px] lg:text-[18px] text-[#6B6B6B] font-cofo uppercase " >
              {t('contacts.info.socialMedia')}
            </h4>
            <div className="flex space-x-4 text-lg">
              <span className="rounded-full hover:cursor-pointer transition-transform hover:scale-110">
                <FaFacebook className="w-[30px] h-[30px] md:w-[33px] md:h-[33px] lg:w-[37px] lg:h-[37px]" color="#8C331B" />
              </span>
              <span className="rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 transition-transform hover:scale-110">
                <FaInstagram color="white" className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]" />
              </span>
            </div>
          </div>
        </div>

        <div className="xl:w-full border-[#C7C7C7] lg:border-b  text-center lg:text-start ">
          <div className="grid md:grid-cols-2 lg:grid-cols-2   lg:pb-[48px] lg:pt-[68px] lg:h-[540px] lg:w-1/2 2xl:w-full">
            <div className="xl:ms-[38px] lg:ms-[20px] lg:block pt-4.5 lg:pt-0 items-center flex flex-col lg:border-b-0 lg:border-e-0 border-b border-e border-[#C7C7C7]">
              <h4 className="text-[12px] md:text-[14px] lg:text-[18px] font-semibold text-[#6B6B6B] font-cofo uppercase">
                {t('contacts.info.reception')}
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#999999] font-cofo uppercase lg:mb-[21px] lg:mt-[7px] lg:leading-[22px]">
                {t('contacts.info.receptionPhone')}
              </p>
              <div className="lg:space-y-4 space-y-1">
                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo leading-[1.4] lg:leading-[22px]">
                  +38 (073) 242-40-02
                </p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo leading-[1.4] lg:leading-[22px]">
                  +38 (093) 242-40-02
                </p>
              </div>
              <p className="text-[12px] md:text-[16px] lg:text-[14px] pt-[15px] pb-[25px] lg:pb-0 font-cofo uppercase font-semibold lg:pt-[21px] lg:leading-[25px] leading-[1.4]">
                reception@eurohotel.lviv.ua
              </p>
            </div>

            <div className="xl:ms-[38px] lg:ms-[20px] lg:pt-0 pt-4.5 lg:block items-center flex flex-col lg:border-b-0 lg:border-e-0 border-b border-e border-[#C7C7C7] lg:order-2 order-3 ">
              <h4 className="font-cofo font-semibold text-[12px] lg:text-[16px] uppercase text-[#6B6B6B] w-[216px] lg:w-full">
                {t('contacts.info.booking')}
              </h4>
              <p className="uppercase text-[#999999] text-cofo text-[12px] lg:text-[16px] mt-2 mb-[21px]">
                {t('contacts.info.bookingDesc')}
              </p>
              <div className="lg:space-y-4 space-y-1">
                <p className="text-[12px] lg:text-[16px] font-cofo   leading-[15px] lg:leading-[22px]">
                  +38 (073) 242-40-02
                </p>
                <p className="text-[12px] lg:text-[16px] font-cofo  leading-[15px] lg:leading-[22px]">
                  +38 (093) 242-40-02
                </p>
              </div>
              <p className="text-[12px] lg:text-[14px] pt-[15px] font-cofo uppercase pb-[25px] lg:pb-0 font-semibold lg:pt-[21px] lg:leading-[25px] leading-[12px]">
                info@eurohotel.lviv.ua
              </p>
            </div>

            <div className="xl:ms-[37px] lg:ms-[20px] pt-4.5 lg:pt-0 lg:block items-center flex flex-col  lg:border-b-0 lg:border-e-0 border-b border-e border-[#C7C7C7] lg:order-3 order-2 lg:w-fit">
              <p className="text-[12px] uppercase font-semibold lg:text-[16px] text-[#6B6B6B] font-cofo">
                {t('contacts.info.restaurand/terrase')}
              </p>
              <div className="lg:space-y-4 space-y-1">
                <p className="text-[12px] lg:text-[16px] font-cofo   leading-[15px] lg:leading-[22px]">
                  +38 (073) 242-40-02
                </p>
                <p className="text-[12px] lg:text-[16px] font-cofo  leading-[15px] lg:leading-[22px]">
                  +38 (093) 348-31-14
                </p>
              </div>
              <p className="text-[12px] lg:text-[14px] pt-[15px] font-cofo uppercase font-semibold lg:pt-[21px] lg:leading-[25px] leading-[12px]">
                restaurant@eurohotel.lviv.ua
              </p>
              <div className="hover:cursor-pointer bg-[#8C331B] w-fit rounded-full p-1.5 mt-4 mb-[25px] lg:mb-0">
                <FaInstagram color="white" className="w-[26px] h-[26px]" />
              </div>
            </div>

            <div className="xl:ms-[37px] lg:ms-[20px]  lg:block items-center pt-4.5 lg:pt-0 flex flex-col lg:border-b-0 lg:border-e-0 border-b border-e border-[#C7C7C7] lg:order-4 order-4 lg:w-fit">
              <h4 className="text-[12px] font-semibold lg:text-[18px] text-[#6B6B6B] uppercase">
                {t('contacts.info.address')}
              </h4>
              <p className="flex items-center text-[12px] font-cofo uppercase underline underline-offset-[18%] lg:text-[16px] lg:leading-[22.6px] lg:ps-[4px] pt-3 decoration-[6.5%]">
                <CiLocationOn color="black" className="font-semibold" />
                {t('contacts.info.addressDesc')}
              </p>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
                className="inline-flex w-fit uppercase hover:bg-white hover:text-[#252526] px-[18px] py-[10.5px] text-[12px] lg:text-[14px] xl:px-[20.5px] xl:py-[10.5px]
                rounded-full font-cofo font-semibold mb-[25px] lg:mb-0 mt-[19px] lg:mt-[21px] hover:cursor-pointer bg-[#252526] text-white border border-[#252526]"
              >
                {t('buttons.route')}
              </a>
            </div>
          </div>
        </div>
        <div className="border-e border-[#C7C7C7] flex flex-col h-full lg:text-start  text-center ">
          <div className="xl:ps-[95px] ps-[40px] lg:pt-[58px] pt-[43px] flex-1 ">
            <h1
              className="font-cofo uppercase 
               xl:text-[100px] md:text-[48px]   lg:leading-[81px] lg:tracking-[-0.04em]
               text-[32px] tracking-[0.07em] leading-[25px] lg:text-[48px]"
            >
              {t('contacts.info.headingContactUs')}
            </h1>
            <div className="lg:mt-[39px] mt-[25px] lg:space-y-7 space-y-2.5">
              <p
                className="font-cofo uppercase font-semibold
                 lg:w-[370px] text-[#8C331B] lg:text-[14px] lg:leading-[20px] 
                 text-[12px] leading-[15px]  "
              >
                {t('contacts.info.contactWithUsDesc')}
              </p>
              <p
                className="font-cofo uppercase 
                  lg:w-[370px] text-[#252526] lg:text-[14px] lg:leading-[20px] 
                  text-[12px] leading-[15px]"
              >
                {t('contacts.info.review')}
              </p>
            </div>
          </div>

          <div className="xl:ps-[95px] ps-[40px] lg:pb-10 lg:pt-0 pb-[42px] pt-[50px] lg:border-b-0 border-b border-[#C7C7C7]">
            <h2 className="uppercase font-cofo lg:text-[39px] text-[32px] lg:tracking-[-0.05em]">
              {t('contacts.info.writeUs')}
            </h2>
            <div className="lg:space-y-[14px] lg:pt-[31px] space-y-1.5 flex flex-col items-center lg:items-start">
              <input
                type="text"
                placeholder={t('contacts.info.name')}
                className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-[282px] lg:w-[523px] text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px] lg:pe-[296px]"
              />
              <input
                type="text"
                placeholder={t('contacts.info.email')}
                className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-[282px] lg:w-[523px]  text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px] lg:pe-[296px]"
              />
              <input
                type="text"
                placeholder={t('contacts.info.message')}
                className="bg-[#8B8B8B30] ps-[12px] pe-[28px] py-[11px] w-[282px]  lg:w-[523px]  text-[12px] lg:text-[18px] rounded-full lg:py-[15px] lg:ps-[24px] lg:pe-[296px]"
              />
            </div>
            <button
              className="uppercase font-cofo mt-[12px]  lg:w-[523px] w-[280px] text-sm py-[9px] font-semibold text-white border border-[#A47762] hover:text-[#A47762] hover:bg-white hover:cursor-pointer bg-[#A47762] rounded-full 
      lg:py-[15px] lg:px-[203px] lg:mt-[31px]"
            >
              Надіслати
            </button>
          </div>
        </div>

        <div className="lg:mt-[50px] lg:ms-[37px] flex-col flex text-center lg:text-start xl:border-e-0 xl:border-b-0 border-e border-b border-[#C7C7C7]">
          <div className="">
            <h1
              className="font-cofo uppercase
               lg:text-[40px] lg:leading-[40px] tracking-[-0.05em] text-[#252526]
                text-[24px] leading-[24px] pt-[41px] lg:pt-0
               "
            >
              {t('contacts.info.partners')}
            </h1>
            <p
              className="uppercase font-cofo text-[#6B6B6B] 
              lg:w-[900px] lg:text-[18px] lg:leading-[25px] lg:mt-[35px]
              text-[12px] mt-[12px] md:text-[16px]
              "
            >
              {t("contacts.info.partnersText.0")}
              <span className="font-semibold text-[#252526]">
                {t("contacts.info.partnersText.1")}
              </span>
              {t("contacts.info.partnersText.2")}
            </p>
          </div>

          <div className="lg:mt-[40px] flex-col flex text-center lg:text-start justify-center items-center lg:justify-start lg:items-start lg:pb-0 pb-[19px]">
            <h1 className="font-cofo uppercase lg:text-[40px] lg:leading-[40px] tracking-[-0.05em] text-[#252526] text-[24px] leading-[24px]  pt-[31px] lg:pt-0">
              {t('contacts.info.career')}
            </h1>
            <p className="uppercase font-cofo lg:text-[20px] text-[12px] lg:leading-[25px] lg:mt-[35px] text-[#6B6B6B] lg:w-[969px]  mt-[12px] w-[298px]">
              {t("contacts.info.careerText.0")}
              <span className="font-semibold text-[#252526]">
                {t("contacts.info.careerText.1")}
              </span>
              {t("contacts.info.careerText.2")}
            </p>
            <div className=" max-w-full lg:mt-[60px] lg:mb-10 mt-[40px]">
              <img
                src={hotel}
                alt="hotel"
                className="w-full lobject-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
