import React from 'react'
import Logo from './Logo'
import dashboardSidebar from '../assets/icons/dashboardSidebar.svg'
import transactionSidebar from '../assets/icons/transactionSidebar.svg'
import scheduleSidebar from '../assets/icons/scheduleSidebar.svg'
import userSidebar from '../assets/icons/userSidebar.svg'
import settingSidebar from '../assets/icons/settingSidebar.svg'

const Sidebar = () => {
  return (
    <aside className='w-[280px] bg-black px-[50px] py-[60px] m-10 rounded-[30px] min-h-[940px] flex flex-col justify-between'>
      <div>
        <Logo className='text-4xl' />
        <ul className='flex flex-col gap-10'>
          <SidebarItem icon={dashboardSidebar} text='Dashboard' />
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

const SidebarItem = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <li className='flex gap-5 cursor-pointer active:font-bold'>
      <img src={icon} alt='icon' />
      <span className='text-white font-montserrat text-lg'>{text}</span>
    </li>
  )
}

export default Sidebar
