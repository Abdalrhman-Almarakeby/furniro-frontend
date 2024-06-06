export default function Page() {
  return (
    <div className="relative flex min-h-[50svh] md:min-h-svh flex-col items-center justify-center overflow-hidden bg-white">
      <div className="max-w-xl flex flex-col items-center text-center gap-3">
        <h2 className="h5 text-neutral-7">Check your inbox</h2>
        <p className="text-lg text-zinc-500">
          We are glad, that you<>&apos;</>re with us? We<>&apos;</>ve sent you a verification email
          to the email address{" "}
          <span className="font-medium text-accent-blue">mail@yourdomain.com</span>. please check
          your email inbox.
        </p>
      </div>
    </div>
  );
}
