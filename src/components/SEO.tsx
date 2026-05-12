import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title, 
  description = "Security Analyst & Cybersecurity Educator. Breaking things to build them stronger. A Telugu cybersecurity education platform.",
  image = "/logo.png", 
  url = "https://aashishtechsecurity.com"
}: SEOProps) => {
  const siteTitle = `${title} | AashishTechSecurity`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
