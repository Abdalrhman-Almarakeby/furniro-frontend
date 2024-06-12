import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "role"> & {
  label: ReactNode;
  error?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    const id = useId();

    return (
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="relative size-6 rounded-[4px] border">
            <input
              type="checkbox"
              role="checkbox"
              ref={ref}
              id={id}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : undefined}
              aria-labelledby={`${id}-label`}
              className={cn(
                "peer size-full appearance-none ring-offset-neutral-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-neutral-7",
                className
              )}
              {...props}
            />
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden size-4 items-center justify-center peer-checked:flex"
              aria-hidden="true"
            >
              <Check size={20} strokeWidth={3} color="#ffffff" />
            </span>
          </div>
          <label id={`${id}-label`} htmlFor={id} className="text-xs text-neutral-4">
            {label}
          </label>
        </div>
        {!!error && (
          <p id={`${id}-error`} className="text-xs font-medium text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
