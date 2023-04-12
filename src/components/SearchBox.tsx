import React from 'react'
import search from '../assets/icons/search.svg'

const SearchBox = () => {
  return (
    <div>
      <label
        htmlFor='search'
        className='text-gray-400 flex items-center relative cursor-text focus:hidden'
      >
        <img
          src={search}
          className='fill-gray-400 absolute top-2.5 right-3 focus:hidden'
        />
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search...'
        className='input input-bordered input-sm max-h-[30px] max-w-[180px] font-lato text-sm'
      />
    </div>
  )
}

export default SearchBox
