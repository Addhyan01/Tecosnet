import { Helmet } from 'react-helmet-async';

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://tecsonet.com/#business",
        "name": "Tecsonet Solutions",
        "alternateName": "Tecsonet",
        "description": "Bihar's premier IT company providing website development, mobile app development, digital marketing, IT training and BPO services in Samastipur, Darbhanga, Muzaffarpur and across Bihar.",
        "url": "https://tecsonet.com",
        "telephone": "+918271338020",
        "email": "info@tecsonet.com",
        "foundingDate": "2026",
        "priceRange": "₹₹",
        "image": "https://tecsonet.com/logo.jpeg",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tecsonet.com/logo.jpeg"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Samastipur",
          "addressLocality": "Samastipur",
          "addressRegion": "Bihar",
          "postalCode": "848101",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.8785",
          "longitude": "85.7813"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/tecsonetsolutions",
          "https://wa.me/918271338020"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Professional website development for businesses in Bihar starting from ₹3,000" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "Android and iOS app development for Bihar businesses" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing", "description": "Facebook, Instagram and Google advertising for local businesses in Bihar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Training", "description": "Computer and web development courses in Samastipur Bihar" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Setup", "description": "Google Business Profile setup and local SEO for Bihar businesses" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Entry & BPO", "description": "Data entry and back-office processing services" } }
          ]
        },
        "areaServed": [
          { "@type": "City", "name": "Samastipur" },
          { "@type": "City", "name": "Darbhanga" },
          { "@type": "City", "name": "Muzaffarpur" },
          { "@type": "City", "name": "Patna" },
          { "@type": "State", "name": "Bihar" }
        ],
        "knowsAbout": [
          "Website Development", "Mobile App Development", "Digital Marketing",
          "IT Training", "SEO", "Google Business", "React", "Node.js"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://tecsonet.com/#website",
        "url": "https://tecsonet.com",
        "name": "Tecsonet Solutions",
        "description": "Bihar's premier IT company",
        "publisher": { "@id": "https://tecsonet.com/#business" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://tecsonet.com/services",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
