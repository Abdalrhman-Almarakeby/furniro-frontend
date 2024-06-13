import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoginSchema, loginSchema } from "@/lib/schemas";

export function useLogin() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const err = searchParams.get("error");

  useEffect(() => {
    if (err) {
      setErrorMessage(err);
    }
  }, [err]);

  const { mutateAsync } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
    onSuccess: () => {
      router.push(searchParams.get("callbackUrl") || "/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    await mutateAsync(data);
  }

  return {
    register,
    errors,
    isSubmitting,
    handleSubmit: handleSubmit(onSubmit),
    logInError: errorMessage,
  };
}
