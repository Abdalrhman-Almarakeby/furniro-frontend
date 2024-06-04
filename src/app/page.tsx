"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session && session.user) {
    return (
      <>
        <p>{session.user.displayName}</p>
        <button onClick={() => signOut()}>Sing out</button>
        <br />
        <Link href={"/profile"}>Profile</Link>
      </>
    );
  }

  return (
    <div className="text-red-900">
      <Link href={"/auth/login"}>Sing in</Link>
      <br />
      <Link href={"/auth/signup"}>Sing up</Link>
    </div>
  );
}
