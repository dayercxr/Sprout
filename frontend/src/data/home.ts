import {
  ArrowUpRight,
  BarChartBig,
  Bell,
  CloudLightning,
  ShieldAlert,
  Layers,
  Earth,
  ChevronRight
} from "lucide-react";

export const HomeData = {
  NavigationSection: {
    header: "Sprout",
    signupButton: "GET STARTED",
    loginButton: "LOG IN"
  },
  HeroSection: {
    header: "Track Every Asset. Miss Nothing.",
    description: [
      "Real-time crypto and NFT tracking across multiple chains.",
      "Portfolio analytics, whale alerts, and DeFi positions- unified in one precision terminal."
    ],
    signupButton: { label: "START TRACKING FREE", Icon: ArrowUpRight },
    loginButton: { label: "LOG IN" }
  },
  CapabilitiesSection: {
    header: "CAPABILITIES",
    description: "EVERYTHING A SERIOUS TRADER NEEDS",
    points: [
      {
        ICON: BarChartBig,
        title: "Real-Time Price Feeds",
        description: "Data from exchanges"
      },
      {
        ICON: Layers,
        title: "NFT Portfolio Tracking",
        description:
          "Monitor floor prices, rarity scores, and collection volume across OpenSea, Blur, Magic Eden and more."
      },
      {
        ICON: Bell,
        title: "Smart Alert Engine",
        description:
          "Price Targets, whale movements, gas spikes - deliver via push, email, or Telegram the instant they trigger."
      },
      {
        ICON: ShieldAlert,
        title: "Wallet Security Radar",
        description:
          "Detect approval risks, phishing contracts, and drainer activity before your assets are at risk."
      },
      {
        ICON: CloudLightning,
        title: "Defi Position Monitor",
        description:
          "Aggregate your yield, LP positions, staking rewards, and health factors across every protocol."
      },
      {
        ICON: Earth,
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
      { ICON: "01", title: "", description: "" },
      { ICON: "02", title: "", description: "" },
      { ICON: "03", title: "", description: "" }
    ]
  },
  BannerSection: {
    header: ["START TRACKING.", "RIGHT NOW."],
    description: "Free forever. Not credit card. No KYC. Just connect and go.",
    signupButton: { label: "Create Free Account", ICON: ChevronRight }
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
