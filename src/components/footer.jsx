import React from 'react'

import Fb3 from "../assets/Fb3.svg"
import twiter3 from "../assets/twiter3.svg"
import insta3 from "../assets/insta3.svg"
import youtub3 from "../assets/youtub3.svg"
import logo2 from "../assets/logo2.svg"
import arrow from "../assets/arrow.svg"
import usa from "../assets/usa.svg"

const Footer = () => {
  return (
    <footer className="bg-[#2B2F33] text-[#B8BDC3]">

    {/* Top Section */}
    <div className="max-w-7xl w-full mx-auto pt-12 pb-10">

      {/* lg+ FLEX | lg- GRID */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 gap-10
          lg:hidden
        "
       >
        {/* Left / Newsletter */}
        <div className="lg:w-[280px]">
          <img className='w-[20px] h-[32px]' src={logo2} alt="logo2" />

          <p className="text-xs leading-5 mb-4">
            Updates from our team, written with love 🧡
          </p>

          <div className="flex items-center bg-[#3A3F44] rounded-md overflow-hidden max-w-[260px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-xs px-3 py-2 w-full outline-none placeholder:text-[#9AA0A6]"
            />
            <button className="bg-white text-black px-3 py-2 text-xs">
              →
            </button>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white text-xs font-semibold mb-4">
            Product
          </h4>
          <ul className="space-y-[6px] text-xs">
            <li>Home</li>
            <li>How It Works</li>
            <li>All Apps</li>
            <li>Pricing</li>
            <li>Setapp for Teams</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Download</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-xs font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-[6px] text-xs">
            <li>About</li>
            <li>Support</li>
            <li>Education Discount</li>
            <li>Family Plan</li>
            <li>For Developers</li>
            <li>Gift Cards</li>
            <li>Redeem Card or Code</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white text-xs font-semibold mb-4">
            Resources
          </h4>
          <ul className="space-y-[6px] text-xs">
            <li>Getting started with Setapp</li>
            <li>Remote access to other Macs</li>
            <li>Fix macOS Ventura problems</li>
            <li>Best productivity apps</li>
            <li>Best YouTube downloaders</li>
            <li>Uninstall apps</li>
          </ul>
        </div>
      </div>

      <div
        className=" hidden
          grid grid-cols-1 sm:grid-cols-2 gap-10
          lg:flex justify-between
        "
       >
        {/* Left / Newsletter */}
        <div className="lg:w-[280px]">
        <img className='w-full max-w:content-fit h-[32px]' src={logo2} alt="logo2" />

          <p className="text-xs leading-5 mb-4 mt-[30px] lg:mt-[78px]">
            Updates from our team, written with love 🧡
          </p>

          <div className="flex items-center bg-[#3A3F44] rounded-md overflow-hidden max-w-[260px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-xs px-3 py-2 w-full outline-none placeholder:text-[#9AA0A6]"
            />
            <button className="bg-white text-black px-3 py-2 text-xs">
              →
            </button>
          </div>
        </div>

        <div className='flex flex-row gap-[70px]'>

        {/* Product */}
        <div >
          <h4 className="text-white text-xs font-semibold mb-4">
            Product
          </h4>
          <ul className="space-y-[6px] text-xs">
            <li>Home</li>
            <li>How It Works</li>
            <li>All Apps</li>
            <li>Pricing</li>
            <li>Setapp for Teams</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Download</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-xs font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-[6px] text-xs">
            <li>About</li>
            <li>Support</li>
            <li>Education Discount</li>
            <li>Family Plan</li>
            <li>For Developers</li>
            <li>Gift Cards</li>
            <li>Redeem Card or Code</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white text-xs font-semibold mb-4">
            Resources
          </h4>
          <ul className="space-y-[6px] text-xs">
            <li>Getting started with Setapp</li>
            <li>Remote access to other Macs</li>
            <li>Fix macOS Ventura problems</li>
            <li>Best productivity apps</li>
            <li>Best YouTube downloaders</li>
            <li>Uninstall apps</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <div className='w-full  lg:flex flex-row justify-between max-w-[1280px] mx-auto pt-4 pb-8'>
      <div className='flex flex-row '>
        <p className='bg-[#969799] px-[5px]  text-[#FFFFFF]'>DMCA</p>
        <p className='bg-[#404547] px-[5px] text-[#FFFFFF]'>Protected</p>

      </div>
      <div className='flex flex-row gap-[8px] items-center'>
        <img className='w-[28px] h-[14px]' src={usa} alt="usa" />
        <p className='   text-[#FFFFFF]'>English</p>
        <img className='w-[10px] h-[10px]' src={arrow} alt="arrow" />
        

      </div>

    </div>
    

    {/* Divider */}
    <div className="border-t border-[#E5E5E5]"></div>

    {/* Bottom Bar */}
    <div className="max-w-[1280px] mx-auto   py-4
      flex flex-col lg:flex-row
      justify-between items-center gap-4 text-xs"
     >
      <p className="text-[#8F9499]">
      © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
      </p>

      <div className="flex items-center gap-4">
       

        <div className="flex gap-2">
          <img src={Fb3} className="w-6 h-6 "></img>
          <img src={twiter3} className="w-6 h-6 "></img>
          <img src={insta3} className="w-6 h-6 "></img>
          <img src={youtub3} className="w-6 h-6 "></img>
          
        </div>
      </div>
    </div>
    <div className='w-full hidden lg:flex flex-row gap-[20px] max-w-[1280px] mx-auto py-4'>
      <p className='font-[Avenir_Next] font-normal text-[12px] leading-[21.36px] tracking-[0] align-middle text-[#969799]'> Terms of Use</p>
      <p className='font-[Avenir_Next] font-normal text-[12px] leading-[21.36px] tracking-[0] align-middle text-[#969799]'>Privacy Policy</p>

    </div>
  </footer>
  )
}

export default Footer

