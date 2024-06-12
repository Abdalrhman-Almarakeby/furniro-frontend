import Image from "next/image";
import { ReactNode } from "react";
import { UserEmailContextProvider } from "@/contexts/user-email";
import img from "@/assets/imgs/auth-page-background.png";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative h-full">
        <Image
          src={img}
          alt=""
          placeholder="blur"
          quality={100}
          priority={true}
          aria-hidden="true"
          className="object-cover w-full h-[50svh] select-none md:min-h-svh"
        />
        <Link
          href="/#"
          className="absolute top-5 left-1/2 -translate-x-1/2 text-3xl font-semibold"
          aria-label="Go back to home page"
        >
          Furniro
        </Link>
      </div>
      <div className="container max-w-md px-6" role="main">
        <UserEmailContextProvider>{children}</UserEmailContextProvider>
      </div>
    </section>
  );
}
