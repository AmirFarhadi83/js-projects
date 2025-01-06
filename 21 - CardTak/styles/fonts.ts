import localFont from "next/font/local";

export const yekan = localFont({
  src: "./../public/fonts/Far_Yekan.ttf",
  variable: "--font-yekan",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const geistSans = localFont({
  src: "./../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
