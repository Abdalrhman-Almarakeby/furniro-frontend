import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Btn } from "./btn";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return "2";
  }

  const { profileImage, displayName, firstName, lastName, email, id } = session.user;

  // Azfluyfljhgljglkjglkjhg
  return (
    <div>
      <img src={profileImage} alt="" />
      <p>Display Name: {displayName}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
      <Btn id={id} />
    </div>
  );
}
