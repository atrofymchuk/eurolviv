import { useTranslation } from "react-i18next";
import { ContactList } from "./ContactsList";
import MapImg from "./MapImg";
import { social } from "../../Constants/Social";
export const OurContactsWithMap = () => {
  const { t } = useTranslation();

  return (
    <div className="border-[#C7C7C7] w-full border-b text-center md:text-start xl:ps-[37px] lg:ps-[27px]">
      <div className="grid md:grid-cols-2 xl:pt-[68px] lg:pt-[50px] md:pt-[26px] xl:gap-x-40 w-full md:w-fit">
        <ContactList
          title={t("contacts.info.reception")}
          subtitle={t("contacts.info.receptionPhone")}
          phones={["+38 (073) 242-40-02", "+38 (093) 242-40-02"]}
          email="reception@eurohotel.lviv.ua"
          className="pt-[18px] md:pt-0"
        />

        <ContactList
          title={t("contacts.info.booking")}
          subtitle={t("contacts.info.bookingDesc")}
          phones={["+38 (093) 242-31-60", "+38 (093) 348-31-12"]}
          email="info@eurohotel.lviv.ua"
          className="md:order-2 order-3 pt-[20px] md:pt-0"
        />

        <ContactList
          title={t("contacts.info.restaurand/terrase")}
          phones={["+38 (073) 242-40-02", "+38 (093) 348-31-14"]}
          email="restaurant@eurohotel.lviv.ua"
          instagramLink={social.restaurant.instagram}
          className="md:order-3 order-2 xl:mt-[55px] lg:mt-[30px] pt-[18px] lg:pt-0"
        />

        <MapImg />
      </div>
    </div>
  );
};
