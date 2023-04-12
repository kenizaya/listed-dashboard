import React from 'react'
import notification from '../assets/icons/notification.svg'
import avatar from '../assets/avatar.png'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row max-w-full justify-between items-center mb-10'>
      <h3 className='font-montserrat text-black text-2xl font-bold'>
        Dashboard
      </h3>
      <div className='flex gap-2 md:gap-0'>
        <SearchBox />
        <img
          src={notification}
          alt='icon'
          width={18}
          height={20}
          className='ml-[30px] mr-[20px]'
        />
        <div className='avatar'>
          <div className='w-8 rounded-full'>
            <img src={avatar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
