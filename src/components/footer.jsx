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

      {/* TOP SECTION */}
      <div className="max-w-7xl w-full mx-auto pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6">

        {/* MOBILE + TABLET */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:hidden">

          {/* Newsletter */}
          <div>
            <img className="w-[18px] h-[30px]" src={logo2} alt="logo2" />

            <p className="text-xs leading-5 my-4">
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
            <h4 className="text-white text-xs font-semibold mb-3">
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
            <h4 className="text-white text-xs font-semibold mb-3">
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
            <h4 className="text-white text-xs font-semibold mb-3">
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

        {/* DESKTOP (LG SAME AS ORIGINAL) */}
        <div className="hidden lg:flex justify-between">

          {/* Newsletter */}
          <div className="lg:w-[280px]">
            <img className="h-[32px]" src={logo2} alt="logo2" />

            <p className="text-xs leading-5 mb-4 mt-[78px]">
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

          <div className="flex gap-[70px]">

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
        </div>
      </div>

      {/* LANGUAGE + DMCA */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 pb-6">
        <div className="flex">
          <p className="bg-[#969799] px-2 text-white text-xs">DMCA</p>
          <p className="bg-[#404547] px-2 text-white text-xs">Protected</p>
        </div>

        <div className="flex items-center gap-2">
          <img className="w-[24px] h-[12px]" src={usa} alt="usa" />
          <p className="text-white text-xs">English</p>
          <img className="w-[10px] h-[10px]" src={arrow} alt="arrow" />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#E5E5E5]"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs">
        <p className="text-[#8F9499] text-center lg:text-left">
          © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland.
          Reg. 584165. VAT ID: IE3425001BH
        </p>

        <div className="flex gap-2">
          <img src={Fb3} className="w-5 h-5" />
          <img src={twiter3} className="w-5 h-5" />
          <img src={insta3} className="w-5 h-5" />
          <img src={youtub3} className="w-5 h-5" />
        </div>
      </div>

      {/* TERMS (LG ONLY – SAME AS ORIGINAL) */}
      <div className="hidden lg:flex gap-5 max-w-[1280px] mx-auto py-4">
        <p className="text-[12px] text-[#969799]">Terms of Use</p>
        <p className="text-[12px] text-[#969799]">Privacy Policy</p>
      </div>

    </footer>
  )
}

export default Footer
