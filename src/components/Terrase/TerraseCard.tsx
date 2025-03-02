type TerraseCardToProps = {
  index: number;
  el: string;
  length: number;
};

export const TerraseCard = ({ index, el, length }: TerraseCardToProps) => {
  const isFirstInRow = index % 2 === 0;
  const isLastInRow = index % 2 !== 0;
  const isBottomRow = index >= length - (length % 2 === 0 ? 2 : 1); // Останній рядок
  const isFirstRow = index < 2; // Перевіряємо, чи це перший рядок
  const isNotLastCard = index !== length - 1; // Чи не остання картка

  return (
    <div
      key={index}
      className={`border-[#B3B3B3AD] xl:p-[10px] 
        ${isFirstInRow ? "pr-2 sm:pr-3 md:pr-4 pb-2 " : ""}  
        ${isLastInRow ? "pl-2 sm:pl-3 md:pl-4  pt-4" : ""}  
        ${index === 0 ? "sm:pl-0 pt-4 xl:ps-0" : ""} 
        ${index === length - 1 ? "sm:pr-0 pt-[8px]" : ""}
        ${isBottomRow ? "pt-2 pb-4" : ""}
        ${isFirstRow ? "border-b xl:border-b-0 pb-2" : ""}  
        ${isNotLastCard ? "border-r" : ""}  
      `}
    >
      <img
        src={el}
        alt=""
        className="w-full 2xl:h-[546px] xl:h-[400px] lg:h-[400px] md:h-[400px] h-[300px] object-cover"
      />
    </div>
  );
};
