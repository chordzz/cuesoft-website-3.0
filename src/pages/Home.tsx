import React from 'react'
import NavigationBar from '../components/navigation-bar/NavigationBar'

import HeroImg from '../assets/imgs/hero-img.svg'

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <section id='hero' className='min-h-full'>
        <div className="flex my-container">
          <div className="left-item md:w-3/4 md:pt-28">
            <h1 className='text-textNormalSupLight text-4xl md:text-6xl md:text-left text-center font-bold leading-10'>
              Re-Imagine 
              <span className='text-brightRedLight'> Software.</span>
              {/* <br/>
              Modernizing 
              <span className='text-brightRedLight'> Businesses</span> */}
            </h1> 
            <h1 className='mt-4 text-textNormalSupLight text-4xl md:text-6xl md:text-left text-center font-bold'>Modernizing <span className='text-brightRedLight'>Businesses</span></h1>

            <p className='text-center text-textNormalSupLight md:text-left mt-9 text-2xl md:max-w-2xl'>Through our competent process of creating intelligent, custom-built software, we help forward-thinking organizations transform, scale, and achieve a competitive edge</p>
          </div>
          <div className="right-item hidden md:block">
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>

      </section>
    </div>
  )
}
