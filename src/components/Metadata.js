import React from "react";
import Head from "next/head";

export default function Metadata({ pageName, description }) {
  return (
    <Head>
      <title>{pageName ? `${pageName} | Zev's Art` : "Zev's Art"}</title>
      <meta charset="utf-8" />
      <meta name="author" content="Zev Ross" />
      <meta name="application-name" content="Zev's Art" />
      <meta name="keywords" content="art, illustration, commissions, zev" />
      <meta name="color-scheme" content="dark light" />
      <meta
        name="description"
        content={
          description
            ? description
            : "Zev's art portfolio website, where you can view my art, see commission info, find my socials, and anything else you might be looking for."
        }
      />
    </Head>
  );
}
