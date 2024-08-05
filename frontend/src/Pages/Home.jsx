import CategoryCarousel from '@/components/CategoryCarousel'
import HeroSection from '@/components/HeroSection'
import LatestJobs from '@/components/LatestJobs'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar.jsx'
import React from 'react'


const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJobs/>
    <Footer/>
    </>
  )
}

export default HomePage