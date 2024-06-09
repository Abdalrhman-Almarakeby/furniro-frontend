import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export function UserAvatar() {
  const session = useSession();
  const user = session.data?.user;

  return user ? (
    <Link href="/profile">
      <Image src={user.profileImage} alt={`${user.displayName} profile image`} className="size-8" />
      <div className="sr-onl">Go to profile</div>
    </Link>
  ) : (
    <div className="space-x-4 text-sm md:hidden">
      <Link
        href="/auth/login"
        className="rounded-lg border border-neutral-7 bg-neutral-7 py-2 px-4 text-white"
      >
        Log in
      </Link>
      <Link
        href="/auth/signup"
        className="rounded-lg border border-neutral-7 bg-white py-2 px-4 text-neutral-7"
      >
        Sign up
      </Link>
    </div>
  );
}
