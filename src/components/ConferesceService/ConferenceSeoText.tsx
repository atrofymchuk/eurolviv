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
  "text-justify text-[13px] md:text-[14px] xl:text-[0.94vw] 2xl:text-[0.9vw] leading-[150%] tracking-[-0.02em] text-[#3D3D3D]";

const contentWrapClass =
  "relative mx-auto w-[89.05%] max-w-full md:w-[91.06%] px-[20px] lg:px-[28px] xl:px-[36px]";

const insetBlockClass =
  "-mx-[20px] px-[24px] lg:-mx-[28px] lg:px-[32px] xl:-mx-[36px] xl:px-[40px]";

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
      <div className={contentWrapClass}>
        <div className="relative w-full">
          <header className="py-[40px] lg:py-[56px] xl:py-[64px]">
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

          <div className="flex flex-col gap-y-[32px] lg:gap-y-[40px]">
          <article className={cn("bg-[#FFFCFA] py-[32px] lg:py-[44px]", insetBlockClass)}>
            <div className="min-w-0">
              <h3 className="font-cofo-medium uppercase leading-[115%] tracking-[-0.04em] text-[#8C331B] text-[17px] md:text-[20px] xl:text-[1.35vw]">
                {t("conferenceService.seoText.welcome.heading")}
              </h3>
              <div className="mt-[18px] flex flex-col gap-[14px] lg:mt-[20px] lg:gap-[16px]">
                <p className={bodyTextClass}>
                  {t("conferenceService.seoText.welcome.p1")}
                </p>
                <p className={bodyTextClass}>
                  {t("conferenceService.seoText.welcome.p2")}
                </p>
              </div>
            </div>
          </article>

          <article className="py-[32px] lg:py-[44px]">
            <div className="min-w-0">
              <h3 className="font-cofo-medium uppercase leading-[115%] tracking-[-0.04em] text-[#8C331B] text-[17px] md:text-[20px] xl:text-[1.35vw]">
                {t("conferenceService.seoText.space.heading")}
              </h3>
              <div className="mt-[18px] flex flex-col gap-[14px] lg:mt-[20px] lg:gap-[16px]">
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
          </div>

          <div
            className={cn(
              "mt-[32px] bg-[#A47762] py-[40px] text-[#EDE8E5] lg:mt-[40px] lg:py-[52px]",
              insetBlockClass
            )}
          >
            <div className="grid gap-[28px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-x-[40px]">
              <div className="min-w-0">
                <h3 className="max-w-[24ch] font-cofo-medium uppercase leading-[110%] tracking-[-0.05em] text-[22px] text-[#EDE8E5] md:text-[26px] xl:text-[1.75vw]">
                  {t("conferenceService.seoText.booking.heading")}
                </h3>
                <div className="mt-[20px] grid gap-y-[14px] gap-x-[24px] lg:mt-[24px] lg:grid-cols-2 xl:gap-x-[32px]">
                  <p className="text-justify text-[13px] leading-[150%] tracking-[-0.02em] text-[#EDE8E5] md:text-[14px] xl:text-[0.94vw]">
                    {t("conferenceService.seoText.booking.p1")}
                  </p>
                  <p className="text-justify text-[13px] leading-[150%] tracking-[-0.02em] text-[#E9E9E9] md:text-[14px] xl:text-[0.94vw]">
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
    </section>
  );
};
