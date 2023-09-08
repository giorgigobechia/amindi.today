import "../../src/common/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
// import { NextIntlClientProvider, useLocale } from "next-intl";
import Sidebar from "@/common/components/__organisms/Sidebar";
import localFont from "@next/font/local";
import Providers from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const FiraGO = localFont({
  src: [
    {
      path: "../../public/fonts/FiraGO-UltraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/FiraGO-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/FiraGO-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/FiraGO-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/FiraGO-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/FiraGO-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-firago",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${poppins.className} bg-[#F6F6F6] dark:bg-[#121212]`}>
        <Providers>
          <div className="w-screen h-screen md:p-3 xxl:p-6 flex md:gap-3 xxl:gap-6 overflow-hidden">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
