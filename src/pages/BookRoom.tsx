import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OnLoadingSpin } from "../components/utils/OnLoadingSpin";

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { checkIn, checkOut, adults, children } = location.state || {};

  const parseGuests = () => {
    const adultsCount = adults ? parseInt(adults) : 2;
    const childsCount = children ? parseInt(children) : 0;
    const childs = childsCount > 0 ? Array(childsCount).fill(6) : [];
    return [{ childs, adults: adultsCount, childsCount }];
  };

  const guestsData = parseGuests();
  const formatDate = (date: Date | null) => {
    if (!date) return null;
    const d = new Date(date);
    return d instanceof Date && !isNaN(d.getTime())
      ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`
      : null;
  };

  const checkInDate = formatDate(checkIn) || "2025-12-10";
  const checkOutDate = formatDate(checkOut) || "2025-12-20";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative">
      {isLoading && <OnLoadingSpin />}

      <iframe
        src={`https://eurohotellviv.rooms-wizard.com/#!/search1/${checkInDate}/${checkOutDate}///${JSON.stringify(
          guestsData
        )}`}
        className="w-full max-w-screen h-screen border-none"
        allowTransparency={true}
        title="Booking"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default Booking;
