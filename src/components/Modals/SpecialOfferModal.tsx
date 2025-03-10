import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { useTranslation } from "react-i18next";
import { OfferDetailsColumn } from "./OfferDetailsColumn";
import { InViewWrapper } from "../InViewWrapper";

Modal.setAppElement("#root");

export const SpecialOffersModal = () => {
  const { onCloseGlobalModal, isOpenSpecialOfferModal } = useModalStore();
  const { getSpecialOffer } = useSpecialOffersStore();
  const { t } = useTranslation();

  let data;
  const { offer } = useParams();
  if (offer) {
    data = getSpecialOffer(offer);
  }

  if (!data) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpenSpecialOfferModal}
      onRequestClose={onCloseGlobalModal}
      className="fixed inset-0 flex items-center justify-center overflow-auto "
      overlayClassName="fixed inset-0 bg-black/50 z-50"
    >
      <div className="bg-white md:w-[76.51%] min-h-[80vh] max-h-[100vh] relative lg:overflow-hidden flex flex-col 2xl:justify-center md:p-[25px] p-[25px] items-center overflow-auto ">
        <button
          className="absolute top-0 right-0 text-3xl hover:cursor-pointer"
          onClick={onCloseGlobalModal}
        >
          <IoClose color="#8C331B" />
        </button>

        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent via-[49.85%] to-[#252526]"></div>
          <InViewWrapper> 
            <img
              src={data.src}
            className="w-full h-[351px] md:max-h-[50vh]  object-cover object-center rounded-t-lg"
            />
          </InViewWrapper>  
          <div className="absolute inset-0 flex flex-col items-center md:justify-center justify-between text-center px-5 z-2 py-10">
            <h1 className="text-[32px] lg:text-[70px] text-[#FFFFFF80] tracking-[-0.07em]">
              {t(data.discount || "")}
            </h1>
            <div className="flex flex-col items-center justify-center  md:mt-auto">

            <h1 className={`uppercase text-white text-[32px] lg:text-[70px] leading-[97%] tracking-[-0.07em] ${data.url === 'business' ? "md:w-2/3" : ""}`}>
              {t(data.title)}
            </h1>
            <p className="uppercase md:w-3/5 text-white text-[12px] md:text-[16px] leading-[15px] md:leading-[22px]">
              {t(data.desc)}
            </p>
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

        <div className="grid grid-cols-2  text-center md:text-start w-full bg-[#252526]">
          
          <div className="flex flex-col justify-center border-black/90 border-e px-4 col-span-2 md:col-span-1  ">
            <h1 className="text-[24px] lg:text-[48px] text-white uppercase md:ps-6">
              {t("specialOfferModal.contacts.title")}
            </h1>
          </div>
          <div className="flex flex-col md:justify-center justify-start px-4 py-4 col-span-2 md:col-span-1 ">
            <ul className="space-y-1 lg:space-y-2 " >
              <li className="uppercase text-white font-medium text-[12px] lg:text-[18px]">
                +38 (073) 242 40 02
              </li>
              <li className="uppercase text-white font-medium text-[12px] lg:text-[18px]">
                +38 (093) 242 40 02
              </li>
            </ul>
            <p className="uppercase text-white font-medium text-[12px] lg:text-[18px] pt-2 lg:pt-4">
              info@eurohotel.lviv.ua
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

