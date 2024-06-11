"use client";

import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useMenu } from "./use-menu";
import { useShowHeader } from "./use-show-header";
import { UserAvatar } from "./user-avatar";
import { Navbar } from "./navbar";

export function Header() {
  const { isOpen, toggle, isMenuHidden } = useMenu();
  const showHeader = useShowHeader();

  return (
    <header
      className={cn(
        "fixed left-0 z-40 w-full mx-auto flex items-center justify-between bg-white px-4 text-base text-neutral-7 transition-[top] duration-300 md:static md:container md:flex md:justify-end md:gap-4 md:py-5 md:text-neutral-4 2xl:text-lg",
        showHeader ? "top-0" : "-top-full md:top-0"
      )}
    >
      <div className="z-[99999] flex items-center gap-2 md:hidden">
        <button
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle menu"
          onClick={toggle}
          className="py-5"
        >
          {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
          <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
        </button>
        <p className="text-xl font-semibold md:sr-only">Furniro</p>
      </div>
      <Navbar isOpen={isOpen} toggle={toggle} isMenuHidden={isMenuHidden} />
      <UserAvatar />
    </header>
  );
}
