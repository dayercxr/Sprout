"use client";

import { FC } from "react";
import { Paper, Grid } from "@mui/material";
import { CalculateHeader } from "@/components/calculator/calculateHeader";
import { CalculateDisplay } from "@/components/calculator/calculateDisplay";
import { CalculateInput } from "@/components/calculator/calculateInput";
import { CalculatorData } from "@/data/calculator";
import { CalculateTypes } from "@/types";
import { useProfitCalculator } from "@/hooks/calculator/profit";
import { useROICalculator } from "@/hooks/calculator/roi";
import { useInvestmentCalculator } from "@/hooks/calculator/investment";

export const Calculate: FC<CalculateTypes> = ({
  index,
  title,
  description
}) => {
  const { netProfit, royaltyFee, totalCost, handleProfitInputChange } =
    useProfitCalculator();
  const { ROI, profitLoss, totalValue, handleROIInputChange } =
    useROICalculator();
  const {
    targetValue,
    growthPercentage,
    monthlyReturn,
    handleInvestmentInputChange
  } = useInvestmentCalculator();

  const handleInputArray = [
    handleROIInputChange,
    handleProfitInputChange,
    handleInvestmentInputChange
  ];

  const profitDisplayArray = [netProfit, royaltyFee, totalCost];
  const ROIDisplayArray = [ROI, profitLoss, totalValue];
  const investmentDisplayArray = [targetValue, growthPercentage, monthlyReturn];
  const CalculatorDisplays = [
    ROIDisplayArray,
    profitDisplayArray,
    investmentDisplayArray
  ];

  const CalculatorDataInstance = CalculatorData.individualCalculator[index];
  const calculatorInputArray = CalculatorDataInstance.inputs;
  const calculatorDisplayArray = CalculatorDataInstance.displays;
  const calculatorLogoBackground = CalculatorDataInstance.logoColor;

  return (
    <Paper sx={{ p: 5, mx: 15, my: 8 }}>
      <CalculateHeader
        title={title}
        description={description}
        Icon={CalculatorDataInstance.logo}
        logoColor={calculatorLogoBackground}
      />

      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-evenly", mb: 3 }}
      >
        {calculatorInputArray.map((data, inputIndex) => (
          <CalculateInput
            key={inputIndex}
            index={inputIndex}
            type='number'
            placeholder={data.placeholder}
            label={data.label}
            name={data.name}
            onChangeHandler={handleInputArray[index]}
          />
        ))}
      </Grid>

      <Grid
        container
        direction='row'
        spacing={2}
        sx={{ justifyContent: "space-evenly", borderRadius: 1 }}
      >
        {calculatorDisplayArray.map((data, displayIndex) => (
          <CalculateDisplay
            key={data}
            title={data}
            index={displayIndex}
            value={CalculatorDisplays[index][displayIndex]}
          />
        ))}
      </Grid>
    </Paper>
  );
};
