import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { useTranslation } from "react-i18next";
import { OfferDetailsColumn } from "./OfferDetailsColumn";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";

Modal.setAppElement("#root");

export const SpecialOffersModal = () => {
  const { onCloseGlobalModal, isOpenSpecialOfferModal, url } = useModalStore();
  const { getSpecialOffer } = useSpecialOffersStore();
  const { t, i18n } = useTranslation();
  
  const isPetOffer = url?.includes("pet");
  const isEng = i18n.language === "en";

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

  return (
    <Modal
      isOpen={isOpenSpecialOfferModal}
      onRequestClose={handleCloseModal}
      className="fixed inset-0 flex items-center justify-center overflow-y-auto  mt-10 lg:mt-0 "
      overlayClassName="fixed inset-0 bg-black/50 z-50 flex items-center justify-center "
    >
      <div className="bg-white md:w-[76.51%] w-[91%] max-h-[95vh] relative flex flex-col 2xl:justify-center  
       2xl:pt-[5vw]   md:p-[25px] p-[22px] items-center overflow-auto">
        <button
          className="absolute top-1 right-1 text-3xl hover:cursor-pointer z-10 "
          onClick={handleCloseModal}
        >
          <IoClose color="#8C331B" className="w-[20px] h-[20px]" />
        </button>

        <div className="relative w-full ">
          <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent via-[49.85%]  to-[#252526]"></div>
          <InViewWrapper>
            <img loading="lazy"
              src={data.src}
              className="w-full h-[351px] md:max-h-[50vh] xl:h-[60vh] 2xl:h-[60vh] object-cover object-center rounded-t-lg"
            />
          </InViewWrapper>
          <div className="absolute inset-0 flex flex-col items-center md:justify-center justify-between text-center px-5 z-2 py-10 ">
            <h1 className="text-[32px] lg:text-[70px] text-[#FFFFFF80] tracking-[-0.07em]">
              {t(data.discount || "")}
            </h1>
            <div className="flex flex-col items-center justify-center  md:mt-auto  gap-y-[20px]">
              <h1
                className={cn(
                  `uppercase text-white text-[8.53vw] lg:text-[70px] leading-[97%] tracking-[-0.07em] ${
                    data.url === "business" ? "md:w-2/3" : ""
                  }`
                )}
              >
                {t(data.title)}
              </h1>
              <p className="uppercase md:w-3/5 text-white text-[3.2vw] md:text-[16px] leading-[15px] md:leading-[22px] w-[95%]">
                {t(data.desc)}
              </p>
              {isPetOffer && (
                <button
                  onClick={() => handleOpenPdf(pdfDocuments.pathPublicOffer)}
                  className={cn(`bg-[#FFFFFF] lg:w-[245px] lg:h-[46px] rounded-full uppercase text-[#A47762] font-cofo-medium lg:text-[16px]`, {
                    "lg:w-[280px]": isEng,
                  })}
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
            title={t("specialOffers.card.title.0")}
          />
          <OfferDetailsColumn
            items={data.conditions}
            title={t("specialOffers.card.title.1")}
          />
        </div>

        <div className="grid grid-cols-2  text-center md:text-start w-full bg-[#252526] py-[27px]">
          <div className="flex flex-col justify-center  px-4 col-span-2 md:col-span-1  ">
            <h1 className="text-[24px] lg:text-[48px] text-white uppercase md:ps-6">
              {t("specialOfferModal.contacts.title")}
            </h1>
          </div>
          <div className="flex flex-col md:justify-center justify-start px-4 pt-4 col-span-2 md:col-span-1 ">
            <ul className="space-y-1 lg:space-y-2 ">
              <li className="uppercase text-white font-medium text-[12px] lg:text-[18px]">
                <a href="tel:+380732424002" className="hover:underline">
                  +38 (073) 242 40 02
                </a>
              </li>
              <li className="uppercase text-white font-medium text-[12px] lg:text-[18px]">
                <a href="tel:+380932424002" className="hover:underline">
                  +38 (093) 242 40 02
                </a>
              </li>
            </ul>
            <p className="uppercase text-white font-medium text-[12px] lg:text-[18px] pt-2 lg:pt-4">
              <a href="mailto:info@eurohotel.lviv.ua" className="hover:underline">
                info@eurohotel.lviv.ua
              </a>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
