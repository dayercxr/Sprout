import { AuthServerHandler } from "@/libs/auth/auth-server";
import { Box } from "@mui/material";

export default async function Profile() {
  await AuthServerHandler.requireAuth();

  return <Box></Box>;
}
