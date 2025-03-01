export const ConferenceMenu = () => {
  return (
    <div className="relative w-full flex flex-col ">
   
   <div className="absolute h-[400px] z-[-1] grid w-full lg:grid-cols-[21%_42%_37%] grid-cols-1  ">
  <div className=" border-[#C7C7C7] border-x lg:border-x-0 lg:w-full w-[calc(100%-15%)] mx-auto lg:mx-0"></div>
  <div className="lg:border-x hidden lg:flex border-[#C7C7C7] lg:w-full w-[calc(100%-7.5%)]"></div>
  <div className="hidden lg:flex border-[#C7C7C7] lg:w-full w-[calc(100%-7.5%)]"></div>
</div>


      <div className="w-full text-center z-10 flex flex-col items-center justify-center">
        <p className="uppercase text-[#242425] text-[14px] lg:text-[24px] font-medium tracking-tight lg:w-full w-[257px]">
          додайте смаку у вашій події
        </p>
        <h1 className="uppercase text-[32px] lg:text-[100px] leading-tight lg:leading-[81%] tracking-tight lg:w-full w-[257px]  pb-[23px]">
          конференц - меню
        </h1>
      </div>
    </div>
  );
};
