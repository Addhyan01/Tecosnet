import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://tecsonet.com';
const DEFAULT_IMAGE = `${BASE_URL}/logo.jpeg`;

export default function SEO({
  title,
  description,
  keywords,
  url,
  image = DEFAULT_IMAGE,
  type = 'website',
}) {
  const fullTitle = title
    ? `${title} | Tecsonet Solutions`
    : 'Tecsonet Solutions — Bihar Ki Best IT Company | Website, App, Digital Marketing';

  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tecsonet Solutions" />
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Samastipur, Bihar" />

      {/* Open Graph — Facebook, WhatsApp, LinkedIn */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Tecsonet Solutions" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta name="theme-color" content="#00e5a0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Tecsonet" />
    </Helmet>
  );
}
