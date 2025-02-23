export const ConferenceMenu = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
   
      <div className="absolute h-[400px] z-[-1] grid lg:grid-cols-[396px_816px_708px] grid-cols-[295px]">
        <div className="lg:border-e lg:border-x-none border-x border-[#C7C7C7]"></div>
        <div className="lg:border-e  lg:flex hidden border-[#C7C7C7]"></div>
        <div className="lg:border-e  lg:flex hidden border-[#C7C7C7]"></div>
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
