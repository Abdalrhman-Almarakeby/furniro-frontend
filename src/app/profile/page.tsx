import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { Btn } from "./btn";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return "2";
  }

  const { profileImage, displayName, firstName, lastName, email, id } = session.user;

  return (
    <div>
      <Image src={profileImage} alt="profile image" />
      <p>Display Name: {displayName}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
      <Btn id={id} />
    </div>
  );
}
