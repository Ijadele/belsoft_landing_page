import localFont from "next/font/local";
import "./globals.css";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ["cyrillic-ext","cyrillic",'latin'], // Include subsets like 'latin', 'latin-ext', etc.
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#FDF7FF]`}
      >
        {children}
      </body>
    </html>
  );
}
