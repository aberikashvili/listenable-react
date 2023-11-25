import { BarChart } from "@mui/x-charts/BarChart";

const Male = {
  data: [2, 3, 1, 4, 5],
  label: "Male",
};
const Female = {
  data: [3, 1, 4, 2, 1],
  label: "Female",
};
const Other = {
  data: [7, 7, 7, 7, 7],
  label: "Other",
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
      colors={["#FFB264", "#FF6482", "#009C99"]}
    />
  );
}

export default Charts;
