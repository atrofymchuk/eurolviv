import { useTranslation } from "react-i18next";
import { OfferDetailsColumn } from "@/components/Modals/OfferDetailsColumn";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
import { SpecialOffers } from "@/types/types";
import cn from "classnames";
import { useCustomWidth } from "@/hooks/useCustomWidth";

type SpecialOfferViewProps = {
  data: SpecialOffers;
  offerSlug: string;
};

const getDescriptionClassNames = (
  isEng: boolean,
  offerSlug: string
) => {
  const isMilitary = offerSlug.includes("military");
  const isBusiness = offerSlug.includes("business");
  const isPet = offerSlug.includes("pet");
  const isPhotosession = offerSlug.includes("photo");
  const isNewlyweeds = offerSlug.includes("newly");
  const isBirthday = offerSlug.includes("birthday");

  return cn(
    "uppercase md:w-3/5 text-white text-[3.2vw] md:text-[16px] xl:text-[1.25vw] 2xl:text-[0.94vw] leading-[15px] md:leading-[22px]",
    !isEng && isMilitary && "2xl:w-[58%] xl:w-[67%] w-[97%]",
    isEng && isMilitary && "2xl:w-[60%] xl:w-[67%] w-[97%]",
    !isEng && isBusiness && "2xl:w-[58%] xl:w-[65%] w-[93%]",
    isEng && isBusiness && "2xl:w-[58%] xl:w-[65%] w-[100%]",
    !isEng && isPet && "2xl:w-[58%] xl:w-[66%] w-[100%] space-y-2",
    isEng && isPet && "2xl:w-[58%] xl:w-[66%] w-[97.5%] space-y-2",
    !isEng && isPhotosession && "2xl:w-[65%] xl:w-[66%] w-[100%] space-y-2",
    isEng && isPhotosession && "2xl:w-[76%] xl:w-[77%] w-[98%] space-y-2",
    !isEng && isNewlyweeds &&
      "mx-auto w-[88%] text-center md:w-[58%] xl:w-[44%] 2xl:w-[40%]",
    isEng &&
      isNewlyweeds &&
      "mx-auto w-[90%] text-center md:w-[60%] xl:w-[46%] 2xl:w-[42%]",
    !isEng && isBirthday && "2xl:w-[85%] xl:w-[80%] w-[93.8%]",
    isEng && isBirthday && "2xl:w-[100%] xl:w-[100%] w-[93.8%]"
  );
};

const phones = [
  { href: "tel:+380732424002", text: "+38 (073) 242 40 02" },
  { href: "tel:+380932424002", text: "+38 (093) 242 40 02" },
];

export const SpecialOfferView = ({ data, offerSlug }: SpecialOfferViewProps) => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const isMobile = useCustomWidth(300, 800);

  const isPetOffer = offerSlug.includes("pet");
  const isMilitary = offerSlug.includes("military");
  const isBusiness = offerSlug.includes("business");
  const isPet = offerSlug.includes("pet");
  const isPhotosession = offerSlug.includes("photo");
  const isNewlyweeds = offerSlug.includes("newly");
  const isBirthday = offerSlug.includes("birthday");
  const hasMultiDesc = Array.isArray(data.desc);

  const pdfDocuments = {
    pathPublicOffer: isEng
      ? "/Pet_Accommodation_Rules.pdf"
      : "/Pet_Accommodation_Rules_ua.pdf",
  };

  const handleOpenPdf = () => {
    window.open(`/documents${pdfDocuments.pathPublicOffer}`, "_blank");
  };

  return (
    <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center bg-white">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent via-[49.85%] to-[#252526]" />
        <InViewWrapper>
          <picture>
            <source media="(min-width:1024px)" srcSet={data.srcModal} />
            <source media="(max-width:1023px)" srcSet={data.srcModalMobile} />
            <img
              src={data.srcModalMobile || data.srcModal}
              className="h-auto w-full object-cover lg:h-[421px] xl:h-[33.44vw] 2xl:h-[50.83vh] 2xl:w-full"
              alt={t(data.title)}
            />
          </picture>
        </InViewWrapper>

        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-5 py-10 text-center">
          <div className="flex flex-col items-center justify-center gap-y-[12px] md:gap-y-[16px] lg:gap-y-[20px]">
            <h1
              className={cn(
                "w-[90%] uppercase leading-[97%] tracking-[-0.07em] text-white text-[8.53vw] lg:w-auto lg:text-[70px]",
                isEng && isMilitary && "w-[50%]",
                !isEng && isBusiness && "2xl:w-[50%] xl:w-[50%]",
                isEng &&
                  (isBusiness || isPet || isPhotosession || isNewlyweeds) &&
                  "2xl:w-[40%] xl:w-[50%]",
                !isEng && (isPet || isNewlyweeds) && "2xl:w-[70%] xl:w-[80%]"
              )}
            >
              {t(data.title)}
            </h1>

            {data.discount && (
              <p
                className="font-cofo-medium leading-[0.85] tracking-[-0.07em] text-white text-[18.67vw] md:text-[80px] lg:text-[100px] xl:text-[110px] 2xl:text-[7.29vw]"
                aria-label={data.discount}
              >
                {data.discount}
              </p>
            )}

            <p className={getDescriptionClassNames(isEng, offerSlug)}>
              {hasMultiDesc ? t(data.desc[0]) : t(data.desc as string)}
              {hasMultiDesc && (
                <span
                  className={cn(
                    isPet && "mt-2 block lg:inline",
                    (isPhotosession || isBirthday) && "block lg:block",
                    isEng && isPhotosession && "inline! lg:block",
                    !isEng &&
                      isNewlyweeds &&
                      "mx-auto block w-[90%] lg:block xl:w-[80%] 2xl:w-[65%]",
                    isEng &&
                      isNewlyweeds &&
                      "mx-auto block w-[90%] lg:block xl:w-[100%] 2xl:w-[100%]"
                  )}
                >
                  {t(data.desc[1])}
                </span>
              )}
            </p>

            {isPetOffer && (
              <button
                type="button"
                onClick={handleOpenPdf}
                className={cn(
                  "h-[37px] rounded-full bg-white text-[12px] font-cofo-medium uppercase text-[#A47762] lg:h-[46px] lg:text-[16px]",
                  isEng ? "w-[200px] lg:w-[280px]" : "w-[181px] lg:w-[245px]"
                )}
              >
                {t("specialOffers.pet")}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid w-full max-w-[1472px] grid-cols-1 border-x border-[#C7C7C7] md:grid-cols-2">
        <OfferDetailsColumn
          items={data.details}
          url={offerSlug}
          isFirstCol
          title={t("specialOffers.card.title.0")}
        />
        <OfferDetailsColumn
          items={data.conditions}
          url={offerSlug}
          isFirstCol={false}
          title={t("specialOffers.card.title.1")}
        />
      </div>

      <div className="grid w-full max-w-[1472px] grid-cols-1 bg-[#252526] text-center md:grid-cols-2 md:text-start">
        <div className="col-span-2 flex flex-col justify-center border-[#3D3D3D] px-4 py-[27px] md:col-span-1 md:border-e lg:ps-6 xl:py-[27px]">
          <h2 className="uppercase text-white text-[24px] lg:text-[48px]">
            {t("specialOfferModal.contacts.title")}
          </h2>
        </div>

        <div className="col-span-2 flex justify-start px-4 pb-[27px] md:col-span-1 md:justify-between md:pb-0 xl:py-[27px]">
          <div className="flex flex-col">
            <ul className="space-y-1 lg:space-y-2">
              {phones.map((phone) => (
                <li
                  key={phone.href}
                  className="uppercase font-medium text-white text-[12px] lg:text-[18px] xl:text-[1.17vw] 2xl:text-[0.94vw]"
                >
                  <a href={phone.href} className="hover:underline">
                    {phone.text}
                  </a>
                </li>
              ))}
            </ul>
            <p className="pt-2 font-medium uppercase text-white text-[12px] lg:text-[18px] xl:text-[1.17vw] 2xl:pt-4 2xl:text-[0.94vw]">
              <a href="mailto:info@eurohotel.lviv.ua" className="hover:underline">
                info@eurohotel.lviv.ua
              </a>
            </p>
          </div>

          {!isMobile && isPhotosession && data.contactDesc && (
            <div
              className={cn(
                "flex flex-col justify-center",
                isEng ? "2xl:w-[57%] xl:w-[58%]" : "2xl:w-[41%] xl:w-[46%]"
              )}
            >
              <p className="uppercase font-medium text-white text-[12px] lg:text-[18px] xl:text-[1.09vw] 2xl:text-[0.83vw]">
                {t(data.contactDesc)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
