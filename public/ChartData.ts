export const data = {
  labels: ["May12", "May13", "May14", "May15", "May16", "May17", "May18"],
  datasets: [
    {
      data: [1, 10, 4.5, 2, 7, 8, 2, 8],
      backgroundColor: "transparent",
      borderColor: "#f26c6d",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.6,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

export const pieData = {
  labels: ["Male", "Femail"],
  datasets: [
    {
      label: "Arm Sales",
      data: [2, 4],
      backgroundColor: ["#F54EA2", "#41b6e6", "#FE9000", "#7ebc59", "#8134af"],
      hoverBackgroundColor: [
        "#b9006e",
        "#005792",
        "#C1292E",
        "#2b9464",
        "#42218E",
      ],
    },
  ],
};
