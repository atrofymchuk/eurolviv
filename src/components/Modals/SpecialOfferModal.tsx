import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";
import { useSpecialOffersStore } from "@/store/useSpecialOffersStore";
import { SpecialOfferView } from "@/components/SpecialOffers/SpecialOfferView";

Modal.setAppElement("#root");

export const SpecialOffersModal = () => {
  const { onCloseGlobalModal, isOpenSpecialOfferModal, url } = useModalStore();
  const { getSpecialOffer } = useSpecialOffersStore();

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

  const data = url ? getSpecialOffer(url) : undefined;

  if (!data || !url) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpenSpecialOfferModal}
      onRequestClose={onCloseGlobalModal}
      className="fixed inset-0 mt-10 flex items-center justify-center overflow-y-auto pt-6 lg:mt-0"
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        className="relative flex max-h-[95vh] w-[89.4%] flex-col items-center overflow-auto bg-white p-[22px] pt-[22px] md:w-[76.51%] md:p-[25px] 2xl:w-[76.51%] 2xl:pt-[3.06vh] xl:w-[90%]"
      >
        <button
          type="button"
          className="absolute right-[.2vh] top-[.2vh] z-10 text-3xl hover:cursor-pointer xl:right-[.3vh] xl:top-[.1vh] 2xl:right-[.1vh] 2xl:top-[.7vh]"
          onClick={onCloseGlobalModal}
        >
          <IoClose color="#8C331B" className="h-[26px] w-[26px]" />
        </button>

        <SpecialOfferView data={data} offerSlug={url} />
      </div>
    </Modal>
  );
};
