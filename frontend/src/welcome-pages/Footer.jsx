import React from 'react'




const Footer = () => {
    
  return (
    <div className='   bg-[#020917] pt-[4rem] border-t-2 border-orange my-8 h-[28rem]  text-white rounded-t-3xl mt-[10rem] md:mt-0'>
        
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>Game</h1>
                <p className='text-sm'>I am excited to inform you that this Game
                 website has been developed by Temesgen.M
                </p>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="to='home'">HOME</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="to='dishes'">About</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Categories</a>
             
                </nav>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Category one</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Category two</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Category three</a>
                    
                </nav>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">temu1554@gmail.com</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">+251985246737</a>
                    <a className='hover:text-orange-600 transition-all cursor-pointer' href="">Social media</a>
                    
                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @copyright developed by <span className='text-orange-600'>Temesgen M.</span>  All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer