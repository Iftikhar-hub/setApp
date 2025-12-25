import React from 'react'

import logo from "../assets/logo.svg"

const SuperPower = () => {
  return (
    <section className="py-20" style={{
      background: 'linear-gradient(180deg, #FEFEFE 0%, #FEFEFE 50%, #2B2D32 50%, #2B2D32 100%)',
    }}>
      <div className=" bg-[#F5F5F5] max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[1330px] lg:h-[587px] lg:px-[75px]
      rounded-[20px] opacity-100 lg:pt-[124px]">

        <div className='flex flex-col gap-[8px] lg:gap-[21px]  pt-[40px] '>

         <img src={logo} alt="logo" className='max-w-[76px] h-[120px]' />
         <div>
           <p className='text-sm lg:text-[46px] text-[#26262B] font-[500] lg:font-[600] leading-[59.8px] tracking-[1.3px]'>
           Superpowers starting $9.99/month.
           </p>
           <p className='text-sm lg:text-[46px] text-[#26262B] font-[500] lg:font-[600] leading-[59.8px] tracking-[1.3px]'>
           Free for 7 days.
            </p>

         </div>

         <div className='flex flex-row gap-[24px] mt-[25px] lg:mt-[60px]'>
            <button
             className="w-[193.41px] h-[50px] bg-[#26262B] text-white font-[Avenir_Next] font-normal text-[16px] leading-[24px] tracking-[1px]
              text-center align-middle rounded-[6px] opacity-100 px-[31px] py-[13px] max-lg:w-auto max-lg:h-[46px] max-lg:px-6 max-lg:py-2.5
               max-lg:text-[15px] max-lg:rounded-[5px] max-sm:text-[14px] max-sm:px-5 max-sm:py-2">
              Get started now
            </button>

            <button
             className=" w-[220.57px] h-[50px] border border-[#26262B] text-[#26262B] border border-[#26262B] font-[Avenir_Next] font-normal
             text-[16px] leading-[24px] tracking-[1px] text-center align-middle rounded-[6px] opacity-100 px-[31px] py-[13px]
              max-lg:w-auto max-lg:h-[46px] max-lg:px-6 max-lg:py-2.5 max-lg:text-[15px] max-lg:rounded-[5px]
               max-sm:text-[14px] max-sm:px-5 max-sm:py-2">
               More about Setapp
                 </button>
         </div>
         

        </div>
        
        
      
      </div>  
      <span className='block  w-full h-[1px] bg-[#E5E5E5] lg:mt-[8px]'></span>
   
    
    
    </section>
  )
}

export default SuperPower

