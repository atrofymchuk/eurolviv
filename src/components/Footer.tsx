import backgroundImage from "../assets/footer.png";
import mappin from "../assets/icons/About/navigation.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";

import instagram from "../assets/icons/instagram-f-svgrepo-com.svg";
import { FaFacebook } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import rating from "../assets/icons/rating.svg";

export const Footer = () => {
  return (
    <footer className="relative text-white py-[67px] px-6 xl:px-20 overflow-hidden xl:h-[800px] h-[1600px] z-20">
      <div className="absolute inset-0  bg-gradient-to-b from-[rgba(36, 36, 37, 1)] via-[rgba(22,22,23,0.25)] to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[#25252659] z-10"></div>

      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full  z-0 "
      />

      <div className="relative z-10 flex flex-col xl:flex-row xl:justify-between max-w-[1720px] xl:mx-auto  ">
        <div className="xl:order-1 order-2">
          <div className="">
            <div className="flex flex-col xl:h-[473px] h-fit justify-between xl:px-10 xl:border-e border-[rgba(68, 68, 68, 1)]">
              <div className="grid grid-cols-2 xl:grid-cols-1 gap-6 w-full">
                <div className="space-y-3 xl:w-fit w-[180px]">
                  <ul className="space-y-4 xl:text-[18px] text-[12px] font-cofo uppercase xl:leading-[18px] leading-[15px]  underline xl:no-underline tracking-[0.09em]">
                    <li>ГОЛОВНА СТОРІНКА</li>
                    <li>Номери</li>
                    <li>Конференц-сервіс</li>
                    <li>Ресторан Ruff</li>
                    <li>Тераса Ruff</li>
                    <li>Спеціальні пропозиції</li>
                  </ul>
                </div>

                <div className="flex flex-col xl:mt-auto w-fit">
                  <h4 className="xl:mt-44 text-lg font-semibold xl:text-[18px] font-cofo uppercase  text-[12px]">
                    Ми в соціальних мережах
                  </h4>
                  <div className="flex space-x-4 text-xl xl:mt-[25px] mt-4">
                    <span className="rounded-full hover:cursor-pointer">
                      <FaFacebook className="w-[37px] h-[37px]" />
                    </span>
                    <span className="rounded-full hover:cursor-pointer">
                      <img src={instagram} alt="instagram" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="uppercase underline xl:leading-[20px] underline-offset-[18%] text-[16px] xl:tracking-[0.06em] xl:mt-30 xl:block hidden">
            політика конфіденційності
          </p>
        </div>

        <div className="space-y-4 flex flex-col xl:h-[473px] h-fit xl:border-e border-[rgba(68, 68, 68, 1)] pe-10 order-3 xl:order-2 xl:m-0 mt-8">
          <div className="">
            <h4 className="text-[12px] leading-[15px] font-semibold xl:text-[18px]">
              АДРЕСА
            </h4>
            <p className="flex items-center xl:text-[18px] font-cofo uppercase underline  xl:pt-2 underline-offset-[18%] xl:leading-[22.6px] xl:ps-[4px] pt-3 decoration-[6.5%]">
              <img
                src={mappin}
                className="filter-invert-white  "
                alt="location"
              />
              Львів, вул. Тершаковців, 6А
            </p>
            <a
              target="_blank"
              href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
              className="inline-flex w-fit uppercase bg-white text-[#252526] px-[18px] py-[12.5px] xl:px-[22px] xl:py-[13px] xl:text-[16px] text-[12px] rounded-full font-cofo font-semibold mb-6 mt-5 xl:mb-[44px] xl:mt-[43px]    hover:cursor-pointer hover:bg-[#252526] hover:text-white xl:border border-[#252526] box-border"
            >
              Прокласти маршрут
            </a>
          </div>
          <h4 className="text-[12px] font-semibold xl:text-[18px] m-0 font-cofo ">
            РЕЦЕПЦІЯ
          </h4>
          <p className="xl:text-[18px] text-[12px] font-cofo uppercase text-[#999999] xl:mb-[20px] xl:mt-[7px] xl:leading-[22px]">
            Цілодобово
          </p>
          <p className="xl:text-[18px] mb-[7px] text-[12px] font-cofo xl:no-underline underline leading-[15px] xl:leading-[22px]">
            +38 (073) 242-40-02
          </p>
          <p className="xl:text-[18px] mb-[7px] font-cofo text-[12px] xl:no-underline underline leading-[15px] xl:leading-[22px]">
            +38 (093) 242-40-02
          </p>

          <div className="flex flex-col space-x-3 xl:text-xl text-[12px]  xl:mt-[55px] mt-[20px]  ">
            <p className="xl:text-[18px] text-[12px] font-cofo uppercase decoration-[5%] underline font-semibold xl:leading-[22px]">
              reception@eurohotel.lviv.ua
            </p>
            <div className="xl:mt-[29px] mt-[25px] flex space-x-4">
              <span className="bg-white rounded-full ">
                <RiTelegram2Fill
                  className="w-[37px] h-[37px] p-1"
                  color="#45525F"
                />
              </span>

              <span className="bg-white rounded-full ">
                <FaWhatsapp
                  color="#45525E"
                  className="w-[37px] h-[37px]  p-1 "
                />
              </span>
              <span className=" rounded-full text-[#495560] bg-white p-1 px-1.5 flex text-center items-center">
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
              </span>
            </div>
          </div>
          <p className="uppercase underline xl:leading-[20px] underline-offset-[18%] text-[16px] xl:tracking-[0.06em] mt-25 xl:block hidden">
            публічна оферта
          </p>

          <div className="xl:visible hidden">
            <img src={rating} alt="rating" className="xl:mt-8.5" />
            <p className="mt-4 xl:text-[18px] xl:mb-2 font-cofo uppercase ">
              Booking.com
            </p>
            <p className="mt-4 xl:text-[18px] text-[#999999] font-cofo uppercase">
              Traveller Review Awards 2024
            </p>
            <div className="flex space-x-4">
              <img src={visa} alt="Visa" className="h-6" />
              <img src={mastercard} alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>

        <div className="space-y-3  flex flex-col xl:h-[473px] h-[200px] xl:border-e border-[rgba(68, 68, 68, 1)] pe-10 order-4 xl:order-3">
          <h4 className="font-cofo font-semibold xl:text-[18px] font-cofo mb-0 uppercase xl:w-[255px] w-[160px] text-[12px] ">
            Відділ бронювання та конференц-сервісу
          </h4>

          <p className="uppercase text-[#999999] text-cofo xl:text-[18px] mt-2 mb-8">
            будні з 9:00 до 18:00
          </p>
          <ul className="space-y-4 xl:text-[18px] font-cofo uppercase leading-[18px] ">
            <li>+38 (032) 242-31-60</li>
            <li>+38 (093) 242-31-60</li>
            <li>+38 (093) 348-31-12</li>
          </ul>
          <p className="xl:text-[18px] text-[12px]  leading-[15px] mt-[21px] mb-[42px] xl:m-0 font-cofo uppercase decoration-[5%] underline font-semibold xl:leading-[22px]">
            info@eurohotel.lviv.ua
          </p>
          <p className="uppercase font-cofo xl:pt-[37px] xl:text-[18px] font-semibold ">
            ресторан / тераса
          </p>

          <ul className="xl:space-y-4 space-y-2  xl:text-[18px] font-cofo uppercase xl:leading-[18px]  leading-[15px] ">
            <li>+38 (073) 242-40-02</li>
            <li>+38 (093) 348-31-14</li>
          </ul>
          <div className="xl:mt-auto mt-0 ">
            <p className="xl:text-[18px] font-cofo uppercase decoration-[5%] underline font-semibold xl:leading-[22px] leading-[15px] mt-[15px]">
              reception@eurohotel.lviv.ua
            </p>
            <div className="flex space-x-4 text-xl  xl:mt-[17px] mt-6  ">
              <span
                className={`   rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 `}
              >
                <FaInstagram color="white" className="w-[26px] h-[26px]" />
              </span>
              <span
                className={`   rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 `}
              >
                <RiTelegram2Fill color="white" className="w-[26px] h-[26px]" />
              </span>
              <span
                className={`   rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 `}
              >
                <FaWhatsapp color="white" className="w-[26px] h-[26px]" />
              </span>
              <span
                className={`   rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 flex text-center items-center`}
              >
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
              </span>
            </div>
          </div>
          <div className="xl:hidden block mt-[61px]">
  <div className="flex items-center">
    <img
      src={rating}
      alt="rating"
      width={42}
      height={42}
      className="xl:mt-8.5"
    />
    <div className="flex-col ms-2">
      <p className="xl:text-[18px] text-[12px] xl:mb-2 font-cofo uppercase">
        Booking.com
      </p>
      <p className="xl:text-[18px] text-[#999999] text-[12px] font-cofo uppercase">
        Traveller Review Awards 2024
      </p>
    </div>
  </div>
  
  <div className="flex mt-6 space-x-3">
    <img src={visa} alt="Visa" className="h-6" />
    <img src={mastercard} alt="Mastercard" className="h-6" />
  </div>

  <div className="flex justify-between  space-x-10 w-full whitespace-nowrap mt-22">
    <p className="uppercase underline leading-[15px] underline-offset-2 text-[12px] w-auto">
      політика конфіденційності
    </p>
    <p className="uppercase underline leading-[15px] underline-offset-2 text-[12px] w-auto">
      публічна оферта
    </p>
  </div>
</div>

        </div>

        <div className="space-y-4 order-1 xl:order-4">
          <h4 className="text-lg font-semibold xl:text-[24px] text-[20px]  font-cofo tracking-[-0.05em] xl:w-[320px] w-fit  xl:text-start text-center">
            ДІЗНАВАЙТЕСЬ ПРО НАЙВИГІДНІШІ ПРОПОЗИЦІЇ ПЕРШИМИ
          </h4>
          <input
            type="email"
            placeholder="Введіть свій email"
            className="bg-[#B5B5B52B] xl:py-[13px] xl:ps-[21px] xl:w-[415px] w-[335px] py-2.25 px-3 mb-2.5 rounded-full font-cofo"
          />
          <button className="bg-[#A47762] py-2 px-6 rounded-full xl:text-[18px] block xl:w-[415px] w-[335px] font-semibold  font-cofo hover:cursor-pointer">
            НАДІСЛАТИ
          </button>

          <div className="xl:block hidden ">
            <img src={rating} alt="rating" className="xl:mt-8.5 " />
            <p className="mt-4 xl:text-[18px] xl:mb-2 font-cofo uppercase ">
              Booking.com
            </p>
            <p className="mt-4 xl:text-[18px] text-[#999999] font-cofo uppercase">
              Traveller Review Awards 2024
            </p>

            <div className="flex space-x-4 mt-10">
              <img src={visa} alt="Visa" className="h-6" />
              <img src={mastercard} alt="Mastercard" className="h-6" />
            </div>
            <div className="flex"></div>
          </div>
        </div>
      </div>

      <div className="absolute xl:block hidden  bottom-[-30%] left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
        <h1
          className="text-[339px]  text-[#6F6D6D] font-semibold tracking-[-0.03em] "
          style={{ mixBlendMode: "difference" }}
        >
          EUROHOTEL
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
