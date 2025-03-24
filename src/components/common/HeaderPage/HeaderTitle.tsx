import { HeaderTitleProps } from "../../../types/headerTypes";
import cn from "classnames";

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, textColor = "white" }) => {
    const titleParts = title.split("-");
    if (titleParts.length > 1) {
      if (title.toLowerCase().includes("conference") || title.toLowerCase().includes("конференц")) {
        return (
          <h1 className={cn(`${textColor === "white" ? "text-white" : "text-black"} uppercase whitespace-pre-line font-cofo xl:text-[198px] lg:text-[100px] md:text-[80px] flex flex-col text-[48px] font-normal z-20 xl:leading-[154.83px] leading-[80%] tracking-[-0.1em] text-center underline decoration-transparent pt-[12px]`)}>
            <span>{titleParts[0]}-</span>
            <br />
            <span>{titleParts.slice(1).join(" ")}</span>
          </h1>
        );
      }

    }
  
  return (
    <h1 className={cn(`2xl:text-[198px] xl:text-[150px] lg:text-[120px] md:text-[100px] sm:text-[80px] uppercase text-[48px] [text-wrap:balance] w-[90%] font-normal z-20 ${textColor === "white" ? "text-white" : "text-black"} leading-[77%]  tracking-[-0.1em] text-center underline decoration-transparent`) }>
      {title}
    </h1>
  );
}; 