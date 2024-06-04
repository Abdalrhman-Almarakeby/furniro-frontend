import Image from "next/image";
import { ReactNode } from "react";
import img from "@/assets/imgs/auth-page-background.png";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="grid grid-cols-2">
      <div className="relative">
        <Image
          src={img}
          alt="TODO:"
          placeholder="blur"
          quality={100}
          priority={true}
          className="object-cover w-full h-svh select-none"
        />
        <span
          aria-hidden="true"
          className="text-black absolute top-5 left-1/2 -translate-x-1/2 font-medium text-2xl"
        >
          Furniro
        </span>
      </div>
      <div className="container">{children}</div>
    </section>
  );
}
