export const BottomText = () => {
  return (
    <div className="absolute lg:block hidden 2xl:bottom-[-75%] xl:bottom-[-29vw] lg:bottom-[-47%] left-1/2 transform -translate-x-1/2 z-[-5] pointer-events-none">
      <h1
        className="2xl:text-[18.63vw] xl:text-[19.19vw] lg:text-[180px] tracking-[-0.1em] mix-blend-color-dodge "
        style={{
          background: "linear-gradient(135deg, #c2d3e6 5%, #fff9d7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}
      >
        EUROHOTEL
      </h1>
    </div>
  );
};
