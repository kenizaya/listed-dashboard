import React from 'react'
import notification from '../assets/icons/notification.svg'
import avatar from '../assets/avatar.png'
import search from '../assets/icons/search.svg'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-10'>
      <h3 className='font-montserrat text-black text-2xl font-bold'>
        Dashboard
      </h3>
      <div className='flex'>
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
