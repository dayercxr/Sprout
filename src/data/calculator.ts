import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export const CalculatorData = {
  title: "NFT/CryptoCurrency Market Tracker",
  description:
    "Track trending collections, analyse floor prices and monitor market caps",
  individualCalculator: [
    {
      title: "ROI Calculator",
      description: "Calculate your return on investment",
      logo: TrendingUp,
      logoColor: "#a855f7",
      inputs: [
        {
          label: "Purchase Price (ETH)",
          placeholder: "0.00",
          name: "purchasePrice"
        },
        {
          label: "Current Price (ETH)",
          placeholder: "0.00",
          name: "currentPrice"
        },
        { label: "Quantity", placeholder: "0", name: "quantity" }
      ],
      displays: ["ROI", "Profit/Loss", "Total Value"]
    },
    {
      title: "Profit Calculator",
      description: "Calculate net profit after fees",
      logo: DollarSign,
      logoColor: "#4ade80",
      inputs: [
        { label: "Buy Price (ETH)", placeholder: "0.00", name: "buyPrice" },
        { label: "Sell Price (ETH)", placeholder: "0.00", name: "sellPrice" },
        { label: "Royalty (%)", placeholder: "0", name: "royalty" },
        { label: "Gas Fee (ETH)", placeholder: "0.00", name: "gas" }
      ],
      displays: ["Net Profit", "Royalty Fee", "Total Costs"]
    },
    {
      title: "Investment Target Calculator",
      description: "Plan your investment goals",
      logo: Calculator,
      logoColor: "#60a5fa",
      inputs: [
        {
          label: "Initial Investment (ETH)",
          placeholder: "0.00",
          name: "initialInvestment"
        },
        { label: "Target Return", placeholder: "0.00", name: "targetReturn" },
        { label: "Timeframe (months)", placeholder: "0", name: "time" }
      ],
      displays: ["Target Value", "Required Growth", "Monthly Return Needed"]
    }
  ]
};
