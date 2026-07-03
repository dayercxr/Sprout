import { useReducer, type ChangeEvent } from "react";
import { CalculatorHandlers } from "@/libs/client/calculator";

const initialState = {
  purchasePrice: 0,
  currentPrice: 0,
  quantity: 0,
  ROI: 0,
  profitLoss: 0,
  totalValue: 0
};

const ROIReducer = (
  state: typeof initialState,
  action: { field: keyof typeof initialState; payload: string | number }
) => {
  const updatedFields = {
    ...state,
    [action.field]: Number(action.payload) || 0
  };

  const { purchasePrice, currentPrice, quantity } = updatedFields;

  const ROI = CalculatorHandlers.calculateROI(
    purchasePrice,
    currentPrice,
    quantity
  );
  const profitLoss = CalculatorHandlers.calculateProfitLoss(
    purchasePrice,
    currentPrice,
    quantity
  );
  const totalValue = CalculatorHandlers.currentTotalValue(
    purchasePrice,
    quantity
  );

  return {
    ...updatedFields,
    ROI,
    profitLoss,
    totalValue
  };
};

export const useProfitCalculator = () => {
  const [ROIState, ROIDispatch] = useReducer(ROIReducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    ROIDispatch({
      field: e.target.name as keyof typeof initialState,
      payload: e.target.value
    });
  };

  return {
    ...ROIState,
    handleInputChange
  };
};
