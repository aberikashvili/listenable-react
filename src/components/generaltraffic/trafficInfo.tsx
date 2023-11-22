/* eslint-disable @typescript-eslint/no-explicit-any */
import firstImage from "../../images/ForExample/Bg.png";
import secondImage from "../../images/ForExample/Bg-1.png";
import therdImage from "../../images/ForExample/Bg-2.png";
import forthImage from "../../images/ForExample/Bg-3.png";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const listeningBackEndData = [
  {
    id: 0,
    img: firstImage,
    title: "Should She Let Her Man Move In With Another Woman?",
    dataType: 30,
  },
  {
    id: 1,
    img: secondImage,
    title: "She's Torn Between Her Dog And Boyfriend!",
    dataType: 70,
  },
  {
    id: 2,
    img: therdImage,
    title: `How Fast Did You Say "I Love You" To Your Partner?`,
    dataType: 20,
  },
  {
    id: 3,
    img: forthImage,
    title: "Moe's Friend Caught His Fiancée Tracking Him?!",
    dataType: 90,
  },
  {
    id: 4,
    img: forthImage,
    title: `How Fast Did You Say "I Love You" To Your Partner?`,
    dataType: 20,
  },
  {
    id: 5,
    img: forthImage,
    title: "She's Torn Between Her Dog And Boyfriend!",
    dataType: 55,
  },
  {
    id: 6,
    img: forthImage,
    title: "She's Torn Between Her Dog And Boyfriend!",
    dataType: 10,
  },
];
export const downloadBackEndData = [
  {
    id: 0,
    img: firstImage,
    title: "Should She Let Her Man Move In With Another Woman?",
    dataType: -60,
  },
  {
    id: 1,
    img: secondImage,
    title: "She's Torn Between Her Dog And Boyfriend!",
    dataType: -35,
  },
  {
    id: 2,
    img: therdImage,
    title: `How Fast Did You Say "I Love You" To Your Partner?`,
    dataType: -40,
  },
  {
    id: 3,
    img: forthImage,
    title: "Moe's Friend Caught His Fiancée Tracking Him?!",
    dataType: -45,
  },
  {
    id: 4,
    img: forthImage,
    title: `How Fast Did You Say "I Love You" To Your Partner?`,
    dataType: -70,
  },
  {
    id: 5,
    img: forthImage,
    title: "She's Torn Between Her Dog And Boyfriend!",
    dataType: -90,
  },
  {
    id: 6,
    img: forthImage,
    title: "She's Torn Between Her Dog And Boyfriend!",
    dataType: -10,
  },
];

export const data = {
  labels,
  datasets: [
    {
      label: "Avarage listening time",
      data: listeningBackEndData.map((data) => data.dataType),
      borderColor: "rgba(0, 156, 153, 1)",
      backgroundColor: "rgba(0, 156, 153, 1)",
      tension: 0.4,
    },
    {
      label: "Total Downloads",
      data: downloadBackEndData.map((data) => data.dataType),
      borderColor: "rgba(255, 178, 100, 1)",
      backgroundColor: "rgba(255, 178, 100, 1)",
      tension: 0.4,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      align: "start" as const,
      labels:{
        color:"white" 
      }
    },
    title: {
      display: true,
      text: "General Traffic",
      align: "start" as const,
      color:"white" as const,
      labels:{
        color:""
      }
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const datasetIndex = context.datasetIndex;
          const index = context.dataIndex;
          const dataset =
            datasetIndex === 0 ? listeningBackEndData : downloadBackEndData;
          const item = dataset[index];
          return `${item.title}`
        },
      },
    },
  },
  scales: {
    y: {
      min: -100,
      max: 100,
      ticks: {
        stepSize: 40,
        color:"white"
      },
    },
    x:{
      ticks:{
        color:"white"
      }
    }
  },
};
