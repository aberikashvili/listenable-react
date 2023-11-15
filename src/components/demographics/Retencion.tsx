import { Doughnut } from 'react-chartjs-2';

const RetencionRate = () => {
  const data = {
    datasets: [
      {
        data: [70, 30], // Adjust the values based on your requirements
        backgroundColor: ['lightblue', 'lightcoral'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%', // Adjust the cutout percentage to control the size of the inner circle
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RetencionRate;
