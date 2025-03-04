
import { Header } from "../components/Contacts/Header";
import { Info } from "../components/Contacts/Info";
import { Location } from "../components/Contacts/Location";


export const Contacts = () => {
  return (
    <div className="flex  flex-col relative overflow-x-hidden">
      <Header />
      <Info />
      <Location />
    </div>
  );
};
