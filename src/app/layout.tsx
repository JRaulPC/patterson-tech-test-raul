import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rick and Morty Character Picker",
  description: "A Character picker from the Rick and Morty animated series",
  openGraph: {
    title: "Rick and Morty App",
    description: "Find your favorite characters and episodes.",
    url: "https://patterson-tech-test.vercel.app/",
    images: [
      {
        url: "https://helios-i.mashable.com/imagery/articles/02ECFkvX2rDslH0mE5qXQGn/images-1.fill.size_2000x1125.v1662140047.png", // External image URL
        width: 1200,
        height: 630,
        alt: "Rick and Morty Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick and Morty App",
    description: "Find your favorite characters and episodes.",
    images: [
      "https://helios-i.mashable.com/imagery/articles/02ECFkvX2rDslH0mE5qXQGn/images-1.fill.size_2000x1125.v1662140047.png", // Same external image can be used for Twitter
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
