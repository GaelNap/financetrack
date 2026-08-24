import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../../../assets/theme";
import { chartPalette, preferences } from "../../../config/brand";

interface BudgetAllocationChartProps {
  id: string;
  label: string;
  value: number;
  color: string;
}

export const BudgetAllocationChart = ({ data }: { data: BudgetAllocationChartProps[] }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
      activeOuterRadiusOffset={8}
      colors={chartPalette}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLinkLabels={true}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.primary[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color", modifiers: [] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={"#000"}
      arcLabelsRadiusOffset={0.7}
      valueFormat={(value) =>
        `${Number(value).toLocaleString(preferences.locale, {
          minimumFractionDigits: 2,
        })}%`
      }
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      }}
      theme={{
        tooltip: {
          container: {
            background: `${colors.primary[500]}`,
            color: `${colors.primary[100]}`
          },
        },
      }}
    />
  );
};