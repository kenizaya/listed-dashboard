import React from 'react'
import Logo from '../components/Logo'
import SignInForm from '../components/SignInForm'

const SignInPage = () => {
  return (
    <div className='flex h-screen'>
      <div className='bg-black flex items-center justify-center w-2/5'>
        <Logo className='text-7xl' />
      </div>
      <SignInForm />
    </div>
  )
}

export default SignInPage
