import { useReducer, type ChangeEvent } from "react";
import { CalculatorHandlers } from "@/libs/client/calculator";

const initialState = {
  buyPrice: 0,
  sellPrice: 0,
  royalty: 0,
  gas: 0,
  netProfit: 0,
  royaltyFee: 0,
  totalCost: 0
};

const profitReducer = (
  state: typeof initialState,
  action: { field: keyof typeof initialState; payload: string | number }
) => {
  const updatedFields = {
    ...state,
    [action.field]: Number(action.payload) || 0
  };

  const { buyPrice, sellPrice, royalty, gas } = updatedFields;

  const netProfit = CalculatorHandlers.calculateNetProfit(
    buyPrice,
    sellPrice,
    royalty,
    gas
  );
  const royaltyFee = CalculatorHandlers.calculateRoyaltyFee(sellPrice, royalty);
  const totalCost = CalculatorHandlers.calculateTotalCost(
    buyPrice,
    sellPrice,
    royalty,
    gas
  );

  return {
    ...updatedFields,
    netProfit,
    royaltyFee,
    totalCost
  };
};

export const useProfitCalculator = () => {
  const [profitState, profitDispatch] = useReducer(profitReducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    profitDispatch({
      field: e.target.name as keyof typeof initialState,
      payload: e.target.value
    });
  };

  return {
    ...profitState,
    handleInputChange
  };
};
