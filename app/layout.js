import "../src/index.css";
import "../src/App.css";
import "aos/dist/aos.css";
import Providers from "./providers";
import StyledComponentsRegistry from "./styled-components-registry";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://swastixa.com"),
  title: "Swastixa | Digital Marketing & Web Development Agency",
  description:
    "Swastixa Digital is a full-service digital company that blends strategy, design, and technology to deliver 360° creative and digital marketing solutions, including video production, social media, and website development.",
  applicationName: "Swastixa Digital",
  authors: [{ name: "Swastixa Digital" }],
  verification: {
    google: "u8G2NTtI02IiQp7w34E1yWd1SKg6KRAmcu0CJAc0qXs",
  },
  icons: {
    icon: [
      { url: "/swastixa_32X32.png", sizes: "32x32", type: "image/png" },
      { url: "/swastixa_192X192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/swastixa_180X180.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Swastixa Digital",
    url: "https://swastixa.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Swastixa Digital",
  alternateName: "Swastixa Digital",
  url: "https://swastixa.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WVTSGD09TS"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WVTSGD09TS');`}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PM5LV7QM');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PM5LV7QM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
