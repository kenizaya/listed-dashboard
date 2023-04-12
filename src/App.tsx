import React from 'react'
import TotalCard from './components/TotalCard'
import SignInPage from './pages/SignInPage'
import revenue from './assets/icons/revenue.svg'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      {/* <SignInPage /> */}
      {/* <TotalCard icon={revenue} color='revenueColor' /> */}
      <Dashboard />
    </div>
  )
}

export default App
