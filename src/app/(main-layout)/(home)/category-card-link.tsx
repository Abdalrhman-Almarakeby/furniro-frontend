import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryCardProps = LinkProps &
  HTMLAttributes<HTMLAnchorElement> & {
    category: string;
  };

export function CategoryCardLink({ category, className, ...props }: CategoryCardProps) {
  return (
    <Link
      className={cn(
        "absolute grid gap-2 bottom-6 left-6 sm:bottom-8 sm:left-8 lg:gap-3",
        className
      )}
      {...props}
    >
      <span className="h6 lg:h5">{category}</span>
      <span className="text-sm  items-center flex gap-1 font-medium border-b justify-self-start lg:text-base">
        Shop now
        <ArrowRight className="size-4 lg:size-5" />
      </span>
    </Link>
  );
}
