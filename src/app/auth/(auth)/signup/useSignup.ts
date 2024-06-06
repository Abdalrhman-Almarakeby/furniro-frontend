import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, signupSchema } from "@/lib/schemas/signup";
import { signup } from "@/services/auth";

export function useSignup() {
  const router = useRouter();

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

    await signup(rest);

    reset();

    router.push("/auth/verify-email");
  }

  return { register, errors, isSubmitting, handleSubmit: handleSubmit(onSubmit) };
}
