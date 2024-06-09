"use client";

import { useState, useId, forwardRef, InputHTMLAttributes, HTMLInputTypeAttribute } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> & {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, type, error, ...props }, ref) => {
    const isPasswordInput = type === "password";
    const [isInputVisible, setIsInputVisible] = useState<boolean>(!isPasswordInput);
    const passwordInputType = isInputVisible ? "text" : "password";

    const id = useId();

    return (
      <div className="space-y-2">
        <div className="relative w-full">
          <input
            ref={ref}
            id={id}
            // placeholder has to exist (at least as space) to use the placeholder-shown pseudo class
            // to simulate the placeholder behavior in the label element
            placeholder=" "
            type={isPasswordInput ? passwordInputType : type}
            aria-label={placeholder}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className={cn(
              "peer w-full border-b border-neutral-4 py-1 transition-colors bg-inherit focus:border-neutral-7 focus:outline-none",
              className
            )}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              "absolute left-0 -top-4 cursor-text text-xs text-neutral-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:font-medium peer-focus:text-neutral-7"
            )}
          >
            {placeholder}
          </label>
          {isPasswordInput && (
            <button
              type="button"
              onClick={() => setIsInputVisible((prev) => !prev)}
              aria-label={isInputVisible ? "Hide password" : "Show password"}
              className="absolute right-0 top-1/2 -translate-y-1/2"
              tabIndex={0}
            >
              {isInputVisible ? (
                <EyeOff color="#6c7275" size={18} />
              ) : (
                <Eye color="#6c7275" size={18} />
              )}
            </button>
          )}
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

Input.displayName = "Input";
