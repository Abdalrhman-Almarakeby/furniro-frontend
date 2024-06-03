import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { axios } from "@/lib/axios";
import { refreshToken } from "@/services/auth";

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

        const { data: session, status } = await axios.post("/auth/login", {
          email,
          password,
        });

        if (status !== 201) {
          return null;
        }

        return session;
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
  pages: {
    signIn: "/auth/login",
  },
};
