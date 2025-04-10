import { ViewMenuButton } from "../Buttons/ViewMenu";
import { useTranslation } from "react-i18next";

type ConferenceMenuCardToProps = {
  img: string;
  text: string;
  pdf: string;
};

export const ConferenceMenuCard = ({
  img,
  text,
  pdf
}: ConferenceMenuCardToProps) => {
  const { t } = useTranslation();
  console.log(text)
  return (
    <div className="flex flex-col items-center ">
      <img
        src={img}
        alt=""
        className="2xl:w-[540px] 2xl:h-[609px] xl:w-[440px] xl:h-[509px] lg:w-[340px] lg:h-[409px]  md:w-[240px] md:h-[300px]  object-cover "
      />
      <p className="uppercase text-[#242425] 2xl:text-[48px] 2xl:tracking-[-7%] 2xl:leading-[104%] 2xl:pt-[36px] xl:text-[42px] 
      xl:pt-[28px] lg:text-[24px] lg:tracking-[-7%] lg:leading-[104%] lg:pt-[20px] ">
        {text}
      </p>
    <ViewMenuButton className="2xl:mt-[25px] xl:mt-[24px] lg:mt-[20px] lg:text-[16px] lg:w-[209px] " pdf={pdf} >
      {t("buttons.viewMenuButton")}
    </ViewMenuButton>
    </div>
  );
};
