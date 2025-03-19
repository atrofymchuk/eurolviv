import { useState } from "react";
import { OnLoadingSpin } from "../components/utils/OnLoadingSpin";

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative">
      {isLoading && <OnLoadingSpin />}

      <iframe
        src="https://eurohotellviv.rooms-wizard.com"
        className="w-full max-w-screen h-screen border-none"
        allowTransparency={true}
        title="Booking"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default Booking;
