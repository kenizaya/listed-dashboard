import React from 'react'
import Sidebar from '../components/Sidebar'
import TotalCard from '../components/TotalCard'
import revenue from '../assets/icons/revenue.svg'
import transaction from '../assets/icons/transaction.svg'
import like from '../assets/icons/like.svg'
import user from '../assets/icons/user.svg'
import Header from '../components/Header'
import ScheduleCard from '../components/ScheduleCard'
import TopProductsCard from '../components/TopProductsCard'
import ActivitiesCard from '../components/ActivitiesCard'

const Dashboard = () => {
  return (
    <div className='flex bg-[#f5f5f5] w-full pl-[40px]'>
      <Sidebar />
      <div className='w-full bg-[#f5f5f5] py-[60px] pr-[60px]'>
        <Header />
        <div className='flex justify-center sm:justify-between items-center w-full gap-5 flex-wrap'>
          <TotalCard
            icon={revenue}
            text='Total Revenues'
            className='bg-revenueColor'
            amount='$2,129,430'
          />
          <TotalCard
            icon={transaction}
            text='Total Transactions'
            className='bg-transactionColor'
            amount='1,520'
          />
          <TotalCard
            icon={like}
            text='Total Likes'
            className='bg-likeColor'
            amount='9,721'
          />
          <TotalCard
            icon={user}
            text='Total Users'
            className='bg-userColor'
            amount='892'
          />
        </div>
        <ActivitiesCard className='my-10' />
        <div className='flex gap-10 flex-col sm:flex-row'>
          <TopProductsCard />
          <ScheduleCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
