import "./globals.css";
import { Inter } from "next/font/google";
import Favicon from "./components/favicon/favicon";
import { Metadata } from "next";
import AppWrapper from "./components/wrappers/app-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://lilousnow.fr"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | LilouSnow",
    default: "LilouSnow", // a default is required when creating a template
  },
  keywords: [
    "tatouage",
    "thérapeutique",
    "cicatrices",
    "vitiligo",
    "Mastectomie",
    "Abdominoplastie",
  ],
  authors: [
    { name: "Christophe Le Goff", url: "https://christophe-le-goff.com" },
  ],
  openGraph: {
    title: "LilouSnow",
    description: "Tatouages thérapeutiques",
    url: "https://lilousnow.fr",
    siteName: "LilouSnow",
    images: [
      {
        url: "img/seo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <Favicon />
      </head>
      <body
        className={inter.className + " select-none"}
        suppressHydrationWarning={false}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
