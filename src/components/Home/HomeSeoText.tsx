import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { buildLocalizedPath } from "@/utils/localeRouting";
import cn from "classnames";

const ROOM_TYPE_LINKS = [
  {
    labelKey: "home.seoText.rooms.types.standardSingle",
    slug: "standart-single",
  },
  {
    labelKey: "home.seoText.rooms.types.standardDouble",
    slug: "standart-big-bed",
  },
  {
    labelKey: "home.seoText.rooms.types.twin",
    slug: "standart-two-bed",
  },
  {
    labelKey: "home.seoText.rooms.types.semiLux",
    slug: "semi-lux",
  },
  {
    labelKey: "home.seoText.rooms.types.lux",
    slug: "lux-elegant",
  },
] as const;

type ContentSection = {
  headingKey: string;
  paragraphKeys: string[];
  featured?: boolean;
  roomList?: boolean;
};

const CONTENT_SECTIONS: ContentSection[] = [
  {
    headingKey: "home.seoText.welcome.heading",
    paragraphKeys: [
      "home.seoText.welcome.p1",
      "home.seoText.welcome.p2",
      "home.seoText.welcome.p3",
    ],
    featured: true,
  },
  {
    headingKey: "home.seoText.atmosphere.heading",
    paragraphKeys: [
      "home.seoText.atmosphere.p1",
      "home.seoText.atmosphere.p2",
    ],
  },
  {
    headingKey: "home.seoText.rooms.heading",
    paragraphKeys: ["home.seoText.rooms.p2", "home.seoText.rooms.p3"],
    roomList: true,
  },
  {
    headingKey: "home.seoText.conference.heading",
    paragraphKeys: [
      "home.seoText.conference.p1",
      "home.seoText.conference.p2",
    ],
  },
  {
    headingKey: "home.seoText.roof.heading",
    paragraphKeys: ["home.seoText.roof.p1", "home.seoText.roof.p2"],
  },
];

const bodyTextClass =
  "text-[13px] md:text-[14px] xl:text-[0.94vw] 2xl:text-[0.9vw] leading-[150%] tracking-[-0.02em] text-[#3D3D3D]";

const gridLineClass = "border-[#C7C7C7]/70";

export const HomeSeoText = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "en" ? "en" : "uk";
  const isEng = locale === "en";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#EDE8E5]"
      aria-labelledby="home-seo-text-title"
    >
      <div className="relative mx-auto w-[89.05%] md:w-[91.06%]">
        <div className={cn("relative border-x", gridLineClass)}>
          <div
            className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
            aria-hidden
          >
            <div className="absolute inset-y-0 left-[29.7%] w-px -translate-x-1/2 bg-[#C7C7C7]/70" />
            <div className="absolute inset-y-0 left-[70.3%] w-px -translate-x-1/2 bg-[#C7C7C7]/70" />
          </div>

          <div className="relative z-10">
          <header className="border-b border-[#C7C7C7] px-[20px] py-[40px] lg:px-[28px] lg:py-[56px] xl:px-[36px] xl:py-[64px]">
            <p className="text-[12px] font-cofo-medium uppercase tracking-[0.14em] text-[#A47762] md:text-[13px] xl:text-[0.82vw]">
              eurohotel · lviv
            </p>
            <h2
              id="home-seo-text-title"
              className={cn(
                "mt-[16px] max-w-[14ch] uppercase leading-[86%] tracking-[-0.07em] text-[#252526]",
                {
                  "text-[34px] md:text-[52px] lg:text-[68px] xl:text-[5.4vw]": !isEng,
                  "text-[30px] md:text-[48px] lg:text-[60px] xl:text-[5vw]": isEng,
                }
              )}
            >
              {t("home.seoText.title")}
            </h2>
          </header>

          <div className="grid lg:grid-cols-2">
            {CONTENT_SECTIONS.map((section, index) => (
              <article
                key={section.headingKey}
                className={cn(
                  "border-[#C7C7C7] px-[20px] py-[32px] lg:px-[28px] lg:py-[40px] xl:px-[36px]",
                  {
                    "border-b bg-[#FFFCFA] lg:col-span-2": section.featured,
                    "border-b lg:border-e":
                      !section.featured && (index === 1 || index === 3),
                    "border-b": !section.featured && (index === 2 || index === 4),
                  }
                )}
              >
                <div className="min-w-0">
                    <h3 className="font-cofo-medium uppercase leading-[115%] tracking-[-0.04em] text-[#8C331B] text-[17px] md:text-[19px] lg:text-[20px] xl:text-[1.35vw]">
                      {t(section.headingKey)}
                    </h3>

                    <div className="mt-[14px] flex flex-col gap-[12px] lg:mt-[16px] lg:gap-[14px]">
                      {section.roomList && (
                        <>
                          <p className={bodyTextClass}>
                            {t("home.seoText.rooms.intro")}
                          </p>
                          <ul className="flex flex-wrap gap-[8px]">
                            {ROOM_TYPE_LINKS.map((room) => (
                              <li key={room.slug}>
                                <Link
                                  to={buildLocalizedPath(
                                    `/rooms/${room.slug}`,
                                    locale
                                  )}
                                  className="inline-flex rounded-full border border-[#C29986] bg-white px-[14px] py-[9px] text-[11px] font-cofo-medium uppercase tracking-[-0.03em] text-[#8C331B] transition-colors duration-300 hover:border-[#8C331B] hover:bg-[#8C331B] hover:text-white md:text-[12px] xl:text-[0.78vw]"
                                >
                                  {t(room.labelKey)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <p className={bodyTextClass}>
                            {t("home.seoText.rooms.afterList")}
                          </p>
                        </>
                      )}

                      {section.paragraphKeys.map((paragraphKey) => (
                        <p key={paragraphKey} className={bodyTextClass}>
                          {t(paragraphKey)}
                        </p>
                      ))}
                    </div>
                </div>
              </article>
            ))}
          </div>

          <div className="border-t border-[#C29986] bg-[#A47762] px-[20px] py-[36px] text-[#EDE8E5] lg:px-[36px] lg:py-[48px]">
            <div className="grid gap-[24px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-[32px]">
              <div>
                <h3 className="max-w-[22ch] font-cofo-medium uppercase leading-[110%] tracking-[-0.05em] text-[22px] text-[#EDE8E5] md:text-[26px] xl:text-[1.75vw]">
                  {t("home.seoText.booking.heading")}
                </h3>
                <div className="mt-[16px] grid gap-[12px] lg:grid-cols-2 lg:gap-[20px]">
                  <p className="text-[13px] leading-[150%] tracking-[-0.02em] text-[#EDE8E5] md:text-[14px] xl:text-[0.94vw]">
                    {t("home.seoText.booking.p1")}
                  </p>
                  <p className="text-[13px] leading-[150%] tracking-[-0.02em] text-[#E9E9E9] md:text-[14px] xl:text-[0.94vw]">
                    {t("home.seoText.booking.p2")}
                  </p>
                </div>
              </div>

              <Link
                to={buildLocalizedPath("/booking", locale)}
                className="inline-flex h-[46px] min-w-[200px] items-center justify-center self-start rounded-full border border-[#EDE8E5] bg-[#EDE8E5] px-[24px] text-[12px] font-cofo-medium uppercase tracking-[-0.02em] text-[#242425] transition-colors duration-300 hover:bg-[#252526] hover:text-[#EDE8E5] lg:self-end md:text-[14px] xl:h-[2.4vw] xl:min-w-[10.42vw] xl:text-[0.83vw]"
              >
                {t("buttons.bookRoom")}
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
