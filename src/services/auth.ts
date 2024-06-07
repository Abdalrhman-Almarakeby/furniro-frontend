import { JWT } from "next-auth/jwt";
import { axios } from "@/lib/axios";
import { BackendTokens, User } from "@/types";
import { SignupSchema } from "@/lib/schemas";

export async function signup(signupData: Omit<SignupSchema, "agreeOnTerms">) {
  const { data } = await axios.post<User>("/auth/register", signupData);
  return data;
}

export async function refreshToken(token: JWT): Promise<JWT> {
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
