import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-7 text-center text-neutral-3 text-sm">
      <div className="container divide-y divide-neutral-4 flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col items-center gap-9 lg:flex-row lg:divide-x lg:gap-5 lg:divide-neutral-4">
            <h3 className="relative text-3xl font-semibold after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:h-[1px] after:w-10 after:bg-neutral-4 lg:after:hidden">
              Furniro
            </h3>
            <p className="lg:pl-5">Furniture & Decoration Store</p>
          </div>
          <nav className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:ml-auto">
            <Link href="/#" className="px-5 py-2">
              Home
            </Link>
            <Link href="/shop#" className="px-5 py-2">
              Shop
            </Link>
            <Link href="/contact#" className="px-5 py-2">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center gap-7 py-4 md:flex-row md:justify-center">
          <div className="flex items-center gap-4 md:order-last lg:ml-auto">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-2 py-2">
              <span className="sr-only">Instagram</span>
              <Instagram size={24} color="#ffffff" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Facebook</span>
              <Facebook size={24} color="#ffffff" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Youtube</span>
              <Youtube size={24} color="#ffffff" />
            </a>
          </div>
          <div className="space-x-7 font-semibold md:order-2">
            <Link href="/privacy-policy#">Privacy Policy</Link>
            <Link href="/terms-of-use#">Terms Of Use</Link>
          </div>
          <p>Copyright © {year} Furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
