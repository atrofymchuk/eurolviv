import { ViewMenuButton } from "../Buttons/ViewMenu";

type ConferenceMenuCardToProps = {
  img: string;
  text: string;
};

export const ConferenceMenuCard = ({
  img,
  text,
}: ConferenceMenuCardToProps) => {
  return (
    <div className="flex flex-col items-center ">
      <img
        src={img}
        alt=""
        className="2xl:w-[540px] 2xl:h-[609px] object-cover "
      />
      <p className="uppercase text-[#242425] 2xl:text-[48px] 2xl:tracking-[-7%] 2xl:leading-[104%] 2xl:pt-[36px] xl:text-[42px] xl:tracking-[-7%] xl:leading-[104%] 
      xl:pt-[28px] lg:text-[24px] lg:tracking-[-7%] lg:leading-[104%] lg:pt-[20px] ">
        {text}
      </p>
    <ViewMenuButton className="2xl:mt-[25px] xl:mt-[24px] lg:mt-[20px] text-[16px]" />
    </div>
  );
};
