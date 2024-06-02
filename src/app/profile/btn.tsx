"use client";

import { useSession } from "next-auth/react";

export function Btn({ id }: { id: string }) {
  const { data: session } = useSession();

  if (!session) {
    return "2sdg";
  }

  async function updateName() {
    if (!session) {
      return "1";
    }
    const res = await fetch(`https://furniro-b92o.onrender.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        displayName: "YYYY",
      }),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${session.tokens.accessToken}`,
      },
    });

    const data = await res.json();

    console.log(data);
  }

  return <button onClick={updateName}>Update Name</button>;
}
