import { FaWhatsapp } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { navigate } from "../../store/exportsIcons";
import { Link } from "react-router-dom";
import { map } from "../../Constants/map";
import { social } from "../../Constants/Social";

export const AddressWithSchedule = ({openPdf, path}:{openPdf: (path: string) => void, path: string}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 flex flex-col lg:h-[473px] w-full lg:w-[24.2%] h-full lg:border-e [border-image:linear-gradient(180deg,#242425_0%,#6D7984_97.5%)_1] order-3 lg:order-2 lg:m-0 pt-[17px]  lg:px-3 2xl:px-0 lg:items-center">
      <div className="flex flex-col h-full rrelatives">
        <div className="mb-0 w-[332px]">
          <h4 className="text-[12px] uppercase 2xl:text-[18px] xl:text-[16px] lg:text-[14px] font-cofo-medium ">
            {t("footer.address")}
          </h4>
          <p className="flex gap-x-[7px] font-cofo-medium items-center 2xl:text-[18px] xl:text-[16px] gap-1 lg:text-[12px] text-[12px] font-cofo uppercase underline    lg:pt-[15px] underline-offset-4 lg:leading-[22.6px] lg:ps-[0px] pt-3 decoration-[6.5%]">
            <img
              src={navigate}
              className="filter-invert-white"
              alt="location"
            />
            <span>{t("footer.addressDesc")}</span>
          </p>
          <Link
            target="_blank"
            to={map.address}
            className="inline-flex  uppercase bg-white text-[#252526] px-[18px] py-[12.5px] lg:px-[20.5px] lg:py-[11.5px] lg:text-[14px] text-[12px] rounded-full
              font-cofo-medium  mt-5  lg:mt-[35px] lg:w-[223px] justify-center  w-[178px]  hover:cursor-pointer hover:bg-[#252526] hover:text-white lg:border border-[#252526] box-border"
          >
            {t("buttons.route")}
          </Link>
        </div>
        <div className="mt-auto">
          <h4 className=" text-[12px] font-cofo-medium uppercase  2xl:text-[18px] xl:text-[16px] lg:text-[14px] m-0 lg:mt-auto mt-[44px] font-cofo ">
            {t("footer.reception")}
          </h4>
          <p className="2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] font-cofo uppercase text-[#999999] lg:mb-[20px] mb-[17px] lg:mt-[6px] ">
            {t("footer.receptionTime")}
          </p>

          <ul className="space-y-[7px]">
            <li className="2xl:text-[18px] xl:text-[16px] lg:text-[14px] leading-[100%]  text-[12px] font-cofo lg:no-underline underline ">
              +38 (073) 242-40-02
            </li>
            <li className="2xl:text-[18px] xl:text-[16px] lg:text-[14px]   font-cofo text-[12px] lg:no-underline underline ">
              +38 (093) 242-40-02
            </li>
          </ul>
          <div className="flex flex-col space-x-3 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] lg:mt-[15px]  mt-[20px]  ">
            <p className="2xl:text-[18px] xl:text-[16px] lg:text-[12px] text-[12px] font-cofo uppercase decoration-[5%] underline  lg:leading-[22px] font-cofo-medium">
              reception@eurohotel.lviv.ua
            </p>
            <div className="lg:mt-[32px] mt-[19px] flex space-x-4">
              <Link to={social.hotel.telegram} target="_blank" className="bg-white rounded-full hover:cursor-pointer">
                <RiTelegram2Fill
                  className="lg:w-[37px] lg:h-[37px] w-[28px] h-[28px] p-1"
                  color="#45525F"
                />
              </Link>

              <Link to={social.hotel.whatsapp} target="_blank" className="bg-white rounded-full hover:cursor-pointer">
                <FaWhatsapp
                  color="#45525E"
                  className="lg:w-[37px] lg:h-[37px] w-[28px] h-[28px]  p-1 "
                />
              </Link>
              <Link to={social.hotel.whatsapp} target="_blank" className=" rounded-full text-[#495560] bg-white p-1 px-1.5 flex text-center items-center lg:w-[37px] lg:h-[37px] w-[28px] h-[28px]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5759 0.61712C14.2199 -0.205707 9.69633 -0.205707 5.34031 0.61712C3.41361 1.02853 0.984293 3.33245 0.565445 5.14267C-0.188482 8.68082 -0.188482 12.3013 0.565445 15.8394C1.06806 17.6496 3.49738 19.9535 5.34031 20.365C5.42408 20.365 5.50785 20.4472 5.50785 20.5295V25.7133C5.50785 25.9602 5.84293 26.1247 6.01047 25.8779L8.52356 23.3271C8.52356 23.3271 10.534 21.2701 10.8691 20.9409C10.8691 20.9409 10.9529 20.8587 11.0367 20.8587C13.5497 20.9409 16.1466 20.6941 18.6597 20.2827C20.5864 19.8713 23.0157 17.5673 23.4346 15.7571C24.1885 12.219 24.1885 8.59854 23.4346 5.06038C22.9319 3.33245 20.5026 1.02853 18.5759 0.61712ZM18.6597 16.0863C18.2408 16.9091 17.7382 17.5673 16.9005 17.9788C16.6492 18.061 16.3979 18.1433 16.1466 18.2256C15.8115 18.1433 15.5602 18.061 15.3089 17.9788C12.6283 16.9091 10.1152 15.428 8.10471 13.2886C7.01571 12.0544 6.09424 10.6556 5.34031 9.17451C5.00523 8.43397 4.67016 7.77571 4.41885 7.03517C4.16754 6.3769 4.58638 5.71864 5.00523 5.22495C5.42408 4.73125 5.9267 4.40212 6.51309 4.15527C6.93194 3.90843 7.35079 4.07299 7.68587 4.40212C8.35602 5.22495 9.02618 6.04777 9.5288 6.95288C9.86387 7.52886 9.7801 8.18712 9.19372 8.59854C9.02618 8.68082 8.94241 8.7631 8.77487 8.92767C8.6911 9.00995 8.52356 9.09223 8.43979 9.2568C8.27225 9.50364 8.27225 9.75049 8.35602 9.99734C9.02618 11.8898 10.2827 13.3709 12.2094 14.1938C12.5445 14.3583 12.7958 14.4406 13.2147 14.4406C13.801 14.3583 14.0524 13.7001 14.4712 13.3709C14.8901 13.0418 15.3927 13.0418 15.8953 13.2886C16.3141 13.5355 16.733 13.8646 17.2356 14.1938C17.6544 14.5229 18.0733 14.7697 18.4921 15.0989C18.7435 15.2634 18.8272 15.6748 18.6597 16.0863ZM15.1414 9.91506C14.9738 9.91506 15.0576 9.91506 15.1414 9.91506C14.8063 9.91506 14.7225 9.75049 14.6387 9.50365C14.6387 9.33908 14.6387 9.09223 14.555 8.92767C14.4712 8.59854 14.3037 8.26941 13.9686 8.02256C13.8011 7.94028 13.6335 7.85799 13.466 7.77571C13.2147 7.69343 13.0471 7.69343 12.7958 7.69343C12.5445 7.61115 12.4607 7.44658 12.4607 7.19973C12.4607 7.03517 12.712 6.8706 12.8796 6.8706C14.2199 6.95288 15.2251 7.69343 15.3927 9.2568C15.3927 9.33908 15.3927 9.50364 15.3927 9.58593C15.3927 9.75049 15.3089 9.91506 15.1414 9.91506ZM14.3037 6.29462C13.8848 6.13006 13.466 5.96549 12.9634 5.88321C12.7958 5.88321 12.5445 5.80093 12.377 5.80093C12.1257 5.80093 11.9581 5.63636 12.0419 5.38951C12.0419 5.14266 12.2094 4.9781 12.4607 5.06038C13.2984 5.14266 14.0524 5.30723 14.8063 5.63636C16.3141 6.37691 17.1518 7.61114 17.4031 9.2568C17.4031 9.33908 17.4031 9.42136 17.4031 9.50365C17.4031 9.66821 17.4031 9.83277 17.4031 10.0796C17.4031 10.1619 17.4031 10.2442 17.4031 10.3265C17.3194 10.6556 16.733 10.7379 16.6492 10.3265C16.6492 10.2442 16.5654 10.0796 16.5654 9.99734C16.5654 9.2568 16.3979 8.51625 16.0628 7.85799C15.5602 7.11745 14.9738 6.62375 14.3037 6.29462ZM18.8272 11.2316C18.5759 11.2316 18.4084 10.9847 18.4084 10.7379C18.4084 10.2442 18.3246 9.75049 18.2408 9.2568C17.9058 6.62375 15.7278 4.4844 13.1309 4.07299C12.712 3.99071 12.2932 3.99071 11.9581 3.90843C11.7068 3.90843 11.3717 3.90843 11.288 3.5793C11.2042 3.33245 11.4555 3.0856 11.7068 3.0856C11.7906 3.0856 11.8743 3.0856 11.8743 3.0856C12.0419 3.0856 15.3089 3.16788 11.8743 3.0856C15.3927 3.16788 18.3246 5.4718 18.911 8.92767C18.9948 9.50365 19.0785 10.0796 19.0785 10.7379C19.2461 10.9847 19.0785 11.2316 18.8272 11.2316Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <p
          onClick={()=>openPdf(path)}
          className=" absolute uppercase underline lg:leading-[20px] underline-offset-[18%] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] lg:tracking-[0.06em] 
         -bottom-34 lg:block hidden"
        >
          {t("footer.publicOffer")}
        </p>
      </div>
    </div>
  );
};
