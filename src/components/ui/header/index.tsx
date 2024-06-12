"use client";

import { cn } from "@/lib/utils/cn";
import { useMenu } from "./use-menu";
import { useShowHeader } from "./use-show-header";
import MenuBtn from "./menu-btn";
import { Navbar } from "./navbar";
import { UserAvatar } from "./user-avatar";

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
      <MenuBtn isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle} isMenuHidden={isMenuHidden} />
      <UserAvatar />
    </header>
  );
}
