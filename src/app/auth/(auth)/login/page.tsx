import Link from "next/link";
import { Input } from "@/components/form/input";

export default function Page() {
  return (
    <form className="space-y-12">
      <div className="space-y-5">
        <h1 className="h4 text-neutral-7">Log in</h1>
        <p className="text-neutral-4">
          Don<>&apos;</>t have an account yet?{" "}
          <Link href="/auth/signup" className="text-green font-semibold">
            Sign up
          </Link>
        </p>
      </div>

      <div className="space-y-10">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Link href="TODO:" className="block font-semibold">
          Forget Password?
        </Link>
      </div>

      <button type="submit" className="w-full bg-neutral-7 text-white py-2.5 rounded-lg">
        Log in
      </button>
    </form>
  );
}
