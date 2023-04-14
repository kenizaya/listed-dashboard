import React from 'react'
import Logo from './Logo'
import dashboardSidebar from '../assets/icons/dashboardSidebar.svg'
import transactionSidebar from '../assets/icons/transactionSidebar.svg'
import scheduleSidebar from '../assets/icons/scheduleSidebar.svg'
import userSidebar from '../assets/icons/userSidebar.svg'
import settingSidebar from '../assets/icons/settingSidebar.svg'

const Sidebar = () => {
  return (
    <aside className='w-[280px] bg-black hidden px-[50px] py-[60px] m-10 ml-0 rounded-[30px] min-h-[940px] md:flex flex-col justify-between'>
      <div>
        <Logo className='text-2xl lg:text-4xl' />
        <ul className='flex flex-col gap-10'>
          <SidebarItem
            icon={dashboardSidebar}
            text='Dashboard'
            className='font-bold'
          />
          <SidebarItem icon={transactionSidebar} text='Transactions' />
          <SidebarItem icon={scheduleSidebar} text='Schedules' />
          <SidebarItem icon={userSidebar} text='Users' />
          <SidebarItem icon={settingSidebar} text='Setting' />
        </ul>
      </div>

      <ul className='text-sm text-white font-montserrat'>
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
    </aside>
  )
}

const SidebarItem = ({
  icon,
  text,
  className,
}: {
  icon: string
  text: string
  className?: string
}) => {
  return (
    <li className={`flex gap-5 cursor-pointer active:font-bold ${className}`}>
      <img src={icon} alt='icon' />
      <span className='text-white font-montserrat sm:text-sm md:text-base lg:text-lg'>
        {text}
      </span>
    </li>
  )
}

export default Sidebar
