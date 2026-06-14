import {
  BarChart,
  Layers,
  Notifications,
  Security,
  Bolt,
  Public
} from "@mui/icons-material";
import { ArrowUpRight } from "lucide-react";

export const HomeData = {
  NavigationSection: {
    header: "Sprout",
    signupButton: { label: "GET STARTED", path: "/signup" },
    loginButton: { label: "LOG IN", path: "login" }
  },
  HeroSection: {
    header: "Track Every Asset. Miss Nothing.",
    description: [
      "Real-time crypto and NFT tracking across multiple chains.",
      "Portfolio analytics, whale alerts, and DeFi positions- unified in one precision terminal."
    ],
    signupButton: {
      label: "START TRACKING FOR FREE",
      Icon: ArrowUpRight,
      path: "/signup"
    },
    loginButton: { label: "LOG IN", path: "/login" }
  },
  FeaturesSection: {
    header: "CAPABILITIES",
    description: "EVERYTHING A SERIOUS TRADER NEEDS",
    points: [
      {
        Icon: BarChart,
        title: "Consolidated Multi-Asset Dashboard",
        description:
          "Display total portfolio balance, asset allocation percentages and 24-hour price movements for dozens of coins."
      },
      {
        Icon: Layers,
        title: "On-Demand Historical Performance Charts",
        description:
          "Price charts that load dynamically only when a user clicks on a specific assets to view its details."
      },
      {
        Icon: Notifications,
        title: "Smart Alert Engine",
        description:
          "Price Targets, whale movements, gas spikes - deliver via push, email, or Telegram the instant they trigger."
      },
      {
        Icon: Security,
        title: "Wallet Security Radar",
        description:
          "Secure authentication and authorization integrated with OpenID Connect and OAuth2.0 protocol"
      },
      {
        Icon: Bolt,
        title: "Swift and Decisive",
        description:
          "Smooth User Experience as a result from limited external calls from other services"
      },
      {
        Icon: Public,
        title: "42-Chain Coverage",
        description:
          "Ethereum, Solana, Base, Arbitrum, Polygon, Avalanche, and 36 more chains tracked natively."
      }
    ]
  },
  SetupSection: {
    header: "SETUP IN MINUTES",
    description: "HOW IT WORKS.",
    points: [
      {
        step: "01",
        title: "Create an account",
        description:
          "Sign up using a username and password, or with social login providers e.g. Google, Github etc."
      },
      {
        step: "02",
        title: "Input crypto IDs",
        description:
          "Get the 24h prices of any kind of crypto-currency coin to your liking."
      },
      {
        step: "03",
        title: "Track & Calculate Everything",
        description:
          "Your unified dashboard shows crypto in a single view, with a calculator for personal investing calculations."
      }
    ]
  },
  BannerSection: {
    header: ["START TRACKING.", "RIGHT NOW."],
    description: "Free forever. Not credit card. No KYC. Just connect and go.",
    signupButton: { label: "Create Free Account", path: "/signup" }
  },
  FooterSection: {
    header: "SPROUT",
    description:
      "The most precise crypto & NFT tracking terminal on the web. Built for traders who can't afford to miss anything.",
    copyright: [
      "© 2026 SPROUT TECHNOLOGIES INC. ALL RIGHTS RESERVED.",
      "NOT FINANCIAL ADVICE. TRACK RESPONSIBLY."
    ]
  }
};
