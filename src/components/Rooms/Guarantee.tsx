import { useTranslation } from "react-i18next";
import { eurohotel } from "../../store/exportsImg";
import { useModalStore } from "../../store/useModalStore";

export const Guarantee = () => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center md:items-start relative">
      <div className="h-[1600px] md:border-s  -z-1 w-full mx-auto border-[#C7C7C7] border-t lg:border-t-0 absolute max-w-[89.58%] self-center"></div>

      <div className="md:max-w-[94.79%] max-w-[89.6%] md:border-e border-x md:border-x-0 border-[#C7C7C7] lg:w-full">
        <div className="grid   justify-center md:justify-start  grid-cols-[1fr]   border-[#C7C7C7] ">
          <div className="  lg:border-x-0 border-[#C7C7C7] ">
            <div className="flex flex-col xl:items-end md:items-center  2xl:pt-[81px] xl:pt-[60px] lg:pt-[50px] pt-[49px] 2xl:pb-[48px] xl:pb-[40px] pb-[16px] px-[14px] md:px-0">
              <h1 className="font-cofo text-[32px] 2xl:block uppercase sm:text-[42px] 2xl:text-[100px] xl:text-[70px] leading-[104%] tracking-[-0.07em] 2xl:leading-[81px] 2xl:tracking-[-0.04em] xl:w-[900px] 2xl:w-[1350px] ">
                <span className="hidden md:block">
                  {t("rooms.guarantee.heading.0")}
                </span>
                <span className="block md:hidden whitespace-nowrap">
                  {t("rooms.guarantee.headingMobile.0")}FSDFS
                </span>
              </h1>

              <h1 className="font-cofo text-[32px]  2xl:block sm:text-[42px] uppercase 2xl:text-[100px] xl:text-[70px] leading-[104%] tracking-[-0.07em] 2xl:leading-[81px] 2xl:tracking-[-0.04em] 2xl:text-center 2xl:w-[1150px] xl:w-[1100px] 2xl:self-start  ">
                <span className="hidden md:block">
                  {t("rooms.guarantee.heading.1")}
                </span>
                <span className="block md:hidden">
                  {t("rooms.guarantee.headingMobile.1")}
                </span>
              </h1>

              <h1 className="font-cofo text-[32px] block md:hidden sm:text-[42px] uppercase 2xl:text-[100px] leading-[104%] tracking-[-0.07em]2xl:leading-[81px] 2xl:tracking-[-0.04em] 2xl:text-center 2xl:w-[1000px]  self-start md:self-center">
                {t("rooms.guarantee.headingMobile.2")}
              </h1>
            </div>
          </div>
        </div>

        <div className="relative grid md:grid-cols-[55.88%_44.12%]   grid-cols-[1fr] 2xl:justify-normal xl:justify-center justify-center w-full ">
          <div className="  border-[#C7C7C7] 2xl:border-0">
            <img
              src={eurohotel}
              alt="eurohotel"
              className="w-full h-full object-cover px-[14px] md:px-0"
            />
          </div>
          <div className="px-[14px] 2xl:border-x-0 border-[#C7C7C7] 2xl:mb-[96px] xl:mb-[70px] mb-[40px] flex flex-col justify-center items-center h-full">
            <div className="flex flex-col 2xl:items-start xl:items-start items-start  md:w-[80%] h-full ">
              <h1 className="uppercase text-[#8C331B] font-cofo-medium 2xl:text-[32px] xl:text-[24px] mt-[45px] md:mt-[0px] lg:text-[22px] text-[16px] 2xl:leading-[35px] xl:leading-[28px] leading-[17px]  w-full  order-2 md:order-1">
                {t("rooms.guarantee.imgHeading")}
              </h1>

              <ol className="lg:mt-[29px] uppercase xl:space-y-5 lg:space-y-3 space-y-3 2xl:text-[20px] xl:text-[16px] text-[12px] lg:text-[14px] 2xl:leading-[24px] xl:leading-[20px] leading-[14px] 2xl:w-[608px] xl:w-[500px] w-full  2xl:p-0  pt-[24px] order-3 md:order-2">
                <li className="flex">
                  <p>1.&nbsp; </p>
                  {t("rooms.guarantee.list.0")}
                </li>
                <li className="flex">
                  <p>2.&nbsp; </p>
                  {t("rooms.guarantee.list.1")}
                </li>
                <li className="flex">
                  <p>3.&nbsp; </p>
                  {t("rooms.guarantee.list.2")}
                </li>
              </ol>

              <button
                onClick={() => onOpenModal("order")}
                className="uppercase bg-[#8C331B] text-[#FFFFFF] lg:mt-[32px]  2xl:w-fit self-start 2xl:px-5 xl:px-4 px-[23px] 2xl:py-3 xl:py-2.5 py-[11px] rounded-3xl 
                font-cofo-medium 2xl:text-base xl:text-sm text-[12px]  mt-[24px]  hover:cursor-pointer order-3  "
              >
                {t("buttons.bookRoomArr.0")}
                <span className="2xl:inline hidden font-cofo-medium">
                  {t("buttons.bookRoomArr.1")}
                </span>
              </button>

              <div className="order-1 md:order-4  md:mt-auto mt-[15px]  md:mb-[24px]">
                <h1 className="flex uppercase font-semibold 2xl:text-[100px] xl:text-[70px] text-[32px] 2xl:leading-[100px] lg:text-[60px] leading-[104%] 2xl:tracking-[-0.04em] tracking-[-0.07] 2xl:w-[681px] xl:w-[500px]">
                  {t("rooms.guarantee.onOurSite")}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-[1718px] xl:grid-cols-[1200px] lg:grid-cols-[900px] grid-cols-[332px]  justify-center items-center 2xl:h-[196px] xl:h-[120px] h-[64px]"></div>
      </div>
    </div>
  );
};
