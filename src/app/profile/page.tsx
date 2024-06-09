import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return redirect("/auth/login");
  }

  const { displayName, firstName, lastName, email, id } = user;

  return (
    <div>
      <p>ID: {id}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Display Name: {displayName}</p>
      <p>Email: {email}</p>
    </div>
  );
}
