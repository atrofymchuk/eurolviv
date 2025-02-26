type ReviewsToProps = {
  isTerrasePage?:boolean
}

export const Reviews = ({isTerrasePage = false}: ReviewsToProps) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className={`grid  ${isTerrasePage ? 'lg:grid-cols-[1745px]':'lg:grid-cols-[1787px]'} grid-cols-[332px] border-[#B3B3B3AD] border-x border-b lg:border-b-0`}>
        <div className="lg:ps-[78px] lg:h-[490px] h-[337px] flex flex-col justify-center lg:text-start text-center  ">
          <span className="font-blessed leading-[70%] text-[16px] xl:text-[36px] lg:leading-[25.2px] pt-[6px] lg:pt-0 ml-2">
            Про {isTerrasePage ? 'терасу' : 'ресторан'}
          </span>
          <h1 className="uppercase lg:w-[892px]  text-[#242425] lg:text-[100px] lg:leading-[87px] leading-[94%]  text-[32px] tracking-[-7%] pb-[24px] lg:pb-0 ">
            Відгуки наших гостей
          </h1>
          <div className="flex items-center lg:flex-row flex-col  lg:space-x-[138px] lg:space-y-0 space-y-[24px] lg:mt-[37px]">
            <p className="text-[#242425] lg:text-[16px] text-[12px] uppercase lg:w-[323px] w-[265px] ">
              Історія нашого ресторану пишеться вашими враженнями. Дякуємо, що
              ділитеся ними.
            </p>

            <button className=" hover:cursor-pointer uppercase bg-[#8C331B] text-[#FFFFFF] hover:text-[#8C331B] border border-[#8C331B] hover:bg-[#FFFFFF] lg:px-[20px] lg:py-[13px] px-[17px] py-[12.5px] rounded-full h-fit lg:text-[16px] text-[12px] ">
              забронювати стіл
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
