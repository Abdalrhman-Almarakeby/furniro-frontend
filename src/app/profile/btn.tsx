"use client";

import { axios } from "@/lib/axios";
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

    const res = await axios.patch(
      `/users/${id}`,
      {
        displayName: "YYYY",
      },
      {
        headers: {
          Authorization: `Bearer ${session.tokens.accessToken}`,
        },
      }
    );

    console.log(res.data);
  }

  return <button onClick={updateName}>Update Name</button>;
}
