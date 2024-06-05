import Link from "next/link";
import { Input } from "@/components/form/input";
import { Checkbox } from "@/components/form/checkbox";

export default function Page() {
  return (
    <form className="space-y-12">
      <div className="space-y-5">
        <h1 className="h4 text-neutral-7">Sing up</h1>
        <p className="text-neutral-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-green font-semibold">
            Log in
          </Link>
        </p>
      </div>

      <div className="space-y-10">
        <Input placeholder="First Name" type="text" />
        <Input placeholder="Last Name" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <div className="flex gap-3 items-center">
          <Checkbox />{" "}
          <p className="text-neutral-4 text-xs">
            I agree with{" "}
            <Link href="TODO:" className="text-neutral-7 font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="TODO:" className="text-neutral-7 font-semibold">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>

      <button type="submit" className="w-full bg-neutral-7 text-white py-2.5 rounded-lg">
        Sign up
      </button>
    </form>
  );
}
