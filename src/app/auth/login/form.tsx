"use client";

import Link from "next/link";
import { Input } from "@/components/form/input";
import { useLogin } from "./useLogin";

export function Form() {
  const { register, errors, isSubmitting, handleSubmit, logInError } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {!!logInError && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {logInError}
        </p>
      )}
      <div className="space-y-10">
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
        <Link href="/#" className="block font-semibold">
          Forget Password?
        </Link>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neutral-7 text-neutral-1 py-2.5 rounded-lg disabled:bg-neutral-5"
      >
        Log in
      </button>
    </form>
  );
}
