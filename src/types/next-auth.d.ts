import NextAuth from "next-auth";
import { User } from "./user";

declare module "next-auth" {
  interface Session {
    user: User;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
