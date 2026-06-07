import { AuthServerHandler } from "@/libs/auth/auth-server";
import Login from "@/components/login/login";

export default async function LoginPage() {
  await AuthServerHandler.redirectAuth();

  return <Login />;
}
