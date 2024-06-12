import { UserEmail } from "./user-email";

export default function Page() {
  return (
    <div className="relative flex min-h-[50svh] md:min-h-svh flex-col items-center justify-center overflow-hidden bg-neutral-1">
      <div className="max-w-xl flex flex-col items-center text-center gap-3">
        <h2 className="h5">Check your inbox</h2>
        <p className="text-lg text-zinc-500">
          We are glad, that you<>&apos;</>re with us? We<>&apos;</>ve sent you a verification email
          to the email address <UserEmail />. please check your email inbox.
        </p>
      </div>
    </div>
  );
}
