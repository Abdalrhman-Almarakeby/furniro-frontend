import { axios } from "@/lib/axios";
import { BackendTokens } from "@/types";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const { data: tokens } = await axios.post<BackendTokens>("/auth/refresh", {
    headers: {
      authorization: `Refresh ${token.tokens.refreshToken}`,
    },
  });

  return {
    ...token,
    tokens,
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter a strong Password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { email, password } = credentials;
        const res = await axios.post("/auth/login", { email, password });

        console.log(res.data);

        if (res.status !== 201) {
          console.log(res.data);
          return null;
        }

        const user = await res.data;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }

      const currentTimeMs = new Date().getTime();

      if (currentTimeMs < token.tokens.expiresIn) return token;

      return refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.tokens = token.tokens;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
