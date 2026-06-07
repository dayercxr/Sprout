import { AuthServerHandler } from "@/libs/auth/auth-server";
import Signup from "@/components/signup/signup";

export default async function SignupPage() {
  await AuthServerHandler.redirectAuth();

  return <Signup />;
}
