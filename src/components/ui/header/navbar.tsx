import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

type NavbarProps = {
  isMenuHidden: boolean;
  isOpen: boolean;
  toggle: () => void;
};

export function Navbar({ isOpen, toggle, isMenuHidden }: NavbarProps) {
  const pathname = usePathname();

  const session = useSession();
  const user = session.data?.user;

  return (
    <nav
      aria-label="Main menu"
      aria-hidden={isMenuHidden}
      role="menu"
      className={cn(
        "absolute top-0 z-50 flex h-svh w-[80svw] flex-col self-stretch gap-5 bg-neutral-1 pb-8 pt-20 px-5 text-base font-medium md:static md:flex md:h-auto md:w-auto md:grow md:flex-row md:items-center md:gap-4 md:p-0 md:pt-0 md:backdrop-blur-none 2xl:gap-1.5",
        isOpen ? "left-0 flex animate-menu-open" : "-left-[110%] hidden animate-menu-close"
      )}
    >
      <p
        className="text-neutral-7 mr-auto hidden text-3xl font-semibold md:block"
        aria-hidden="true"
      >
        Furniro
      </p>

      <Link
        onClick={() => isOpen && toggle()}
        href="/#"
        role="menuitem"
        className={cn("border-b py-3 md:border-none", pathname === "/" && "md:text-neutral-7")}
      >
        Home
      </Link>
      <Link
        onClick={() => isOpen && toggle()}
        href="/shop#"
        role="menuitem"
        className={cn(
          "border-b py-3 md:border-none",
          pathname.startsWith("/shop") && "md:text-neutral-7"
        )}
      >
        Shop
      </Link>
      <Link
        onClick={() => isOpen && toggle()}
        href="/contact#"
        role="menuitem"
        className={cn(
          "border-b py-3 md:border-none",
          pathname.startsWith("/contact") && "md:text-neutral-7"
        )}
      >
        Contact Us
      </Link>

      {user ? (
        <>
          <Link
            onClick={() => isOpen && toggle()}
            href="/profile#"
            role="menuitem"
            className={cn(
              "flex items-center justify-between border-b border-neutral-4 py-3 text-lg text-neutral-4 mt-auto md:mt-0 md:ml-auto md:border-none"
            )}
          >
            <span className="md:hidden">Wishlist</span>{" "}
            <div className="flex items-center gap-4 text-neutral-7 md:gap-0">
              <Heart strokeWidth={2} />{" "}
              <span className="grid place-items-center rounded-full size-5 bg-neutral-7 text-xs text-neutral-1">
                {user.wishlist.length}
              </span>
            </div>
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            href="/profile#"
            role="menuitem"
            className="flex items-center justify-between border-b border-neutral-4 py-3 text-lg text-neutral-4 md:border-none"
          >
            <span className="md:hidden">Cart</span>{" "}
            <div className="flex items-center gap-4 text-neutral-7 md:gap-0">
              <ShoppingBag strokeWidth={2} />{" "}
              <span className="grid place-items-center rounded-full size-5 bg-neutral-7 text-xs text-neutral-1">
                {/* // TODO: Update the code to show the cart product count instead of wishlist product count  */}
                {user.wishlist.length}
              </span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link
            onClick={() => isOpen && toggle()}
            href="/auth/login"
            role="menuitem"
            className="mt-auto md:mt-0 md:ml-auto rounded-lg border bg-neutral-7 px-4 py-1 text-center text-neutral-1"
          >
            Log in
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            href="/auth/signup"
            role="menuitem"
            className="rounded-lg border bg-neutral-1 px-4 py-1 text-center text-neutral-7"
          >
            Sign up
          </Link>
        </>
      )}
    </nav>
  );
}
