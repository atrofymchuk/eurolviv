import { Helmet } from "react-helmet-async";
import { getSeoMeta } from "@/seo/pageSeoConfig";

type PageSeoProps = {
  pathname: string;
};

export const PageSeo = ({ pathname }: PageSeoProps) => {
  const seo = getSeoMeta(pathname);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {seo.h1}
      </h1>
    </>
  );
};
