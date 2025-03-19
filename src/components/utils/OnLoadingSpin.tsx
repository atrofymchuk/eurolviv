export const OnLoadingSpin = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-3 border-black border-t-transparent rounded-full animate-[spin_0.75s_linear_infinite]"></div>
    </div>
  );
};
