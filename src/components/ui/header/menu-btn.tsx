import { Menu, X } from "lucide-react";

type MenuBtnProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function MenuBtn({ isOpen, toggle }: MenuBtnProps) {
  return (
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
  );
}
