import { useModalStore } from "../../store/useModalStore";

import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../InViewWrapper";
import { bedWithPet, coffeeRoom } from "../../store/exportsImg";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { parking } from "../../store/exportsIcons";
type MoreInfoToProps = {
  isShowAdditionalPlace: boolean;
};

export const MoreInfo = ({ isShowAdditionalPlace }: MoreInfoToProps) => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();
  const { amenities, availableService } = usePagesInfoStore();
  console.log(isShowAdditionalPlace);
  
  return (
    <div className="bg-[#A47762]  ">
      <div className=" container-fluid mx-auto max-w-[84.04%] ">
        <div
          className="grid  
          grid-cols-1 
          md:grid-cols-[35.65%_29.3%_33.73%]  
          lg:items-center lg:justify-center 
          border-x border-[#C7C7C7]"
        >
          <div
            className={`md:flex hidden flex-col ${isShowAdditionalPlace ? 'justify-center' : ''} items-center 
            py-6 md:py-0 lg:py-0 xl:py-0 2xl:ps-5  
             lg:col-span-1
            2xl:h-[825px]`}
          >
            <div
              className={`${isShowAdditionalPlace ? '' : 'mt-20'}  
            py-5
              `}
            >
              <div
                className={`${
                  isShowAdditionalPlace ? "flex flex-col" : "hidden"
                } px-5 md:px-0`}
              >     <h1 
              className={`
              uppercase text-white font-cofo px-5
              text-[32px]  lg:text-[40px]  tracking-[-7%] xl:text-[44px] leading-[104%]
              mb-6 sm:mb-8 md:mb-10 lg:mb-[51px] `}
            >
              {!isShowAdditionalPlace ? t("room.moreInfo.title2") :t("room.moreInfo.title")} 
            </h1>
                <InViewWrapper>
                  <img
                    src={coffeeRoom}
                    alt="coffee"
                    className="hidden md:block 
                    w-full h-[300px] md:h-[350px]
                   xl:w-full pe-2
                     lg:w-full lg:h-[411px] lg:pt-[10px]
                  2xl:w-[497px] 2xl:h-[510px] 
                    
                    object-cover"
                  />
                </InViewWrapper>
              </div>

              <div className={!isShowAdditionalPlace ? "block" : "hidden"}>
                <h1
                  className="uppercase text-white font-cofo
                  text-[32px]  lg:text-[40px] xl:text-[48px] 
                  leading-[104%] 
                  mb-6 sm:mb-8 md:mb-10 lg:mb-[51px]"
                >
                  {!isShowAdditionalPlace ? t('room.moreInfo.title2') : ""}
                </h1>

                <ul>
                  {amenities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#E1E1E1] uppercase font-cofo
                        space-x-3 sm:space-x-4"
                    >
                      <InViewWrapper>
                        <img
                          src={item.src}
                          alt="amenities"
                          className="w-[20px] h-[20px] 
                          sm:w-[24px] sm:h-[24px] 
                          md:w-[28px] md:h-[28px] 
                          lg:w-[32px] lg:h-[32px] 
                          xl:w-[36px] xl:h-[36px]"
                        />
                      </InViewWrapper>
                      <p
                        className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                        leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[85%]"
                      >
                        {t(item.text)}
                      </p>
                    </li>
                  ))}
                </ul>
                <button
                onClick={() => onOpenModal("order")}
                className={` ${
                !isShowAdditionalPlace ? "hidden md:block" : "block"
                }
                  uppercase font-semibold 
                  bg-[#EDE8E5] text-[#A47762]
                  text-[12px]  md:text-[12px] lg:text-[14px]
                  px-4 sm:px-5 md:px-6 lg:px-[22.5px]
                  py-2 sm:py-2.5 md:py-3 lg:py-[13px]
                  rounded-full
                  
                  mt-10
                  hover:bg-white transition-colors`}
              >
                {t("buttons.bookRoom")}
              </button>
              </div>
            </div>
          </div>
          <div
            className="lg:border-x border-[#C7C7C7] 
            flex lg:items-start justify-center 
            2xl:h-[825px] h-full "
          >
            <div
              className={` sm:w-[400px] md:w-[300px] lg:w-full 
              px-4 sm:px-6 lg:px-6 xl:ps-[36px] md:py-10  h-full ${isShowAdditionalPlace ? "md:mt-[100px] lg:mt-[160px] xl:mt-[150px] 2xl:mt-[200px]" : "md:mt-[50px] lg:mt-[80px] xl:mt-[60px] 2xl:mt-[50px]" }`}
            >
              <h1
                className={`
                uppercase text-white font-cofo
                text-[32px]  lg:text-[40px]  tracking-[-7%] xl:text-[44px] leading-[104%]
                mb-6 sm:mb-8 md:mb-10 lg:mb-[51px]${isShowAdditionalPlace ?' md:hidden' :''}`}
              >
                {!isShowAdditionalPlace ? t("room.moreInfo.title2") :t("room.moreInfo.title")} 
              </h1>

              <ul>
                {availableService.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#E1E1E1] uppercase font-cofo
                      space-x-3 sm:space-x-4"
                  >
                    <InViewWrapper>
                      <img
                        src={item.src}
                        alt="service"
                        className="w-[20px] h-[20px] 
                        sm:w-[24px] sm:h-[24px] 
                        md:w-[28px] md:h-[28px] 
                        lg:w-[32px] lg:h-[32px] 
                        xl:w-[36px] xl:h-[36px]"
                      />
                    </InViewWrapper>
                    <p
                      className="text-[12px]  md:text-[14px] lg:text-[18px] xl:text-[16px] 2xl:text-[20px]
                      leading-[104%]"
                    >
                      {t(item.text)}
                    </p>
                  </li>
                ))}
              </ul>
             
              <div
                className={`xl:mt-25 2xl:mt-40 lg:mt-10
                x text-[#E1E1E1] uppercase font-cofo
                space-x-3 sm:space-x-4 h ${isShowAdditionalPlace ? 'hidden md:flex' : 'hidden'}
                `}
              >
                  <InViewWrapper>
                    <img
                      src={parking}
                      alt="parking icon"
                      className="w-[20px] h-[20px] 
                      sm:w-[24px] sm:h-[24px] 
                      md:w-[28px] md:h-[28px]  
                      lg:w-[32px] lg:h-[32px] 
                      xl:w-[36px] xl:h-[36px]"
                    />
                    <p
                      className={`text-[12px] md:text-[14px] lg:text-[18px] xl:text-[16px] 2xl:text-[20px] mt-auto
                    leading-[104%] `}
                    >
                      {t("room.moreInfo.parking")}
                    </p>
                  </InViewWrapper>
              </div>
              <button
                onClick={() => onOpenModal("order")}
                className={` ${
                !isShowAdditionalPlace ? "hidden" : "block"
                }
                  uppercase font-semibold 
                  bg-[#EDE8E5] text-[#A47762]
                  text-[12px]  md:text-[12px] lg:text-[14px]
                  px-4 sm:px-5 md:px-6 lg:px-[22.5px]
                  py-2 sm:py-2.5 md:py-3 lg:py-[13px]
                  rounded-full
                  
                  mt-10
                  hover:bg-white transition-colors`}
              >
                {t("buttons.bookRoom")}
              </button>
            </div>
          </div>

          <div
            className="flex items-center justify-center 
            py-6 md:py-8  lg:pt-0  
            2xl:h-[825px]"
          >
            <div
              className={`w-[90%] sm:w-[400px] md:w-[400px] lg:w-full  
               ${isShowAdditionalPlace ? 'lg:mt-[169px] xl:mt-[190px] md:mt-[100px]' : 'lg:mt-[169px] xl:mt-0 md:mt-[100px]'}   `}
            >
              <InViewWrapper>
                <img
                  src={isShowAdditionalPlace ? bedWithPet : coffeeRoom}
                  alt="room image"
                  className={`w-full 
                  h-[230px] sm:h-[300px] md:h-[350px]
                  lg:ps-5 
                  ${isShowAdditionalPlace ? '' : 'hidden'}
                  lg:w-[330px] lg:h-[411px] lg:pt-[10px]
                  2xl:w-[497px] 2xl:h-[510px] 
                  object-cover object-[20%_80%]`}
                />
                <img
                  src={isShowAdditionalPlace ? coffeeRoom  :bedWithPet }
                  alt={`room image ${isShowAdditionalPlace ? 'hidden' : ''}`}
                  className={`w-full 
                  h-[230px] sm:h-[300px] md:h-[350px]
                  lg:ps-2  
                  ${isShowAdditionalPlace ? 'hidden' : ''}
                  
                  lg:w-[330px] lg:h-[411px] xl:w-full lg:pt-[10px]
                  2xl:w-[497px] 2xl:h-[510px] 
                  object-cover object-[20%_80%]`}
                />
              </InViewWrapper>
              <div className="flex items-center justify-center uppercase text-[#E1E1E1] pt-[10px] md:hidden mt-auto" >

              <InViewWrapper>
                  <img
                    src={parking}
                    alt="parking icon"
                    className="w-[20px] h-[20px] 
                    sm:w-[24px] sm:h-[24px]  
                    md:w-[28px] md:h-[28px] 
                    lg:w-[32px] lg:h-[32px] 
                    xl:w-[36px] xl:h-[36px]"
                    />
                  <p
                    className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] mt-auto
                    leading-[104%]"
                  >
                    {t("room.moreInfo.parking")}
                  </p>
                </InViewWrapper>
                    </div>
              <button
                onClick={() => onOpenModal("order")}
                className={`mt-6 sm:mt-8 md:mt-10 lg:mt-[100px] ${
                  isShowAdditionalPlace ? " hidden" : "flex md:hidden"
                }
                  uppercase font-semibold 
                  bg-[#EDE8E5]    text-[#A47762]
                  text-[12px] sm:text-[13px] md:text-[14px]
                  px-4 sm:px-5 md:px-6 lg:px-[22.5px]
                  py-2 sm:py-2.5 md:py-3 lg:py-[13px]
                  rounded-full
                  hover:bg-white transition-colors`}
              >
                {t("buttons.bookRoom")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
