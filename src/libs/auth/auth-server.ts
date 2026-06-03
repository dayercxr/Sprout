import { auth } from "@/libs/auth/index";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const AuthServerHandler = {
  getSession: async () => {
    return await auth.api.getSession({ headers: await headers() });
  },

  requireAuth: async () => {
    const session = await AuthServerHandler.getSession();
    if (!session) redirect("/login");
    return session;
  }
};
