import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch("https://furniro-b92o.onrender.com/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.tokens.refreshToken}`,
    },
  });

  const tokens = await res.json();

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

        const res = await fetch("https://furniro-b92o.onrender.com/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.status !== 201) {
          console.log(res);
          return null;
        }

        const user = await res.json();

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
