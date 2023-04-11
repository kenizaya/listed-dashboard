import React from 'react'
import Button from './Button'
import google from '../assets/icons/google.svg'
import apple from '../assets/icons/apple.svg'

const SignInForm = () => {
  return (
    <div className='bg-[#f5f5f5] flex flex-col items-center justify-center w-3/5'>
      <div className='w-96'>
        <div className='align-left'>
          <h3 className='font-montserrat font-bold text-4xl leading-[44px]'>
            Sign In
          </h3>
          <p className='font-lato text-base'>Sign in to your account</p>
        </div>

        <div className='flex justify-between pb-[25px] pt-[26px]'>
          <Button
            className='w-[180px] h-[30px] rounded-[10px] bg-white text-xs text-[#858585]'
            text='Sign in with Google'
            icon={google}
          />
          <Button
            className='w-[180px] h-[30px] rounded-[10px] bg-white text-xs text-[#858585]'
            text='Sign in with Apple'
            icon={apple}
          />
        </div>

        <form className='w-96 rounded-[20px] bg-white p-[30px] flex flex-col gap-5'>
          <div className=''>
            <label
              className='block text-black font-lato text-base mb-[10px]'
              htmlFor='email'
            >
              Email address
            </label>
            <input
              className='border rounded-[10px] w-full py-[10px] px-[15px] text-base font-lato bg-[#f5f5f5] text-black leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='johndoe@gmail.com'
            />
          </div>
          <div className=''>
            <label
              className='block text-black font-lato text-base mb-[10px]'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='border rounded-[10px] w-full py-[10px] px-[15px] text-base font-lato bg-[#eaeaea] text-black leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='password'
            />
          </div>
          <Button
            className='text-base font-lato text-[#346bd4] w-max'
            text='Forgot password?'
          />
          <div className='flex items-center justify-between'>
            <Button
              text='Sign In'
              className='w-[325px] h-[40px] bg-black rounded-[10px] text-white font-montserrat font-bold text-base'
            />
          </div>
        </form>
        <div className='flex justify-center align-center mt-5'>
          <span className='text-[#858585]'>Don't have an account? &nbsp;</span>
          <Button
            className='text-base font-lato text-[#346bd4]'
            text='Register here'
          />
        </div>
      </div>
    </div>
  )
}

export default SignInForm
