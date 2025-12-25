import React from 'react'

import logoGroup from '../assets/logoGroup.svg'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'

import l1 from '../assets/l1.svg'
import l2 from '../assets/l2.svg'
import l3 from '../assets/l3.svg'
import l4 from '../assets/l4.svg'
import l5 from '../assets/l5.svg'

import r1 from '../assets/r1.svg'
import r2 from '../assets/r2.svg'
import r3 from '../assets/r3.svg'
import r4 from '../assets/r4.svg'
import r5 from '../assets/r5.svg'

const Hero = () => {
  return (
    <section id="home" className="bg-[#26262B] py-20 lg:py-32 relative min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        
        <div className="flex flex-col items-center justify-center text-center relative z-10">
        
          <div className="mb-8">
            <div className=" flex items-center justify-center">
             
              <img className='w-[100px] h-[100px] lg:w-[160px] lg:h-[160px]' src={logoGroup} alt="logoGroup" />
            
          </div>
          </div>

         
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">$9.99</span>
          </h1>

        
          <div className="flex items-center justify-center gap-4 mt-8 mb-6">
            <button className="lg:h-[52px] bg-white hover:bg-gray-100 text-[#26262B] px-6 py-3 rounded-lg text-base font-semibold transition-colors">
              Try free for 7 days
            </button>
            
            <img className='lg-w-[62px] lg:h-[52px] ' src={apple} alt="apple" />
            <img className='lg-w-[62px] lg:h-[52px] ' src={google} alt="google" />
            
            
          </div>

          <p className="text-lg font-light lg:text-[18px] md:text-xl text-white max-w-2xl">
            Power up your workflow with Setapp, a <br />smart way to get apps.
          </p>
        </div>

        
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          
          <div className="absolute top-10 left-4 md:left-10  px-4 py-2 -rotate-6 text-sm font-semibold">
            <img src={l1} alt="l1" />
          </div>

        
          <div className="absolute top-[100px] lg:top-[165px] left-8 md:left-16 w-12 h-12  flex items-center justify-center">
            <img src={l2} alt="l2" />
          </div>

          <div className="absolute top-[100px] lg:top-[170px] lg:left-[130px] md:left-16 w-[142px] h-[142px]  flex items-center justify-center">
            <img src={l3} alt="l2" />
          </div>
          <div className="absolute top-[130px] lg:top-[330px] left-8 md:left-16 w-[227pxpx] h-[114px]  flex items-center justify-center">
            <img src={l4} alt="l2" />
          </div>
          <div className="absolute top-[200px] lg:top-[400px] left-4 md:left-10  px-4 py-2 -rotate-6 text-sm font-semibold">
            <img src={l5} alt="l1" />
          </div>
        </div>

        
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-4 md:right-10  px-4 py-2 -rotate-6 text-sm font-semibold">
            <img src={r1} alt="l1" />
          </div>

        
          <div className="absolute top-[70px] lg:top-[125px] right-8 md:right-40  flex items-center justify-center">
            <img className='lg:w-[162px] lg:h-[162px]' src={r2} alt="l2" />
          </div>

          <div className="z-10 absolute top-[180px] lg:top-[240px] lright-4 md:right-10  w-[142px] h-[142px]  flex items-center justify-center">
            <img src={r3} alt="l2" />
          </div>
          <div className="absolute top-[150px] lg:top-[350px] right-8 md:right-16 w-[227px] h-[114px]  flex items-center justify-center">
            <img src={r4} alt="l2" />
          </div>
          <div className="absolute top-[200px] lg:top-[440px] right-4 md:right-10  px-4 py-2 -rotate-6 text-sm font-semibold">
            <img className='' src={r5} alt="l1" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

