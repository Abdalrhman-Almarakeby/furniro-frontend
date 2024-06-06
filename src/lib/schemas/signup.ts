import { z } from "zod";

const signupSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .max(50)
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number"),
  agreeOnTerms: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must agree to the terms and conditions to sign up",
    }),
});

type SignupSchema = z.infer<typeof signupSchema>;

export { signupSchema, type SignupSchema };
