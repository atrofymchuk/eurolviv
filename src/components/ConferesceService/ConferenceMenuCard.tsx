
type ConferenceMenuCardToProps = {
    img:string
}

export const ConferenceMenuCard = ({img}:ConferenceMenuCardToProps) =>{
    return(
        <div className="flex flex-col items-center ">
        <img
          src={img}
          alt=""
          className="lg:w-[540px] lg:h-[609px] object-cover "
        />
        <p className="uppercase text-[#242425] lg:text-[48px] lg:tracking-[-7%] lg:leading-[104%] lg:pt-[36px]">
          обіди та вечері
        </p>
        <button className="uppercase text-[#8C331B] border px-4 py-2 lg:text-[16px] border-[#8C331B] rounded-full lg:mt-[37px] font-medium">
          переглянути меню
        </button>
      </div>
    )
}