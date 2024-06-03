import NextAuth from "next-auth";
import { User } from "../user";
import { BackendTokens } from "../backend-tokens";

declare module "next-auth" {
  interface Session {
    user: User;
    tokens: BackendTokens;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    tokens: BackendTokens;
  }
}
