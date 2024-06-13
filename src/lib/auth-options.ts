import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { isAxiosError } from "axios";
import { axios } from "@/lib/axios";
import { refreshToken } from "@/services/auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
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

        try {
          const res = await axios.post("/auth/login", {
            email,
            password,
          });

          const isOk = res.status.toString().startsWith("2");
          if (isOk && res.data) {
            return res.data;
          } else {
            throw new Error(res.data.message || "Some thing went wrong please try agin later");
          }
        } catch (error) {
          throw new Error(
            isAxiosError(error)
              ? error.response?.data.message
              : "Some thing went wrong please try later"
          );
        }
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
    error: "/auth/login",
    verifyRequest: "/auth/verify-email",
  },
};
