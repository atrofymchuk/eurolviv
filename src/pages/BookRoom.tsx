const Booking= () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-white">
      <iframe
        src="https://eurohotellviv.rooms-wizard.com"
        className="w-full max-w-screen h-screen border-none"
        allowTransparency={true}
        title="Booking"
      ></iframe>
    </div>
  );
};

export default Booking;
