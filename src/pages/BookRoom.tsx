import { useState } from "react";
import { OnLoadingSpin } from "../components/utils/OnLoadingSpin";

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pizda = [
    { childs: [6], adults: 1, childsCount: 1 },
    { childs: [5, 4], adults: 1, childsCount: 2 },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative">
      {isLoading && <OnLoadingSpin />}

      <iframe
        src={`https://eurohotellviv.rooms-wizard.com/#!/search1/2025-12-10/2025-12-20///${JSON.stringify(pizda)}`}
        className="w-full max-w-screen h-screen border-none"
        allowTransparency={true}
        title="Booking"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default Booking;
