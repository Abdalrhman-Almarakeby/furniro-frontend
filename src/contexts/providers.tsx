"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryProvider } from "./query";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <QueryProvider>{children}</QueryProvider>
    </SessionProvider>
  );
}
