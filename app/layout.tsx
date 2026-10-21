import "../src/index.css";
import "../src/App.css";
import Providers from "./providers";
import Script from "next/script";
import localFont from "next/font/local";

const rajdhani = localFont({
  src: "../public/fonts/Rajdhani-Variable.woff2",
  variable: "--font-rajdhani",
  display: "swap",
});

const chakraPetch = localFont({
  src: [
    { path: "../public/chakra-petch/ChakraPetch-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/chakra-petch/ChakraPetch-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/chakra-petch/ChakraPetch-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/chakra-petch/ChakraPetch-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/chakra-petch/ChakraPetch-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/chakra-petch/ChakraPetch-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/chakra-petch/ChakraPetch-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/chakra-petch/ChakraPetch-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../public/chakra-petch/ChakraPetch-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/chakra-petch/ChakraPetch-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-chakra-petch",
  display: "swap",
});

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
    <html lang="en" className={`${rajdhani.variable} ${chakraPetch.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Providers>{children}</Providers>

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
