import { Box } from "@mui/material";
import { AuthServerHandler } from "@/libs/auth/auth-server";
import { NavigationSection } from "@/components/home/nav";
import { HeroSection } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features";
import { SetupSection } from "@/components/home/setup";
import { BannerSection } from "@/components/home/banner";
import { Navbar } from "@/components/general/navbar";

export default async function Home() {
  const session = await AuthServerHandler.getSession();

  return (
    <Box>
      {session ? <Navbar /> : <NavigationSection />}
      <HeroSection />
      <FeaturesSection />
      <SetupSection />
      <BannerSection />
    </Box>
  );
}
