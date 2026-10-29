import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OnLoadingSpin } from "@/components/utils/OnLoadingSpin";

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { checkIn, checkOut, adults, children } = location.state || {};

  const adultsCount = Number.parseInt(adults, 10);
  const childrenCount = Number.parseInt(children, 10);
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

  const checkInDate = formatDate(checkIn);
  const checkOutDate = formatDate(checkOut);

  const linkToBooking =
    checkInDate && checkOutDate
      ? `https://eurohotellviv.rooms-wizard.com/#/search?from=${checkInDate}&to=${checkOutDate}&adults=${Number.isFinite(adultsCount) ? adultsCount : 2}&children=${Number.isFinite(childrenCount) ? childrenCount : 0}`
      : "https://eurohotellviv.rooms-wizard.com/";
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative">
      {isLoading && <OnLoadingSpin />}

      <iframe
        src={linkToBooking}
        className="w-full max-w-screen h-screen border-none"
        allowTransparency={true}
        title="Booking"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default Booking;
