import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Security Analyst & Cybersecurity Educator. Practical cybersecurity knowledge, ethical hacking resources, tools, and research in Telugu.",
  image = "/logo.webp", 
  url = "https://www.aashishtechsecurity.in"
}) => {
  const siteTitle = `${title} | AashishTechSecurity`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.aashishtechsecurity.in/#website",
        "url": "https://www.aashishtechsecurity.in",
        "name": "AashishTechSecurity",
        "description": "Practical cybersecurity platform for learning, ethical hacking resources, security tools, research writeups, and professional AppSec services in Telugu.",
        "inLanguage": ["te", "en"]
      },
      {
        "@type": "Person",
        "@id": "https://www.aashishtechsecurity.in/#person",
        "name": "Aashish Bande",
        "jobTitle": "Security Analyst",
        "worksFor": {
          "@type": "Organization",
          "name": "Pragma Edge Inc"
        },
        "url": "https://www.aashishtechsecurity.in/about",
        "sameAs": [
          "https://www.linkedin.com/in/aashishsec",
          "https://github.com/aashishtechsecurity",
          "https://www.instagram.com/aashishtechsecurity",
          "https://www.youtube.com/@AashishTechSecurity",
          "https://aashishtechsecurity.medium.com/",
          "https://x.com/AashishTechSec"
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

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

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
