import cn from "classnames";

type TerraseCardToProps = {
  index: number;
  el: string;
};

export const TerraseCard = ({ index, el }: TerraseCardToProps) => {
  return (
    <div
      key={index}
      className={cn(`border-[#B3B3B3AD] border-t md:border-t-0 xl:py-[16px] 2xl:py-[21px] p-[10px] ${
        index === 0
          ? "2xl:px-[21px_22px]  lg:px-[16px_17px] md:border-e px-[10px_5px] xl:px-[17px_16px] "
          : "2xl:px-[22px_21px]  xl:px-[17px_16px] lg:px-[17px_16px] px-[5px_10px]"
      } 

      `)}
    >
      <img
        loading="lazy"
        src={el}
        alt=""
        className="w-full h-full object-cover lg:h-[40vw] xl:h-full"
      />
    </div>
  );
};
