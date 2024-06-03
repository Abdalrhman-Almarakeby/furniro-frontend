import { JWT } from "next-auth/jwt";
import { axios } from "@/lib/axios";
import { BackendTokens } from "@/types";

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
