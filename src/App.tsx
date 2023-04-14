import React from 'react'
import TotalCard from './components/TotalCard'
import SignInPage from './pages/SignInPage'
import revenue from './assets/icons/revenue.svg'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='max-w-[1440px] max-h-[1024px]'>
      <SignInPage />
      <Dashboard />
    </div>
  )
}

export default App
