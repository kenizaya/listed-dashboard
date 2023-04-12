import React from 'react'
import notification from '../assets/icons/notification.svg'
import avatar from '../assets/avatar.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-10'>
      <h3 className='font-montserrat text-black text-2xl font-bold'>
        Dashboard
      </h3>
      <div className='flex'>
        <input
          type='text'
          placeholder='Search...'
          className='input input-bordered input-sm max-h-[30px] max-w-[180px] font-lato text-sm'
        />
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
