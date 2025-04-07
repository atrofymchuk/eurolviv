import { HallCard } from "./HallCard";
import './HallList.css'
type HallListProps = {
    halls: {
        previewImage: string;
        title: string;
        size: string;
        area: string;
        capacity: string;
    }[];
    isEng: boolean;
};


export const HallList = ({ halls, isEng }: HallListProps) => (
    <div className="relative z-10 flex justify-center border-[#B3B3B3] pb-[20px] xl:pb-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-[25.69%_38.16%_25.74%] items-center justify-center grid-conf w-full 2xl:gap-[30px] place-items-center">
        {halls.map((hall, index) => (
          <HallCard key={index} hall={hall} index={index} isEng={isEng} />
        ))}
      </div>
     
    </div>
  );
  