import { useReducer, type ChangeEvent } from "react";
import { CalculatorHandlers } from "@/libs/client/calculator";

const initialState = {
  initialInvestment: 0,
  targetReturn: 0,
  time: 0,
  targetValue: 0,
  growthPercentage: 0,
  monthlyReturn: 0
};

const investmentReducer = (
  state: typeof initialState,
  action: { field: keyof typeof initialState; payload: string | number }
) => {
  const updatedFields = {
    ...state,
    [action.field]: Number(action.payload) || 0
  };

  const { initialInvestment, targetReturn, time } = updatedFields;

  const targetValue = CalculatorHandlers.calculateTargetValue(
    initialInvestment,
    targetReturn
  );
  const growthPercentage = CalculatorHandlers.calculateRequiredGrowth(
    initialInvestment,
    targetReturn
  );
  const monthlyReturn = CalculatorHandlers.calculateMonthlyReturn(
    initialInvestment,
    targetReturn,
    time
  );

  return {
    ...updatedFields,
    targetValue,
    growthPercentage,
    monthlyReturn
  };
};

export const useInvestmentCalculator = () => {
  const [investmentState, investmentDispatch] = useReducer(
    investmentReducer,
    initialState
  );

  const handleInvestmentInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    investmentDispatch({
      field: e.target.name as keyof typeof initialState,
      payload: e.target.value
    });
  };

  return {
    ...investmentState,
    handleInvestmentInputChange
  };
};
