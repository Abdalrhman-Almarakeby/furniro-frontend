import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Providers } from "@/contexts/providers";

import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

const poppins = Poppins({
  weight: ["400", "500"],
  style: "normal",
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
