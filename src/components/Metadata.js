import React from "react";
import Head from "next/head";

export default function Metadata({ pageName, description }) {
  const title = pageName ? `${pageName} | Zev's Art` : "Zev's Art";
  const desc = description
    ? description
    : "Zev's art portfolio website, where you can view my art, see commission info, find my socials, and anything else you might be looking for.";

  return (
    <Head>
      <title>{title}</title>
      <meta content="text/html; charset=UTF-8" name="Content-Type" />
      <meta name="author" content="Zev Ross" />
      <meta name="application-name" content="Zev's Art" />
      <meta name="keywords" content="art, illustration, commissions, zev" />
      <meta name="color-scheme" content="dark light" />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://www.zevsart.com/twittercard.jpg"
      />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content="https://www.zevsart.com/" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="zevcandraw" />
      <meta name="twitter:creator" content="zevcandraw" />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:image"
        content="https://www.zevsart.com/twittercard.jpg"
      />
      <meta name="twitter:image:alt" content="Zev's Art" />

      <meta name="description" content={desc} />
    </Head>
  );
}
