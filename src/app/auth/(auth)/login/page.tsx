import Link from "next/link";
import { Form } from "./form";

export default function Page() {
  return (
    <section className="space-y-12">
      <div className="space-y-5">
        <h1 className="h4 text-neutral-7">Log in</h1>
        <p className="text-neutral-4">
          Don<>&apos;</>t have an account yet?{" "}
          <Link href="/auth/signup" className="text-green font-semibold">
            Sign up
          </Link>
        </p>
      </div>
      <Form />
    </section>
  );
}
