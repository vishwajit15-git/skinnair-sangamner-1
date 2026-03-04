import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Skin & Hair Specialist in Sangamner | Dr. Dayama's Skinnair",
  description:
    "Dr. Dayama's Skinnair offers expert dermatology, hair regrowth, acne, pigmentation, and laser treatments in Sangamner, Maharashtra. Root-cause approach for lasting results.",
  keywords:
    "dermatologist Sangamner, skin specialist, hair regrowth, acne treatment, pigmentation, laser therapy, Dr Dayama, Skinnair",
  authors: [{ name: "Dr. Pravin Dayama" }],
  openGraph: {
    title: "Dr. Dayama's Skinnair – Expert Skin & Hair Care in Sangamner",
    description:
      "Root-cause treatments for lasting skin health & hair regrowth. Visit Sangamner's trusted dermatology clinic.",
    type: "website",
    locale: "en_IN",
    siteName: "Skinnair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dayama's Skinnair – Expert Skin & Hair Care",
    description:
      "Trusted dermatology clinic in Sangamner offering advanced skin & hair treatments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Dr. Dayama's Skinnair",
              description:
                "Expert dermatology and hair care clinic in Sangamner, Maharashtra",
              url: "https://skinnair.in",
              telephone: "+919049884354",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kaushalyam Building, New Nagar Road",
                addressLocality: "Sangamner",
                addressRegion: "Maharashtra",
                postalCode: "422605",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.5685",
                longitude: "74.2098",
              },
              medicalSpecialty: "Dermatology",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Hair Regrowth Therapy",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Acne & Pigmentation Treatment",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Laser Hair Removal",
                },
              ],
              openingHours: "Mo-Sa 10:00-20:00",
              image: "/images/clinic.jpg",
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
