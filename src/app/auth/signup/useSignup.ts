import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { SignupSchema, signupSchema } from "@/lib/schemas";
import { signup } from "@/services/auth";
import { useUserEmail } from "@/contexts/user-email";

export function useSignup() {
  const { setUserEmail } = useUserEmail();
  const router = useRouter();

  const { mutateAsync, error } = useMutation({
    mutationFn: signup,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: SignupSchema) {
    const { agreeOnTerms, ...rest } = data;

    const user = await mutateAsync(rest);

    reset();
    setUserEmail(user.email);
    router.push("/auth/verify-email");
  }

  const signupError = isAxiosError(error) ? error.response?.data.message : error?.message;

  return {
    register,
    errors,
    isSubmitting,
    handleSubmit: handleSubmit(onSubmit),
    signupError,
  };
}
