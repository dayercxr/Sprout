import {
  ArrowUpRight,
  BarChartBig,
  Bell,
  CloudLightning,
  ShieldAlert,
  Layers,
  Earth
} from "lucide-react";

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
        Icon: BarChartBig,
        title: "Real-Time Price Feeds",
        description: "Data from exchanges"
      },
      {
        Icon: Layers,
        title: "NFT Portfolio Tracking",
        description:
          "Monitor floor prices, rarity scores, and collection volume across OpenSea, Blur, Magic Eden and more."
      },
      {
        Icon: Bell,
        title: "Smart Alert Engine",
        description:
          "Price Targets, whale movements, gas spikes - deliver via push, email, or Telegram the instant they trigger."
      },
      {
        Icon: ShieldAlert,
        title: "Wallet Security Radar",
        description:
          "Detect approval risks, phishing contracts, and drainer activity before your assets are at risk."
      },
      {
        Icon: CloudLightning,
        title: "Defi Position Monitor",
        description:
          "Aggregate your yield, LP positions, staking rewards, and health factors across every protocol."
      },
      {
        Icon: Earth,
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
        title: "Connect Wallets",
        description: "Paste any wallet address or connect via WalletConnect."
      },
      {
        step: "02",
        title: "Configure Alerts",
        description:
          "Set price targets, whale movements thresholds, and NFT floor triggers."
      },
      {
        step: "03",
        title: "Track Everything",
        description:
          "Your unified dashboard shows crypto. NFTs, DeFi positions and real P&L in a single live view."
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
