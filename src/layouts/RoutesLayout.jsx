import React from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { BasketProvider } from '../context/BasketContext'


const RoutesLayout = () => {
  return (
    <>
    <BasketProvider>
       <Header/>
       <Outlet/>
       <Footer/>
       </BasketProvider>
    </>
  )
}

export default RoutesLayout