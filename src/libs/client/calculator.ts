export const CalculatorHandlers = {
  // Event Handlers for ROI Calculator
  calculateROI: (
    purchasePrice: number,
    currentPrice: number,
    quantity: number
  ) => {
    const netProfit = CalculatorHandlers.calculateProfitLoss(
      purchasePrice,
      currentPrice,
      quantity
    );
    const totalPurchaseValue = purchasePrice * quantity;
    return (netProfit / totalPurchaseValue) * 100;
  },

  calculateProfitLoss: (
    purchasePrice: number,
    currentPrice: number,
    quantity: number
  ) => {
    const totalPurchaseValue = purchasePrice * quantity;
    const totalCurrentValue = CalculatorHandlers.currentTotalValue(
      currentPrice,
      quantity
    );
    return totalCurrentValue - totalPurchaseValue;
  },

  currentTotalValue: (currentPrice: number, quantity: number) => {
    return currentPrice * quantity;
  },

  calculateProfitLossPercentage: (
    purchasePrice: number,
    currentPrice: number,
    quantity: number
  ) => {
    const profit = CalculatorHandlers.calculateProfitLoss(
      purchasePrice,
      currentPrice,
      quantity
    );
    const totalPurchaseValue = purchasePrice * quantity;
    return (profit / totalPurchaseValue) * 100;
  },

  // Event Handlers for Profit Calculator
  calculateNetProfit: (
    buyPrice: number,
    sellPrice: number,
    royalty: number,
    gas: number
  ) => {
    const royaltyFee = CalculatorHandlers.calculateRoyaltyFee(
      sellPrice,
      royalty
    );
    return sellPrice - (buyPrice + royaltyFee + gas);
  },

  calculateTotalCost: (
    buyPrice: number,
    sellPrice: number,
    royalty: number,
    gas: number
  ) => {
    const royaltyFee = CalculatorHandlers.calculateRoyaltyFee(
      sellPrice,
      royalty
    );
    return buyPrice + royaltyFee + gas;
  },

  calculateRoyaltyFee: (sellPrice: number, royalty: number) => {
    return sellPrice * royalty;
  },

  // Event Handlers for Investment Target Calculator
  calculateTargetValue: (initialInvestment: number, targetReturn: number) => {
    return initialInvestment + targetReturn;
  },

  calculateRequiredGrowth: (
    initialInvestment: number,
    targetReturn: number
  ) => {
    const targetValue = CalculatorHandlers.calculateTargetValue(
      initialInvestment,
      targetReturn
    );
    return (targetValue / initialInvestment) * 100;
  },

  calculateMonthlyReturn: (
    initialInvestment: number,
    targetReturn: number,
    time: number
  ) => {
    const targetValue = CalculatorHandlers.calculateTargetValue(
      initialInvestment,
      targetReturn
    );
    return targetValue / time;
  }
};
