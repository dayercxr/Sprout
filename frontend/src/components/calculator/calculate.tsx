import { FC } from "react";
import { Paper, Grid } from "@mui/material";
import { CalculateHeader } from "@/components/calculator/calculateHeader";
import { CalculateDisplay } from "@/components/calculator/calculateDisplay";
import { CalculateInput } from "@/components/calculator/calculateInput";
import { CalculatorData } from "@/data/calculator";
import { CalculateTypes } from "@/types";

export const Calculate: FC<CalculateTypes> = ({
  index,
  title,
  description,
  Icon
}) => {
  const calculatorInputArray =
    CalculatorData.individualCalculator[index].inputs;
  const calculatorDisplayArray =
    CalculatorData.individualCalculator[index].displays;
  const calculatorLogoBackground =
    CalculatorData.individualCalculator[index].logoColor;

  return (
    <Paper sx={{ p: 5, mx: 15, my: 8, bgcolor: "rgba(249, 249, 249, 0.47)" }}>
      <CalculateHeader
        title={title}
        description={description}
        Icon={Icon}
        logoColor={calculatorLogoBackground}
      />

      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-evenly", mb: 3 }}
      >
        {calculatorInputArray.map((data, index) => (
          <CalculateInput
            key={index}
            index={index}
            type='number'
            placeholder={data.placeholder}
            label={data.label}
          />
        ))}
      </Grid>

      <Grid
        container
        direction='row'
        spacing={2}
        sx={{ justifyContent: "space-evenly", borderRadius: 1 }}
      >
        {calculatorDisplayArray.map((data, index) => (
          <CalculateDisplay key={index} title={data} index={index} value={0} />
        ))}
      </Grid>
    </Paper>
  );
};
