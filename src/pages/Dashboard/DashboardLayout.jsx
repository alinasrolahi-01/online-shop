import React from 'react'
import { Outlet } from 'react-router'

import HeaderDashboard from '../../components/Dashboard/HeaderDashboard/HeaderDashboard'
import SidbarDashboard from '../../components/Dashboard/SidbarDashboard/SidbarDashboard'



const DashboardLayout = () => {
  return (
    <>
     <div className="flex">
      <SidbarDashboard />
      <div className="flex-1 min-w-0">
        <HeaderDashboard />
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default DashboardLayout