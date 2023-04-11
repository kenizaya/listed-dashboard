import React from 'react'
import Logo from '../components/Logo'

const SignInPage = () => {
  return (
    <div className='flex h-screen'>
      <div className='bg-black flex items-center justify-center w-2/5'>
        <Logo className='text-7xl' />
      </div>
      <div className='bg-[#f5f5f5] flex items-center justify-center w-3/5'>
        <form className='w-96'>
          <h2 className='text-2xl font-bold mb-4'>Sign In</h2>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
