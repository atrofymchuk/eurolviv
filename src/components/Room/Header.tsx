import { useTranslation } from "react-i18next";
import { RoomHeader } from "../../store/types";

interface RoomHeaderToProps {
  header?: RoomHeader;
}

export const Header: React.FC<RoomHeaderToProps> = ({ header}) => {
  const {t} = useTranslation()
  if(!header) return null;
  const {
    title,
    arriveTime,
    count,
    description,
    leaveTime,
    size,
    view,
    previewImage,
  } = header;
  const translatedTitle = t(title);

  const titlePart = translatedTitle.split(' ');
  


  return (
    <div className="w-full relative">
      <img
        src={previewImage}
        alt="preview"
        className="object-cover w-full lg:h-[1181px] h-[821px]"
      />

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.25%, #252526 100%),
                       linear-gradient(0deg, rgba(37, 37, 38, 0.2), rgba(37, 37, 38, 0.2))`,
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h4 className="font-cofo uppercase leading-[22.68px] font-semibold underline text-sm decoration-transparent xl:mb-4">
          {t('global.createdFor')}
          <span className="font-blessed normal-case xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
            {t('global.whereTo')}
          </span>
        </h4>

        <h1 className="text-white uppercase whitespace-pre-line font-cofo xl:text-[198px] flex flex-col text-[48px] font-normal z-20 xl:leading-[154.83px] leading-[39.13px] tracking-[-0.1em] text-center underline decoration-transparent">
         
            <span >{titlePart[0]}</span><br /><span>{titlePart ? titlePart[1] :''}</span>
        
        </h1>
        <p className={`uppercase lg:leading-[35px] lg:text-[36px] text-[20px] font-semibold leading-[25px] lg:pt-[46px]  pt-[8px]  `} >
          {t(size || '')}
        </p>

        <p className={`font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[531px] w-[291px] ${size ? 'lg:pt-[46px] ' : ' '} pt-[20px]  text-[12px] leading-[15.12px] px-[10px]`}>
          {t(description)}
        </p>
      </div>

      <div className="absolute bottom-10 w-full  lg:justify-center">
        <div className="flex flex-col lg:flex-row   text-center flex-wrap lg:justify-between w-full lg:px-[74px] ">
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            {t('room.header.count')}: <span className="text-[#FFFFFF]">{count}</span>
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            {t('room.header.view')}: <span className="text-[#FFFFFF]">{t(view)}</span>
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            {t('room.header.arriveTime')}: <span className="text-[#FFFFFF]">{arriveTime}</span>
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            {t('room.header.leaveTime')}: <span className="text-[#FFFFFF]">{leaveTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
