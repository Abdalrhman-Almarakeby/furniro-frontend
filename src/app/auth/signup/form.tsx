"use client";

import Link from "next/link";
import { useSignup } from "./useSignup";
import { Input } from "@/components/form/input";
import { Checkbox } from "@/components/form/checkbox";

export function Form() {
  const { register, errors, isSubmitting, handleSubmit } = useSignup();

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="space-y-10">
        <Input
          {...register("firstName")}
          error={errors.firstName?.message?.toString()}
          placeholder="First Name"
          type="text"
        />
        <Input
          {...register("lastName")}
          error={errors.lastName?.message?.toString()}
          placeholder="Last Name"
          type="text"
        />
        <Input
          {...register("email")}
          error={errors.email?.message?.toString()}
          placeholder="Email"
          type="email"
        />
        <Input
          {...register("password")}
          error={errors.password?.message?.toString()}
          placeholder="Password"
          type="password"
        />
      </div>
      <Checkbox
        {...register("agreeOnTerms")}
        label={
          <>
            I agree with{" "}
            <Link href="/privacy-policy#" className="text-neutral-7 font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-use#" className="text-neutral-7 font-semibold">
              Terms of Use
            </Link>
          </>
        }
        error={errors.agreeOnTerms?.message?.toString()}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neutral-7 text-neutral-1 py-2.5 rounded-lg disabled:bg-neutral-5"
      >
        Sign up
      </button>
    </form>
  );
}
