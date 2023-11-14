import { BarChart } from "@mui/x-charts/BarChart";

const Male = {
  data: [2, 3, 1, 4, 5],
  label: "Series A",
};
const Female = {
  data: [3, 1, 4, 2, 1],
  label: "Series B",
};
const Other = {
  data: [7, 7, 7, 7, 7],
  label: "Series C",
};
function Charts() {
  return (
    <BarChart
      height={300}
      series={[
        { ...Male, stack: "total" },
        { ...Female, stack: "total" },
        { ...Other, stack: "total" },
      ]}
    />
  );
}

export default Charts;
