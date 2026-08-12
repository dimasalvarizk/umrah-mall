import type { Metadata } from "next";
import { Outfit, Inter, Cairo, Manrope, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Al Madinah Gateway - Premium Umrah, Hajj & Haramain Train Booking",
  description: "Experience a seamless spiritual journey. Book exclusive Hajj & Umrah packages and reserve your Haramain highspeed train tickets with our smart, anti-gravity integrated ecosystem.",
  keywords: ["Umrah Booking", "Hajj Packages", "Haramain Train Ticket", "Makkah Madinah Train", "Islamic Travel"],
  authors: [{ name: "Al Madinah Gateway Group" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${cairo.variable} ${manrope.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-gray-100">
        {children}
      </body>
    </html>
  );
}

