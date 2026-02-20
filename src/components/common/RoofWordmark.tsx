import cn from "classnames";

export const RoofWordmark = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "uppercase font-cofo-medium tracking-[0.6em] leading-none select-none",
        className
      )}
    >
      roof
    </span>
  );
};

