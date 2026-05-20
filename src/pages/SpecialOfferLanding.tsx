import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSpecialOffersStore } from "@/store/useSpecialOffersStore";
import { SpecialOfferView } from "@/components/SpecialOffers/SpecialOfferView";
import { buildLocalizedPath } from "@/utils/localeRouting";

export const SpecialOfferLanding = () => {
  const { offer } = useParams<{ offer: string }>();
  const { getSpecialOffer } = useSpecialOffersStore();
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "en" ? "en" : "uk";

  if (!offer) {
    return <Navigate to={buildLocalizedPath("/special-offers", locale)} replace />;
  }

  const data = getSpecialOffer(offer);

  if (!data) {
    return <Navigate to={buildLocalizedPath("/special-offers", locale)} replace />;
  }

  return (
    <div className="overflow-x-hidden bg-white pb-[40px] pt-[25.33vw] lg:pb-[60px] lg:pt-[9.18vw] 2xl:pt-[6.93vw]">
      <div className="mx-auto w-[89.58%] border-x border-[#C7C7C7] bg-white">
        <div className="border-b border-[#C7C7C7] px-[20px] py-[16px] lg:px-[28px] lg:py-[20px]">
          <Link
            to={buildLocalizedPath("/special-offers", locale)}
            className="inline-flex items-center gap-[8px] text-[12px] font-cofo-medium uppercase tracking-[-0.03em] text-[#8C331B] transition-colors hover:text-[#252526] md:text-[14px]"
          >
            <span aria-hidden>←</span>
            {t("header.specialOffers")}
          </Link>
        </div>
      </div>

      <SpecialOfferView data={data} offerSlug={offer} />
    </div>
  );
};
