import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, signupSchema } from "@/lib/schemas/signup";
import { signup } from "@/services/auth";
import { useUserEmail } from "@/contexts/user-email";

export function useSignup() {
  const { setUserEmail } = useUserEmail();
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

    const user = await signup(rest);

    setUserEmail(user.email);
    reset();

    router.push("/auth/verify-email");
  }

  return { register, errors, isSubmitting, handleSubmit: handleSubmit(onSubmit) };
}
