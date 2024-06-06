import Image from "next/image";
import { ReactNode } from "react";
import { UserEmailContextProvider } from "@/contexts/user-email";
import img from "@/assets/imgs/auth-page-background.png";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative h-full" aria-hidden="true">
        <Image
          src={img}
          alt=""
          placeholder="blur"
          quality={100}
          priority={true}
          className="object-cover w-full h-[50svh] select-none md:min-h-svh"
        />
        <span
          className="text-black absolute top-5 left-1/2 -translate-x-1/2 font-medium text-3xl"
          aria-label="Furniro"
        >
          Furniro
        </span>
      </div>
      <div className="container max-w-md" role="main">
        <UserEmailContextProvider>{children}</UserEmailContextProvider>
      </div>
    </section>
  );
}
