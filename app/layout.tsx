export const metadata = {
  title: "AInnova Kisler",
  description: "Automatización inteligente con n8n.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ainnova-kisler.vercel.app/",
    site_name: "AInnova Kisler",
    images: [
      {
        url: "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745031254/images/9eb0b1f7bb074080d9ce73a549f1a6c6_h1dfuj.jpg",
        width: 1200,
        height: 630,
        alt: "AInnova Kisler",
      },
    ],
  },
  twitter: {
    handle: "@ekracing",
    site: "@ekracing",
    cardType: "summary_large_image",
  },
};

import { montserrat } from "./ui/fonts";
import "@/app/ui/global.css";
import { ConfigProvider } from "antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
