import React from 'react'

import CuesoftLogo from '../../assets/logos/cuesoft-logo.svg'


const NavigationBar = () => {
  return (
    <nav className='bg-slate-600 relative md:container mx-auto p-6'>
        <div className='flex items-center justify-between'>

            <div className='pt-2'>
                <img src={CuesoftLogo} alt="Logo" />
            </div>

            <div className="hidden md:flex space-x-6">
                <a href="#" className='hover:text-blue-500'>About</a>
                <a href="#" className='hover:text-blue-500'>Services</a>
                <a href="#" className='hover:text-blue-500'>Product</a>
                <a href="#" className='hover:text-blue-500'>Contact</a>
            </div>
            
            <a href="#" className="p-3 px-6 pt-2 text-white bg-red-700 rounded-full baseline hover:bg-brightRed hidden md:block">Start a Project</a>

        </div>
    </nav>
  )
}

export default NavigationBar