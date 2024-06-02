"use client";

import { useSession } from "next-auth/react";
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
        <Link href={"/api/auth/signout"}>Sing out</Link>
        <br />
        <Link href={"/profile"}>Profile</Link>
      </>
    );
  }

  return (
    <>
      <Link href={"/api/auth/signin"}>Sing in</Link>
      <br />
      <Link href={"/signup"}>Sing up</Link>
    </>
  );
}
