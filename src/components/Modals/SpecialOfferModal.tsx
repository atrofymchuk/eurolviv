import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";

import { OfferDetailsColumn } from "./OfferDetailsColumn";

Modal.setAppElement("#root");

const SpecialOffersModal = () => {
  const {   onCloseGlobalModal  , isOpenSpecialOfferModal } = useModalStore();
  const {  getSpecialOffer } = useSpecialOffersStore();
  let data;
  const { offer } = useParams();
  if (offer) {
    data = getSpecialOffer(offer);
  }

if(!data) {
  console.log('no data', offer);
  return
}

  return (
    <Modal
      isOpen={isOpenSpecialOfferModal}
        onRequestClose={onCloseGlobalModal}
      className="fixed inset-0 flex items-center justify-center h-full lg:overflow-hidden overflow-y-auto lg:top-0 top-[70px] left-1/2 transform -translate-x-1/2 w-[100%]"
      overlayClassName="fixed inset-0 bg-black/49 z-49 lg:z-51"
    >
      <div className="bg-white lg:w-[1469px] w-[334px] max-h-screen relative flex flex-col lg:justify-center lg:p-[37px] p-[25px] items-center lg:overflow-hidden overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-2xl hover:cursor-pointer"
          onClick={onCloseGlobalModal}
        >
          <IoClose color="#8C331B" />
        </button>

        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent via-[49.85%] to-[#252526]"></div>

          <img
            src={data.src}
            className="lg:w-[1395px] lg:h-[407px] w-[288px] h-[351px] object-cover object-[50%_40%]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-around text-center px-5">
            <h1 className="lg:text-[91px] lg:leading-[81px] tracking-[-0.07em] text-[#FFFFFF80] text-[32px] leading-[26px]">
              {data.discount}
            </h1>
            <h1 className="uppercase lg:text-[91px] lg:leading-[81px] leading-[29.44px] tracking-[-0.07em] lg:w-[879px] text-[#FFFFFF] text-[32px]">
              {data.title}
            </h1>
            <p className="uppercase lg:w-[785px] text-[#FFFFFF] lg:text-[18px] lg:leading-[22.68px] text-[12px] leading-[15.12px]">
              {data.desc}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row ">
        <OfferDetailsColumn items={data.details} title="деталі пропозиції"/>
        <hr className="border-[#C7C7C7] lg:hidden"/>
        <OfferDetailsColumn items={data.conditions} title="умови пропозиції"/>
        </div>

        <div className="flex  lg:flex-row flex-col  lg:py-0 py-[27px] text-center lg:text-start w-full lg:w-full bg-[#252526] max">
          <div className="flex-col lg:py-[44px]  lg:ps-[36px] w- lg:w-[697px] border-e ">
            <h1 className="lg:text-[48px] lg:tracking-[-0.07em] lg:leading-[39px] text-[#FFFFFF] uppercase">
              Контакти
            </h1>
          </div>
          <div className="flex-col lg:py-[21px] lg:ps-[39px] lg:w-[697px] items-start pt-[18px]">
            <ul className="lg:space-y-[5px] space-y-1">
              <li className="uppercase text-[#FFFFFF] font-[500] lg:text-[18px] text-[12px] leading-[15px]">
                +38 (073) 242 40 02
              </li>
              <li className="uppercase text-[#FFFFFF] font-[500] lg:text-[18px] text-[12px] leading-[15px]">
                +38 (093) 242 40 02
              </li>
            </ul>
            <p className="uppercase text-[#FFFFFF] font-[500] lg:text-[18px] text-[12px] leading-[15px] lg:pt-[16px] pt-[17px]">
              info@eurohotel.lviv.ua
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SpecialOffersModal;
