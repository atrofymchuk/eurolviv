import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { useModalStore } from "../../store/useModalStore";
import { callUs } from "../../store/exportsIcons";
import { Link } from "react-router-dom";

export const ContactsModal = () => {
  const { t } = useTranslation();
  const { onCloseGlobalModal } = useModalStore();

  const contacts = [
    {
      title: t("home.roofService.restaurant.title"),
      subtitle: t("contacts.info.receptionPhone"),
      phone: "+ 38 (073) 242 40 02",
      icon: callUs,
    },
    {
      title: t("home.roofService.restaurant.title") + "/" + t("terrase.header.title2"),
      subtitle: t("contacts.info.receptionPhone"),
      phone: "+38 (093) 348 31 14",
      icon: callUs,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center lg:hidden ">
      <div className="bg-white w-[292px]  p-[25px] relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="uppercase text-[16px] tracking-[-0.05em] font-cofo-medium text-[#252526]">
            {t("contacts.info.headingContactUs")}
          </h2>
          <button onClick={onCloseGlobalModal} className="absolute top-[10px] right-[9px]">
            <IoClose size={32} color="#C7C7C7" />
          </button>
        </div>

        <div className="space-y-[17px]">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-[#A47762] rounded-full p-1.5 flex items-center justify-center">
                <Link to={`tel:${contact.phone}`}>
                  <img loading="lazy" src={contact.icon} alt="callUs"  />
                </Link>
              </div>
              <div className="gap-[6px]">
                <h4 className="text-[12px] font-cofo-medium text-[#252526] uppercase">
                  {contact.title}
                </h4>
           
                <Link
                  to={`tel:${contact.phone}`}
                  style={{textDecorationThickness: '1px'}}
                  className="text-[#252526] text-[12px] hover:text-[#8C331B] transition-colors underline-[#252526] underline underline-offset-4"
                >
                  {contact.phone}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
