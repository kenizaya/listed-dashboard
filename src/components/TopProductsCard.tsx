import React from 'react'
import downArrow from '../assets/icons/downArrow.svg'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const TopProductsCard = () => {
  const data = {
    labels: ['Super Hoodies', 'Custom Short Pants', 'Basic Tees'],
    datasets: [
      {
        data: [14, 31, 55],
        backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
        rotation: 4 * Math.PI,
      },
    ],
  }

  const legendLabels = data.labels.map((label, index) => ({
    text: `${label} - ${data.datasets[0].data[index]}%`,
    fillStyle: data.datasets[0].backgroundColor[index],
    strokeStyle: data.datasets[0].backgroundColor[index],
  }))

  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        reverse: false,
        labels: {
          usePointStyle: true,
          font: {
            weight: 'bold',
            size: 12,
            family: 'Montserrat',
          },
          padding: 20,
          color: 'black',
          generateLabels: function (chart) {
            return legendLabels
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <div className='w-[480px] rounded-[20px] h-[256px] px-10 py-[30px] bg-white'>
      <div className='flex justify-between pb-7'>
        <h3 className='font-montserrat font-bold text-lg text-black'>
          Today's schedule
        </h3>
        <button className='flex items-center gap-[6px] font-montserrat text-xs text-[#858585] leading-[15px]'>
          May-June 2021{' '}
          <span>
            <img src={downArrow} alt='' />
          </span>
        </button>
      </div>
      <div className='text-left'>
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default TopProductsCard
