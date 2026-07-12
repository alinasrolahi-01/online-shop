import React from 'react'
import Blob from './Blob'

const HeroSection = ({ children }) => {
  return (
    <section className='relative hero-bg'>
        <Blob/>
        <div className='wrapper'>
            {children}
        </div>
    </section>
  )
}

export default HeroSection