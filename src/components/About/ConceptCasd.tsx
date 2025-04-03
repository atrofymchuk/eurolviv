import { concepts } from "../../store/InitialPagesInfoStore"
import { InViewWrapper } from "../utils/InViewWrapper"
import { useTranslation } from "react-i18next"  
import { DetailsLink } from "../Buttons/DetailsLink"
import cn from "classnames";
export const ConceptCasd = ({title, img, alt, text, index}: {title: string[], img: string, alt: string, text: string, index: number}) => {
  const {t} = useTranslation()
    return (
        <div
      
        className={cn(`border  border-[#C7C7C7] 
          ${
            index === concepts.length - 2
              ? "md:border-e-0 xl:border-e md:border-b"
              : ""
          }
          ${
            index === 0
              ? "xl:border-l md:border-e-0 md:border-b-0 xl:border-r xl:border-b"
              : "xl:border-l-0 xl:border-t border-t-0 md:border-t md:border-b-0 xl:border-b "
          }${index === concepts.length - 1 ? "border-b-0 md:border-b" : ""}`)}
      >
          <div className="text-center flex flex-col items-center px-[21.7px] xl:px-[32px] py-[41px_25px] lg:py-[47px_38px] h-full xl:min-h-[579px] min-h-[460px]">
          <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo-medium">
            {t(title[0])}
          </h1>
          <h1 className="uppercase text-[20px] xl:text-[30px] font-semibold leading-[20px] xl:leading-[30px] font-cofo-medium">
            {t(title[1])}
          </h1>
          <InViewWrapper>
            <img
              src={img}
              alt={alt}
              className="w-[200px] h-[191px] object-cover xl:mt-[22px] xl:mb-[22px] my-4"
            />
          </InViewWrapper>
          <p className="text-[14px]  flex-grow  leading-[101%]   xl:text-[16px]  2xl:text-[18px] [text-wrap:balance]">
            {t(text)}
          </p>
          <div className="mt-auto">
            <DetailsLink to={"/booking"}>{t("buttons.details")}</DetailsLink>
          </div>
        </div>
      </div>
    )
}
