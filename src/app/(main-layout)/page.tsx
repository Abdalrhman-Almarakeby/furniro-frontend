"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) {
    return (
      <div className=" h-[1000px]">
        <Link href={"/auth/login"}>Log in</Link>
        <br />
        <Link href={"/auth/signup"}>Sign up</Link>
        <br />
        <Link href={"/profile"}>Profile</Link>
      </div>
    );
  }

  return (
    <div className="h-[1000px]">
      <p>{user.displayName}</p>
      <button onClick={() => signOut()}>Sing out</button>
      <br />
      <Link href={"/profile"}>Profile</Link>
    </div>
  );
}
