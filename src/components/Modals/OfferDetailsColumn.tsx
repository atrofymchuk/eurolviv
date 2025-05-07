import { useTranslation } from "react-i18next";
import { list } from "@/store/exportsIcons";
import i18n from "@/i18n";

type OfferDetailsColumnToProps = {
    title:string
    items:string[]
    url:string | null
    isFirstCol:boolean
}



export const OfferDetailsColumn = ({ title, items, url, isFirstCol }:OfferDetailsColumnToProps) => {
  const {t} = useTranslation()  
const isMilitary = url?.includes("military")
const isBusiness = url?.includes("business")
const isPet = url?.includes("pet")
const isPhotosession = url?.includes("photo")
const isNewlyweeds = url?.includes("newly")
const isBirthday = url?.includes("birthday")
const isEng = i18n.language === "en"
  return (
    <div className="flex flex-col col-span-2 md:col-span-1 px-[5.07vw_3.73vw]  md:border-b-0 border-b border-[#C7C7C7]  md:border-e lg:ps-[36px] xl:ps-[2.34vw] lg:pt-[30px] 2xl:pt-[3.33vh] w-full pt-[23px] pb-[23px] lg:pb-0">
    <h1 className="uppercase xl:text-[36px] 2xl:text-[2.5vw] md:text-[32px] lg:leading-[38.9px] tracking-[-0.07em] text-[#252526] text-[24px] leading-[19.5px] text-center lg:text-start">
        {t(title)}
    </h1>

    <ul className="lg:space-y-[21px]  2xl:mt-[3.24vh]  text-[#6B6B6B] 2xl:pb-[2.78vh] xl:pb-[2.5vh] mt-[27px]  space-y-[11px] ">
        {items.map((el, index)=>
        <li className={`uppercase flex items-start lg:gap-3 gap-x-[2.13vw]  2xl:text-[0.94vw] xl:text-[1.09vw] md:text-[14px] 
        text-[3.2vw] lg:leading-[20.4px] tracking-[-0.04em] text-[#6B6B6B]   
        
        ${!isEng && isMilitary && isFirstCol && index===0 ? "2xl:w-[85%] xl:w-[90%] w-[95%]" : ""}
        ${!isEng && isMilitary && isFirstCol && index===1? "xl:w-auto w-[90%]" : ""}
        ${!isEng && isMilitary && isFirstCol && index===2 ? "2xl:w-[100%] xl:w-[95%] w-[100%]" : ""}

        ${ !isEng &&isMilitary && !isFirstCol && index===0 ? "2xl:w-[100%] xl:w-[100%] w-[100%]" : ""}
        ${ !isEng &&isMilitary && !isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[95%] w-[97%]" : ""}

        ${!isEng &&isBusiness && isFirstCol && index===0 ? "2xl:w-[97%] xl:w-[92.9%] w-[97%]" : ""}
        ${!isEng &&isBusiness && isFirstCol && index===1 ? "2xl:w-[105%] xl:w-[110%] w-[95%]" : ""}
        ${!isEng &&isBusiness && isFirstCol && index===2 ? "xl:w-auto  w-[95%]" : ""}

        ${!isEng && isBusiness && !isFirstCol && index===0 ? "2xl:w-[100%] xl:w-[95%] w-[100%]" : ""}
        ${!isEng && isBusiness && !isFirstCol && index===1 ? "2xl:w-[100%] xl:w-[100%] w-[97%]" : ""}
        ${!isEng && isBusiness && !isFirstCol && index===2 ? "2xl:w-[95%] xl:w-[94%] w-[100%]" : ""}

        ${!isEng&&isPet && isFirstCol && index===0 ? "2xl:w-[100%] xl:w-[110%] w-[97%]" : ""}
        ${!isEng&&isPet && isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[95%] w-[90%]" : ""}
        ${!isEng&&isPet && isFirstCol && index===2 ? "2xl:w-[75%] xl:w-[85%] w-[100%]" : ""}
        ${!isEng &&isPet && isFirstCol && index===3 ? "xl:w-auto w-[95%]" : ""}

        ${!isEng &&isPet && !isFirstCol && index===0 ? "2xl:w-[101%] xl:w-[100%] w-[100%]" : ""}
        ${!isEng &&isPet && !isFirstCol && index===1 ? "2xl:w-[87%] xl:w-[85%] w-[77%]" : ""}
        ${!isEng &&isPet && !isFirstCol && index===2 ? "2xl:w-[99%] xl:w-[100%] w-[100%]" : ""}

        ${!isEng && isPhotosession && isFirstCol && index===0 ? "2xl:w-[90%] xl:w-[90%] w-[97%]" : ""}
        ${!isEng && isPhotosession && isFirstCol && index===1 ? "2xl:w-[105%] xl:w-[110%] w-[97%]" : ""}
        ${!isEng && isPhotosession && isFirstCol && index===2 ? "2xl:w-[100%] xl:w-[96.7%] w-[97%]" : ""}

        ${!isEng &&isPhotosession && !isFirstCol && index===0 ? "2xl:w-[84%] xl:w-[81%] w-[97%]" : ""}
        ${!isEng &&isPhotosession && !isFirstCol && index===1 ? "2xl:w-[105%] xl:w-[110%] w-[97%]" : ""}
        ${!isEng &&isPhotosession && !isFirstCol && index===2 ? "2xl:w-[100%] xl:w-[100%] w-[99%]" : ""}
        ${!isEng &&isPhotosession && !isFirstCol && index===3 ? "2xl:w-[100%] xl:w-[95%] w-[97%]" : ""}

        ${!isEng && isNewlyweeds && isFirstCol && index===0 ? "2xl:w-[105%] xl:w-[105%] w-[100%]" : ""}
        ${!isEng &&isNewlyweeds && isFirstCol && index===1 ? "2xl:w-[110%] xl:w-[115%] w-[97%]" : ""}
        ${!isEng &&isNewlyweeds && isFirstCol && index===2 ? "2xl:w-[110%] xl:w-[110%] w-[97%]" : ""}
        ${!isEng &&isNewlyweeds && isFirstCol && index===3 ? "xl:w-auto w-[90%]" : ""}

        ${!isEng && isNewlyweeds && !isFirstCol && index===0 ? "2xl:w-auto xl:w-[90%] w-[97%]" : ""}
        ${!isEng && isNewlyweeds && !isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[90%] w-[97%]" : ""}
        ${!isEng && isNewlyweeds && !isFirstCol && index===2 ? "2xl:w-[105%] xl:w-[100%] w-[98  %]" : ""}
        ${!isEng &&isNewlyweeds && !isFirstCol && index===3 ? "2xl:w-[95%] xl:w-[95%] w-[97%]" : ""}

        ${!isEng &&isBirthday && isFirstCol && index===0 ? "2xl:w-[101%] xl:w-[98%] w-[100%]" : ""}
        ${!isEng &&isBirthday && isFirstCol && index===1 ? "2xl:w-[85%] xl:w-[82%] w-[90%]" : ""}

        ${!isEng && isBirthday && !isFirstCol && index===0 ? " xl:w-auto w-[90%]" : ""}
        ${!isEng && isBirthday && !isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[90%] w-[90%]" : ""}
        ${!isEng && isBirthday && !isFirstCol && index===2 ? "2xl:w-[95%] xl:w-[90%] w-[100%]" : ""}
        



        ${isEng && isMilitary && isFirstCol && index===0 ? "2xl:w-[110%] xl:w-[107%] w-[100%]" : ""}
        ${isEng && isMilitary && isFirstCol && index===1? "xl:w-auto w-[90%]" : ""}
        ${isEng && isMilitary && isFirstCol && index===2 ? "2xl:w-[100%] xl:w-[95%] w-[100%]" : ""}

        ${isEng &&isMilitary && !isFirstCol && index===0 ? "2xl:w-[100%] xl:w-[100%] w-[100%]" : ""}
        ${isEng &&isMilitary && !isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[95%] w-[100%]" : ""}

        ${isEng &&isBusiness && isFirstCol && index===0 ? "2xl:w-[97%] xl:w-[92.9%] w-[97%]" : ""}
        ${isEng &&isBusiness && isFirstCol && index===1 ? "2xl:w-[105%] xl:w-[110%] w-[95%]" : ""}
        ${isEng &&isBusiness && isFirstCol && index===2 ? "xl:w-auto  w-[95%]" : ""}

        ${isEng && isBusiness && !isFirstCol && index===0 ? "2xl:w-[100%] xl:w-[95%] w-[100%]" : ""}
        ${isEng && isBusiness && !isFirstCol && index===1 ? "2xl:w-[100%] xl:w-[100%] w-[97%]" : ""}
        ${isEng && isBusiness && !isFirstCol && index===2 ? "2xl:w-[95%] xl:w-[94%] w-[100%]" : ""}

        ${isEng&&isPet && isFirstCol && index===0 ? "2xl:w-[105%] xl:w-[100%] w-[97%]" : ""}
        ${isEng&&isPet && isFirstCol && index===1 ? "2xl:w-[85%] xl:w-[80%] w-[90%]" : ""}
        ${isEng&&isPet && isFirstCol && index===2 ? "2xl:w-[100%] xl:w-[85%] w-[95%]" : ""}
        ${isEng &&isPet && isFirstCol && index===3 ? "xl:w-auto w-[95%]" : ""}

        ${isEng &&isPet && !isFirstCol && index===0 ? "2xl:w-[90%] xl:w-[86%] w-[100%]" : ""}
        ${isEng &&isPet && !isFirstCol && index===1 ? "2xl:w-[87%] xl:w-[85%] w-[100%]" : ""}
        ${isEng &&isPet && !isFirstCol && index===2 ? "2xl:w-[90%] xl:w-[88%] w-[100%]" : ""}

        ${isEng && isPhotosession && isFirstCol && index===0 ? "2xl:w-[90%] xl:w-[90%] w-[97%]" : ""}
        ${isEng && isPhotosession && isFirstCol && index===1 ? "2xl:w-[105%] xl:w-[110%] w-[92%]" : ""}
        ${isEng && isPhotosession && isFirstCol && index===2 ? "2xl:w-[98%] xl:w-[95.5%] w-[97%]" : ""}

        ${isEng &&isPhotosession && !isFirstCol && index===0 ? "2xl:w-[80%] xl:w-[81%] w-[96%]" : ""}
        ${isEng &&isPhotosession && !isFirstCol && index===1 ? "2xl:w-[105%] xl:w-[110%] w-[100%]" : ""}
        ${isEng &&isPhotosession && !isFirstCol && index===2 ? "2xl:w-[90%] xl:w-[90%] w-[99%]" : ""}
        ${isEng &&isPhotosession && !isFirstCol && index===3 ? "2xl:w-[90%] xl:w-[88%] w-[99.5%]" : ""}

        ${isEng && isNewlyweeds && isFirstCol && index===0 ? "2xl:w-[105%] xl:w-[105%] w-[100%]" : ""}
        ${isEng &&isNewlyweeds && isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[94%] w-[97%]" : ""}
        ${isEng &&isNewlyweeds && isFirstCol && index===2 ? "2xl:w-[85%] xl:w-[83%] w-[97%]" : ""}
        ${isEng &&isNewlyweeds && isFirstCol && index===3 ? "2xl:w-[110%] xl:w-[110%] w-[95%]" : ""}

        ${isEng && isNewlyweeds && !isFirstCol && index===0 ? "2xl:w-auto xl:w-[100%] w-[97%]" : ""}
        ${isEng && isNewlyweeds && !isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[90%] w-[97%]" : ""}
        ${isEng && isNewlyweeds && !isFirstCol && index===2 ? "2xl:w-[105%] xl:w-[100%] w-[98%]" : ""}
        ${isEng &&isNewlyweeds && !isFirstCol && index===3 ? "2xl:w-[95%] xl:w-[92%] w-[97%]" : ""}

        ${isEng &&isBirthday && isFirstCol && index===0 ? "2xl:w-[101%] xl:w-[98%] w-[100%]" : ""}
        ${isEng &&isBirthday && isFirstCol && index===1 ? "2xl:w-[100%] xl:w-[100%] w-[95%]" : ""}

        ${isEng && isBirthday && !isFirstCol && index===0 ? " xl:w-auto w-[90%]" : ""}
        ${isEng && isBirthday && !isFirstCol && index===1 ? "2xl:w-[95%] xl:w-[90%] w-[95%]" : ""}
        ${isEng && isBirthday && !isFirstCol && index===2 ? "2xl:w-[95%] xl:w-[90%] w-[100%]" : ""}
`}>
        <img loading="lazy"
          src={list}
          alt={el}
          className="w-[17px] h-[17px] lg:w-[22px] lg:h-[22px]"
        />
        {t(el)}
      </li>)}
      
      
    </ul>
  </div>
  );
};

