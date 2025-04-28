import cn from "classnames";

type ViewMenuButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const ViewMenuButton = ({className, children, onClick}: ViewMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn("uppercase text-center font-cofo-medium text-[#EDE8E5] text-[12px] border flex items-center lg:py-[0px] lg:w-[204px] py-[8.5px] lg:text-[14px] border-[#EDE8E5] justify-center lg:text-[#8C331B] lg:border-[#8C331B] rounded-full font-cofo-medium hover:text-[white] hover:bg-[#8C331B] transition", className)}
    >
      {children}
    </button>
  );
}