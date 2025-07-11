import Modal from "react-modal";
import OrderModal from "@/components/Modals/OrderModal";
import { useModalStore } from "@/store/useModalStore";
Modal.setAppElement("#root");

const BaseModal: React.FC = () => {
  const { isOpenOrder, onCloseGlobalModal } = useModalStore();

  return (
    <Modal
      isOpen={isOpenOrder }
      onRequestClose={onCloseGlobalModal}
      className="fixed mx-auto max-w-[90%]  overflow-y-auto w-fit"
      overlayClassName="fixed inset-0 bg-black/49 z-51  flex items-center justify-center min-h-screen"
    >
      <div className="bg-white w-full  overflow-y-auto relative flex flex-col lg:justify-center lg:px-0 px-5 items-center">
        {isOpenOrder && <OrderModal onCloseGlobalModal={onCloseGlobalModal} />}
      </div>
    </Modal>
  );
};

export default BaseModal;
