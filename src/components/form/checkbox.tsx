import { forwardRef, InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "role">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative size-6 border-neutral-7  border rounded-[4px]">
        <input
          type="checkbox"
          role="checkbox"
          ref={ref}
          className={cn(
            "peer size-full appearance-none ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-neutral-7",
            className
          )}
          {...props}
        />
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center peer-checked:flex"
          aria-hidden="true"
        >
          <Check size={20} strokeWidth={3} color="#ffffff" />
        </span>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
