import { HallCard } from "./HallCard";

type HallListProps = {
    halls: {
        previewImage: string;
        title: string;
        size: string;
        area: string;
        capacity: string;
    }[];
};


export const HallList = ({ halls }: HallListProps) => (
    <div className="relative z-10 sm:grid md:flex grid-cols-[334px] md:grid-cols-[668px]  border-[#B3B3B3] pb-[20px] xl:pb-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 space-y-4 md:space-y-0">
        {halls.map((hall, index) => (
          <HallCard key={index} hall={hall} index={index} />
        ))}
      </div>
     
    </div>
  );
  