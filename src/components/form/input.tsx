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
        <div className="relative w-full ">
          <input
            ref={ref}
            id={id}
            // placeholder has to exist (at least as space) to use the placeholder-shown pseudo class
            // to simulate the placeholder behavior in the label element
            placeholder=" "
            type={isPasswordInput ? passwordInputType : type}
            aria-label={placeholder}
            className={cn(
              "peer w-full border-b border-neutral-4 py-1 transition-colors bg-inherit focus:outline-none focus:border-neutral-7",
              className
            )}
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              "absolute text-neutral-4 left-0 cursor-text text-xs -top-4 transition-all peer-focus:text-neutral-7 peer-focus:font-medium peer-placeholder-shown:top-1 peer-placeholder-shown:text-base"
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
            >
              {isInputVisible ? (
                <EyeOff color="#6c7275" size={18} />
              ) : (
                <Eye color="#6c7275" size={18} />
              )}
            </button>
          )}
        </div>
        {!!error && <p className="text-xs font-medium text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
