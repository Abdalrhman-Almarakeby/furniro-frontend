import { LoginSchema, loginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export function useLogin() {
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    await signIn("credentials", {
      ...data,
      redirect: true,
      callbackUrl: searchParams.get("callbackUrl") || "/",
    });
  }

  return { register, errors, isSubmitting, handleSubmit: handleSubmit(onSubmit) };
}
