import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tisstudio.baby"),
  title: "Nhiếp Ảnh Newborn | Ảnh Gia Đình & Em Bé Vượt Thời Gian",
  description:
    "Nhiếp ảnh gia newborn chuyên tạo ra những bức ảnh gia đình và em bé vượt thời gian với ánh sáng mềm mại. Tạo dáng nhẹ nhàng, ánh sáng tự nhiên và chất lượng kỷ vật.",
  authors: [{ name: "TIS Studio" }],
  alternates: {
    canonical: "/",
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "Nhiếp Ảnh Newborn | Ảnh Gia Đình & Em Bé Vượt Thời Gian",
    description:
      "Nhiếp ảnh newborn mềm mại, tự nhiên cho gia đình bạn. Ghi lại những ngày đầu đời với sự chăm sóc và nghệ thuật.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TIS Studio - Nhiếp Ảnh Newborn",
              url: "https://www.tisstudio.baby/",
              image: "https://www.tisstudio.baby/opengraph-image.png",
              description:
                "Nhiếp ảnh gia newborn và gia đình chuyên tạo ra những bức ảnh chân dung vượt thời gian với ánh sáng mềm mại.",
              areaServed: "Việt Nam",
              priceRange: "$$$",
              sameAs: [
                "https://www.facebook.com/StudioTis",
                "https://www.instagram.com/chunam.photography.newborn/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
