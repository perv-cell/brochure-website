import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from '@/components/top-banner/Banner'
import Footer from '@/components/footere/Footer';
import Navbar from '@/components/navbar/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,


  openGraph: {
    title: process.env.NEXT_PUBLIC_APP_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: process.env.NEXT_PUBLIC_AUTHOR_SITE,
    images: [
      {
        url: 'https://persolution.ru/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'PerSolution',
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
