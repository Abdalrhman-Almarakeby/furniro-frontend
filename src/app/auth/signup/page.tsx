import Link from "next/link";
import { Suspense } from "react";
import { Form } from "./form";

export default function Page() {
  return (
    <section className="space-y-12 my-6 lg:my-10">
      <div className="space-y-5">
        <h1 className="h4">Sing up</h1>
        <p className="text-neutral-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-accent-green font-semibold">
            Log in
          </Link>
        </p>
      </div>
      <Suspense fallback="loading...">
        <Form />
      </Suspense>
    </section>
  );
}
