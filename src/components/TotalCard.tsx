import React from 'react'

interface TotalCardProps {
  icon: string
  color: string
  text: string
  amount: string
}

const TotalCard = ({ icon, color, text, amount }: TotalCardProps) => {
  const bgColor = `bg-${color}`
  return (
    <div
      className={`py-5 px-[25px] w-[221.05px] h-[120px] rounded-[20px] text-black ${bgColor}`}
    >
      <div className='flex justify-end'>
        <img src={icon} alt='icon' />
      </div>
      <div className='flex flex-col'>
        <span className='text-sm font-lato leading-[16.8px]'>{text}</span>
        <span className='text-2xl font-openSans leading-[32.68px]'>
          {amount}
        </span>
      </div>
    </div>
  )
}

export default TotalCard
