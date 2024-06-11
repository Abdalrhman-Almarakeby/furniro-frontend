"use client";

import { signOut } from "next-auth/react";

export function SignoutBtn() {
  return <button onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>Log out</button>;
}
