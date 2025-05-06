import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { useTranslation } from "react-i18next";
import { OfferDetailsColumn } from "./OfferDetailsColumn";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
import { useCustomWidth } from "../Hooks/useCustomWidth";

Modal.setAppElement("#root");

const getDescriptionClassNames = (
  isEng: boolean,
  isMilitary: boolean | undefined,
  isBusiness: boolean | undefined,
  isPet: boolean | undefined,
  isPhotosession: boolean | undefined,
  isNewlyweeds: boolean | undefined,
  isBirthday: boolean | undefined
) => {
  return `
  uppercase md:w-3/5 text-white text-[3.2vw] md:text-[16px] xl:text-[1.25vw] 2xl:text-[0.94vw] leading-[15px] md:leading-[22px] 
  ${!isEng && isMilitary ? "2xl:w-[58%] xl:w-[67%] w-[97%]" : ""}
  ${isEng && isMilitary ? "2xl:w-[60%] xl:w-[67%] w-[97%]" : ""}
  ${!isEng && isBusiness ? "2xl:w-[58%] xl:w-[65%] w-[93%]" : ""}
  ${isEng && isBusiness ? "2xl:w-[58%] xl:w-[65%] w-[100%]" : ""}
  ${!isEng && isPet ? "2xl:w-[58%] xl:w-[66%] w-[100%] space-y-2" : ""}
  ${isEng && isPet ? "2xl:w-[58%] xl:w-[66%] w-[97.5%] space-y-2" : ""}
  ${!isEng && isPhotosession ? "2xl:w-[65%] xl:w-[66%] w-[100%] space-y-2" : ""}
  ${isEng && isPhotosession ? "2xl:w-[76%] xl:w-[77%] w-[98%] space-y-2" : ""}
  ${!isEng && isNewlyweeds ? "2xl:w-[80%] xl:w-[66%] w-[100%] space-y-2" : ""}
  ${isEng && isNewlyweeds ? "2xl:w-[90%] xl:w-[66%] w-[100%] space-y-2" : ""}
  ${isEng && isNewlyweeds ? "2xl:w-[68%] xl:w-[66%] w-[100%] space-y-2" : ""}
  ${!isEng && isBirthday ? "2xl:w-[85%] xl:w-[80%] w-[93.8%] " : ""}
  ${isEng && isBirthday ? "2xl:w-[100%] xl:w-[100%] w-[93.8%] " : ""}
  `;
};

export const SpecialOffersModal = () => {
  const { onCloseGlobalModal, isOpenSpecialOfferModal, url } = useModalStore();
  const { getSpecialOffer } = useSpecialOffersStore();
  const { t, i18n } = useTranslation();

  const isEng = i18n.language === "en";

  const isMobile = useCustomWidth(300, 800);

  const isPetOffer = url?.includes("pet");
  const isMilitary = url?.includes("military");
  const isBusiness = url?.includes("business");
  const isPet = url?.includes("pet");
  const isPhotosession = url?.includes("photo");
  const isNewlyweeds = url?.includes("newly");
  const isBirthday = url?.includes("birthday");

  useEffect(() => {
    if (isOpenSpecialOfferModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenSpecialOfferModal]);

  const pdfDocuments = {
    pathPublicOffer: isEng
      ? "/Pet Accommodation Rules.pdf"
      : "/Правила_проживання_гостей_з_домашніми_тваринами.pdf",
  };

  const handleOpenPdf = (path: string) => {
    window.open(`/documents/${path}`, "_blank");
  };

  const handleCloseModal = () => {
    onCloseGlobalModal();
  };

  let data;
  if (url) {
    data = getSpecialOffer(url);
  }

  if (!data) {
    return null;
  }

  const phones = [
    {
      href: "tel:+380732424002",
      text: "+38 (073) 242 40 02",
    },
    {
      href: "tel:+380932424002",
      text: "+38 (093) 242 40 02",
    },
  ];

  return (
    <Modal
      isOpen={isOpenSpecialOfferModal}
      onRequestClose={handleCloseModal}
      className="fixed inset-0 flex items-center justify-center overflow-y-auto pt-6 mt-10 lg:mt-0"
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
    >
      <div
        className="bg-white md:w-[76.51%] 2xl:w-[76.51%] xl:w-[90%] w-[89.4%] max-h-[95vh] relative flex flex-col 
       pt-[22px] md:pt-[25px] 2xl:pt-[3.06vh] md:p-[25px] p-[22px] items-center overflow-auto"
      >
        <button
          className="absolute 2xl:top-[0.7vh] 2xl:right-[.1vh] xl:top-[.1vh] xl:right-[.3vh] top-[.2vh] right-[.2vh] text-3xl hover:cursor-pointer z-10"
          onClick={handleCloseModal}
        >
          <IoClose color="#8C331B" className="w-[26px] h-[26px]" />
        </button>

        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent via-[49.85%]  to-[#252526]"></div>
          <InViewWrapper>
            <picture>
              <source media="(min-width:1024px)" srcSet={data.srcModal} />
              <source media="(max-width:1023px)" srcSet={data.srcModalMobile} />
              <img
                src={data.srcModalMobile || data.srcModal}
                className={`w-full h-auto object-cover xl:h-[33.44vw]
                lg:h-[421px] 2xl:w-full 2xl:h-[50.83vh]`}
                alt={t(data.title) || ""}
                loading="lazy"
              />
            </picture>
          </InViewWrapper>
          <div className="absolute inset-0 flex flex-col items-center md:justify-center justify-between text-center px-5 z-2 py-10 ">
            <h1 className="text-[32px] lg:text-[70px] text-[#FFFFFF80] tracking-[-0.07em]">
              {t(data.discount || "")}
            </h1>
            <div className="flex flex-col items-center justify-center  md:mt-auto  gap-y-[20px]">
              <h1
                className={cn(
                  `uppercase text-white text-[8.53vw] lg:text-[70px] leading-[97%] tracking-[-0.07em] 
                  ${isEng && isMilitary ? "w-[50%]" : "lg:w-auto w-[90%] "}
                  ${!isEng && isBusiness ? "2xl:w-[50%] xl:w-[50%] " : ""}
                  ${
                    isEng &&
                    (isBusiness || isPet || isPhotosession || isNewlyweeds)
                      ? "2xl:w-[40%] xl:w-[50%]"
                      : ""
                  }
                  ${
                    !isEng && (isPet || isNewlyweeds)
                      ? "2xl:w-[70%] xl:w-[80%] "
                      : ""
                  }
                  `
                )}
              >
                {t(data.title)}
              </h1>
              <p
                className={getDescriptionClassNames(
                  isEng,
                  isMilitary,
                  isBusiness,
                  isPet,
                  isPhotosession,
                  isNewlyweeds,
                  isBirthday
                )}
              >
                {isPet ? t(data.desc[0]) : t(data.desc)}

                <span
                  className={` ${isPet && "mt-2 block lg:inline"} 
                ${(isPhotosession || isBirthday) && " block lg:block"}
                ${isEng && isPhotosession ? "inline! lg:block" : ""}
                ${
                  !isEng && isNewlyweeds
                    ? " block lg:block 2xl:w-[65%] xl:w-[80%] mx-auto w-[90%]"
                    : ""
                }
                ${
                  isEng && isNewlyweeds
                    ? " 2xl:w-[100%] block lg:block  xl:w-[100%] w-[90%] mx-auto"
                    : ""
                }
                `}
                >
                  {(isPet || isPhotosession || isNewlyweeds || isBirthday) &&
                    t(data.desc[1])}
                </span>
              </p>
              {isPetOffer && (
                <button
                  onClick={() => handleOpenPdf(pdfDocuments.pathPublicOffer)}
                  className={cn(
                    `bg-[#FFFFFF]  lg:h-[46px] text-[12px] rounded-full uppercase  h-[37px] text-[#A47762] font-cofo-medium lg:text-[16px]`,
                    {
                      "lg:w-[280px] w-[200px]": isEng,
                      "w-[181px] lg:w-[245px]": !isEng,
                    }
                  )}
                >
                  {t("specialOffers.pet")}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-x border-[#C7C7C7] w-full ">
          <OfferDetailsColumn
            items={data.details}
            url={url}
            isFirstCol={true}
            title={t("specialOffers.card.title.0")}
          />
          <OfferDetailsColumn
            items={data.conditions}
            url={url}
            isFirstCol={false}
            title={t("specialOffers.card.title.1")}
          />
        </div>

        <div className="grid grid-cols-2  text-center md:text-start w-full bg-[#252526] ">
          <div className="flex flex-col justify-center  px-4 col-span-2 md:col-span-1  xl:py-[27px]  py-[27px_19px] lg:border-e border-[#3D3D3D]">
            <h1 className="text-[24px] lg:text-[48px] text-white uppercase md:ps-6">
              {t("specialOfferModal.contacts.title")}
            </h1>
          </div>

          <div className="flex  md:justify-between justify-start px-4  col-span-2 md:col-span-1 mx-auto lg:mx-0 ">
            <div className="flex flex-col xl:py-[27px] pb-[27px]">
              <ul className="space-y-1 lg:space-y-2 ">
                {phones.map((phone, index) => (
                  <li
                    key={index}
                    className="uppercase text-white font-medium text-[12px] lg:text-[18px] xl:text-[1.17vw] 2xl:text-[0.94vw]"
                  >
                    <a href={phone.href} className="hover:underline">
                      {phone.text}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="uppercase text-white font-medium text-[12px] lg:text-[18px] xl:text-[1.17vw] 2xl:text-[0.94vw] pt-2 2xl:pt-4">
                <a
                  href="mailto:info@eurohotel.lviv.ua"
                  className="hover:underline"
                >
                  info@eurohotel.lviv.ua
                </a>
              </p>
            </div>
            {!isMobile && isPhotosession && (
              <div
                className={` flex flex-col justify-center ${
                  isEng ? "2xl:w-[57%] xl:w-[58%]" : "2xl:w-[41%] xl:w-[46%]"
                }`}
              >
                <p className="uppercase text-white font-medium text-[12px] lg:text-[18px] xl:text-[1.09vw] 2xl:text-[0.83vw] ">
                  {t(data.contactDesc || "")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
