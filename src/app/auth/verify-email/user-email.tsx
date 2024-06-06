"use client";

import { useUserEmail } from "@/contexts/user-email";

export function UserEmail() {
  const { userEmail } = useUserEmail();

  return <span className="font-medium text-accent-blue">{userEmail}</span>;
}
