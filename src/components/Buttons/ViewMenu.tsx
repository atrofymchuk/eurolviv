
import cn from "classnames";
import { useModalStore } from "../../store/useModalStore";

export const ViewMenuButton = ({className, children}: {className?: string, children: React.ReactNode}) => {
  const { onOpenModal } = useModalStore();
  


  return (
    <button onClick={()=>onOpenModal('menu')} className={cn("uppercase font-cofo-medium text-[#EDE8E5] text-[12px] border  lg:py-[10px] lg:w-[204px] py-[8.5px] lg:text-[14px] border-[#EDE8E5] flex justify-center lg:text-[#8C331B] lg:border-[#8C331B] rounded-full font-cofo-medium  hover:text-[white] hover:bg-[#8C331B] transition", className)} >
    {children}
  </button>
  );
}