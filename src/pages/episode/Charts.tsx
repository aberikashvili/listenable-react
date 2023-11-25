import { BarChart } from "@mui/x-charts/BarChart";

const Male = {
  data: [2, 3, 1, 4, 5, 6, 7, 2],
  label: "Male",
};
const Female = {
  data: [3, 1, 4, 2, 1, 4, 2, 7],
  label: "Female",
};
const Other = {
  data: [1, 7, 3, 2, 1, 7, 2, 3],
  label: "Other",
};
function Charts() {
  return (
    <BarChart
      width={725}
      height={300}
      sx={{ borderRadius: "10px" }}
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
