import {
  LayoutDashboard,
  Calculator,
  Star,
  Home,
  CircleUser
} from "lucide-react";

export const NavbarData = {
  menu: [
    { path: "/profile", label: "Profile", Icon: CircleUser },
    { path: "/", label: "Home", Icon: Home }
  ],
  navigation: [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/calculator", label: "Calculator", icon: Calculator },
    { path: "/watchlist", label: "Watchlist", icon: Star }
  ]
};
