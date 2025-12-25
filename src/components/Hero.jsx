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
    <section
      id="home"
      className="bg-[#26262B] py-16 sm:py-20 md:py-24 lg:py-32 relative min-h-[600px] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center text-center relative z-10">

          {/* LOGO */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-center">
              <img
                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]"
                src={logoGroup}
                alt="logoGroup"
              />
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">$9.99</span>
          </h1>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8 mb-6">
            <button className="w-full sm:w-auto lg:h-[52px] bg-white hover:bg-gray-100 text-[#26262B] px-5 py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors">
              Try free for 7 days
            </button>

            <div className="flex gap-3">
              <img className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[62px] lg:h-[52px]" src={apple} alt="apple" />
              <img className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[62px] lg:h-[52px]" src={google} alt="google" />
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-light text-white max-w-xs sm:max-w-xl md:max-w-2xl">
            Power up your workflow with Setapp, a <br className="hidden sm:block" />
            smart way to get apps.
          </p>
        </div>

        {/* LEFT FLOATING IMAGES */}
        <div className="hidden md:block absolute left-0 top-0 w-full h-full pointer-events-none">

          <div className="absolute top-6 sm:top-10 left-2 sm:left-4 md:left-10">
            <img className="w-[50px] sm:w-[70px] md:w-[90px]" src={l1} alt="l1" />
          </div>

          <div className="absolute top-[80px] sm:top-[100px] left-4 sm:left-8 md:left-16">
            <img className="w-[40px] sm:w-[50px]" src={l2} alt="l2" />
          </div>

          <div className="absolute top-[90px] sm:top-[120px] left-10 sm:left-20 md:left-32">
            <img className="w-[90px] sm:w-[120px]" src={l3} alt="l3" />
          </div>

          <div className="absolute top-[160px] sm:top-[200px] left-6 sm:left-16">
            <img className="w-[120px] sm:w-[180px]" src={l4} alt="l4" />
          </div>

          <div className="absolute top-[260px] sm:top-[300px] left-2 sm:left-6">
            <img className="w-[70px] sm:w-[90px]" src={l5} alt="l5" />
          </div>
        </div>

        {/* RIGHT FLOATING IMAGES */}
        <div className=" hidden md:block absolute right-0 top-0 w-full h-full pointer-events-none">

          <div className="absolute top-6 sm:top-10 right-2 sm:right-4 md:right-10">
            <img className="w-[50px] sm:w-[70px] md:w-[90px]" src={r1} alt="r1" />
          </div>

          <div className="absolute top-[90px] sm:top-[110px] right-6 sm:right-20 md:right-40">
            <img className="w-[90px] sm:w-[120px] lg:w-[162px] lg:h-[162px]" src={r2} alt="r2" />
          </div>

          <div className="absolute top-[170px] sm:top-[200px] right-4 sm:right-10">
            <img className="w-[70px] sm:w-[100px]" src={r3} alt="r3" />
          </div>

          <div className="absolute top-[230px] sm:top-[280px] right-6 sm:right-16">
            <img className="w-[120px] sm:w-[180px]" src={r4} alt="r4" />
          </div>

          <div className="absolute top-[300px] sm:top-[340px] right-2 sm:right-6">
            <img className="w-[70px] sm:w-[90px]" src={r5} alt="r5" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
