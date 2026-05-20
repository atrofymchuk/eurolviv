import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { buildLocalizedPath } from "@/utils/localeRouting";
import { useModalStore } from "@/store/useModalStore";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
import {
  conferencePreview1,
  conferencePreview2,
  conferencePreview3,
} from "@/store/exportsImg";
import cn from "classnames";

const HALL_CARDS = [
  {
    anchor: "launge-hall",
    image: conferencePreview3,
    area: "45M²",
    capacityKey: "conferenceHallState.launge.capacity",
    labelKey: "conferenceHallState.launge.desc",
    titleKey: "conferenceService.seoText.space.halls.launge.title",
    descKey: "conferenceService.seoText.space.halls.launge.desc",
  },
  {
    anchor: "small-hall",
    image: conferencePreview1,
    area: "75M²",
    capacityKey: "conferenceHallState.smallHall.capacity",
    labelKey: "conferenceHallState.smallHall.desc",
    titleKey: "conferenceService.seoText.space.halls.small.title",
    descKey: "conferenceService.seoText.space.halls.small.desc",
  },
  {
    anchor: "big-hall",
    image: conferencePreview2,
    area: "120M²",
    capacityKey: "conferenceHallState.bigHall.capacity",
    labelKey: "conferenceHallState.bigHall.desc",
    titleKey: "conferenceService.seoText.space.halls.big.title",
    descKey: "conferenceService.seoText.space.halls.big.desc",
  },
] as const;

const bodyTextClass =
  "text-[13px] md:text-[14px] xl:text-[0.94vw] 2xl:text-[0.9vw] leading-[150%] tracking-[-0.02em] text-[#3D3D3D]";

const gridLineClass = "border-[#C7C7C7]/70";

export const ConferenceSeoText = () => {
  const { t, i18n } = useTranslation();
  const { onOpenModal } = useModalStore();
  const locale = i18n.language === "en" ? "en" : "uk";
  const isEng = locale === "en";
  const conferencePath = buildLocalizedPath("/conference-service", locale);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#EDE8E5]"
      aria-labelledby="conference-seo-text-title"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        aria-hidden
      >
        <div className="absolute inset-y-0 left-[20.5%] w-px -translate-x-1/2 bg-[#C7C7C7]/70" />
        <div className="absolute inset-y-0 left-[63.4%] w-px -translate-x-1/2 bg-[#C7C7C7]/70" />
      </div>

      <div className="relative z-10 mx-auto w-[89.58%]">
        <div className={cn("relative border-x", gridLineClass)}>
          <div className="relative">
          <header className="border-b border-[#C7C7C7] px-[20px] py-[40px] lg:px-[28px] lg:py-[56px] xl:px-[36px] xl:py-[64px]">
            <p className="text-[12px] font-cofo-medium uppercase tracking-[0.14em] text-[#A47762] md:text-[13px] xl:text-[0.82vw]">
              eurohotel · lviv
            </p>
            <h2
              id="conference-seo-text-title"
              className={cn(
                "mt-[16px] flex flex-col uppercase leading-[86%] tracking-[-0.07em] text-[#252526]",
                {
                  "max-w-[16ch] text-[32px] md:text-[48px] lg:text-[64px] xl:text-[5vw]":
                    !isEng,
                  "max-w-[18ch] text-[28px] md:text-[44px] lg:text-[56px] xl:text-[4.6vw]":
                    isEng,
                }
              )}
            >
              <span>{t("conferenceService.seoText.titleLine1")}</span>
              <span>{t("conferenceService.seoText.titleLine2")}</span>
            </h2>
          </header>

          <article className="border-b border-[#C7C7C7] bg-[#FFFCFA] px-[20px] py-[32px] lg:px-[36px] lg:py-[44px]">
            <div className="min-w-0">
              <h3 className="font-cofo-medium uppercase leading-[115%] tracking-[-0.04em] text-[#8C331B] text-[17px] md:text-[20px] xl:text-[1.35vw]">
                {t("conferenceService.seoText.welcome.heading")}
              </h3>
              <div className="mt-[14px] flex flex-col gap-[12px] lg:gap-[14px]">
                <p className={bodyTextClass}>
                  {t("conferenceService.seoText.welcome.p1")}
                </p>
                <p className={bodyTextClass}>
                  {t("conferenceService.seoText.welcome.p2")}
                </p>
              </div>
            </div>
          </article>

          <article className="px-[20px] py-[32px] lg:px-[36px] lg:py-[44px]">
            <div className="min-w-0">
              <h3 className="font-cofo-medium uppercase leading-[115%] tracking-[-0.04em] text-[#8C331B] text-[17px] md:text-[20px] xl:text-[1.35vw]">
                {t("conferenceService.seoText.space.heading")}
              </h3>
              <div className="mt-[14px] flex flex-col gap-[12px] lg:gap-[16px]">
                  <p className={bodyTextClass}>
                    {t("conferenceService.seoText.space.p1")}
                  </p>

                  <p className="font-cofo-medium uppercase tracking-[-0.03em] text-[#252526] text-[14px] md:text-[15px] xl:text-[0.98vw]">
                    {t("conferenceService.seoText.space.hallsTitle")}
                  </p>

                  <ul className="grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[16px]">
                    {HALL_CARDS.map((hall) => (
                      <li key={hall.anchor}>
                        <Link
                          to={`${conferencePath}#${hall.anchor}`}
                          className="group flex h-full flex-col overflow-hidden border border-[#C7C7C7] bg-white transition-colors duration-300 hover:border-[#8C331B]"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <InViewWrapper className="h-full w-full">
                              <img
                                src={hall.image}
                                alt={t(hall.titleKey)}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                              />
                            </InViewWrapper>
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#252526]/55 via-transparent to-transparent" />
                            <div className="absolute left-[12px] top-[12px] flex flex-wrap gap-[6px]">
                              <span className="rounded-full border border-[#E8D5CC] bg-white/95 px-[10px] py-[6px] text-[10px] font-cofo-medium uppercase tracking-[-0.03em] text-[#8C331B] md:text-[11px]">
                                {t(hall.labelKey)}
                              </span>
                            </div>
                            <div className="absolute bottom-[12px] left-[12px] right-[12px] flex flex-wrap gap-[6px]">
                              <span className="rounded-full bg-[#8C331B] px-[10px] py-[6px] text-[10px] font-cofo-medium uppercase tracking-[-0.03em] text-white md:text-[11px]">
                                {hall.area}
                              </span>
                              <span className="rounded-full border border-white/40 bg-[#252526]/75 px-[10px] py-[6px] text-[10px] font-cofo-medium uppercase tracking-[-0.03em] text-white backdrop-blur-[2px] md:text-[11px]">
                                {t(hall.capacityKey)}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-1 flex-col px-[16px] py-[16px] lg:px-[18px] lg:py-[18px]">
                            <h4 className="font-cofo-medium uppercase leading-[120%] tracking-[-0.03em] text-[#252526] text-[14px] md:text-[15px] xl:text-[0.98vw]">
                              {t(hall.titleKey)}
                            </h4>
                            <p className="mt-[10px] flex-1 text-[12px] leading-[145%] tracking-[-0.02em] text-[#5C5C5C] md:text-[13px] xl:text-[0.88vw]">
                              {t(hall.descKey)}
                            </p>
                            <span className="mt-[14px] inline-flex items-center gap-[6px] text-[11px] font-cofo-medium uppercase tracking-[-0.03em] text-[#8C331B] transition-colors duration-300 group-hover:text-[#252526] md:text-[12px]">
                              {t("buttons.details")}
                              <span
                                className="transition-transform duration-300 group-hover:translate-x-[3px]"
                                aria-hidden
                              >
                                →
                              </span>
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className={bodyTextClass}>
                    {t("conferenceService.seoText.space.p2")}
                  </p>
                  <p className={bodyTextClass}>
                    {t("conferenceService.seoText.space.p3")}
                  </p>
                </div>
            </div>
          </article>

          <div className="border-t border-[#C29986] bg-[#A47762] px-[20px] py-[36px] text-[#EDE8E5] lg:px-[36px] lg:py-[48px]">
            <div className="grid gap-[24px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-[32px]">
              <div>
                <h3 className="max-w-[24ch] font-cofo-medium uppercase leading-[110%] tracking-[-0.05em] text-[22px] text-[#EDE8E5] md:text-[26px] xl:text-[1.75vw]">
                  {t("conferenceService.seoText.booking.heading")}
                </h3>
                <div className="mt-[16px] grid gap-[12px] lg:grid-cols-2 lg:gap-[20px]">
                  <p className="text-[13px] leading-[150%] tracking-[-0.02em] text-[#EDE8E5] md:text-[14px] xl:text-[0.94vw]">
                    {t("conferenceService.seoText.booking.p1")}
                  </p>
                  <p className="text-[13px] leading-[150%] tracking-[-0.02em] text-[#E9E9E9] md:text-[14px] xl:text-[0.94vw]">
                    {t("conferenceService.seoText.booking.p2")}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal("order")}
                className="inline-flex h-[46px] min-w-[200px] items-center justify-center self-start rounded-full border border-[#EDE8E5] bg-[#EDE8E5] px-[24px] text-[12px] font-cofo-medium uppercase tracking-[-0.02em] text-[#242425] transition-colors duration-300 hover:bg-[#252526] hover:text-[#EDE8E5] lg:self-end md:text-[14px] xl:h-[2.4vw] xl:min-w-[10.42vw] xl:text-[0.83vw]"
              >
                {t("buttons.order")}
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
