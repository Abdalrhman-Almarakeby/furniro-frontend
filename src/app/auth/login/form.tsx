"use client";

import { Input } from "@/components/form/input";
import Link from "next/link";
import { useLogin } from "./useLogin";

export function Form() {
  const { register, errors, isSubmitting, handleSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
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
        <Link href="TODO:" className="block font-semibold">
          Forget Password?
        </Link>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neutral-7 text-white py-2.5 rounded-lg disabled:bg-neutral-5"
      >
        Log in
      </button>
    </form>
  );
}
