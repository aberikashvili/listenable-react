import { BarChart } from "@mui/x-charts/BarChart";

const Male = {
  data: [2, 3, 1, 4, 5, 10, 0, 3, 9, 1],
  label: "man",
};
const Female = {
  data: [3, 1, 4, 2, 1, 3, 5, 7, 8, 6],
  label: "Female",
};
const Other = {
  data: [7, 7, 7, 7, 7, 2, 6, 4, 7, 9],
  label: "other",
};

function ChartPage() {
  return (
    <BarChart
      height={300}
      series={[
        { ...Male, stack: "total" },
        { ...Female, stack: "total" },
        { ...Other, stack: "total" },
      ]}
      colors={["#1899CD", "#FFB264", "#009C99"]}
    />
  );
}

export default ChartPage;
