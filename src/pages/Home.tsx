import React from 'react'
import NavigationBar from '../components/navigation-bar/NavigationBar'

import HeroImg from '../assets/imgs/hero-img.svg'

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <section id='hero'>
        <div className="flex md:container md:mx-auto">
          <div className="left-item md:w-3/4 md:pt-36">
            <h1 className='text-4xl md:text-5xl md:text-left text-center font-bold leading-10'>Re-Imagine <span className='text-brightRedLight'>Software.</span></h1> 
            <h1 className=' text-4xl md:text-5xl md:text-left text-center font-bold'>Modernizing <span className='text-brightRedLight'>Businesses</span></h1>

            <p className='max-w-sm text-center md:text-left'>Through our competent process of creating intelligent, custom-built software, we help forward-thinking organizations transform, scale, and achieve a competitive edge</p>
          </div>
          <div className="right-item hidden md:block">
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>

      </section>
    </div>
  )
}
