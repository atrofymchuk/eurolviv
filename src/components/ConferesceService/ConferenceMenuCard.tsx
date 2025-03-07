import { useModalStore } from "../../store/useModalStore";
type ConferenceMenuCardToProps = {
  img: string;
  text: string;
  buttonText: string;
};

export const ConferenceMenuCard = ({
  img,
  text,
  buttonText,
}: ConferenceMenuCardToProps) => {
  const { onOpenModal } = useModalStore();
  return (
    <div className="flex flex-col items-center px-4 ">
      <img
        src={img}
        alt=""
        className="2xl:w-[540px] 2xl:h-[609px] object-cover "
      />
      <p className="uppercase text-[#242425] 2xl:text-[48px] 2xl:tracking-[-7%] 2xl:leading-[104%] 2xl:pt-[36px] xl:text-[32px] xl:tracking-[-7%] xl:leading-[104%] xl:pt-[28px] lg:text-[24px] lg:tracking-[-7%] lg:leading-[104%] lg:pt-[20px] ">
        {text}
      </p>
      <button
        onClick={() => onOpenModal("menu")}
        className="uppercase text-[#8C331B] hover:bg-[#8C331B] hover:text-[#FFFFFF] border 2xl:px-4 2xl:py-2 xl:px-3 xl:py-2 lg:px-3 lg:py-2  xl:text-[16px] border-[#8C331B] rounded-full xl:mt-[37px] lg:mt-[16px] font-medium"
      >
        {buttonText}
      </button>
    </div>
  );
};
