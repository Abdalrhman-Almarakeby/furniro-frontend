import Link from "next/link";
import { Providers } from "@/contexts/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <Link href="/">Home</Link>
            <br />

            <Link href="/profile">Profile</Link>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
