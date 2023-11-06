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

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

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
