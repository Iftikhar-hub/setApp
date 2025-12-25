import React from 'react'
import logo from '../assets/logo.svg'
import usa from '../assets/usa.svg'

const Navbar = () => {
  return (
    <nav className="bg-[#26262B] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
         
          <div className="flex-shrink-0">
            <div className="lg:w-[22px] w-[18px] h-[28px] lg:h-[32px] flex items-center justify-center">
              <img src={logo} alt="logo" />
              
            </div>
          </div>

          
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center mx-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              How it works
            </a>
            <a href="#all-apps" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              All apps
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Pricing
            </a>
            <a href="#for-teams" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              For Teams
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="#podcast" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Podcast
            </a>
          </div>

          
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
           
            <div className="h-4 w-px bg-gray-400"></div>
            
          
            <div className="flex items-center">
             
              <div className="flex items-center justify-center">
                <img className='w-[26px] h-[21px]' src={usa} alt="usa" />
              </div>
            </div>
            
            {/* Sign In Link */}
            <a href="#sign-in" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Sign In
            </a>
            
            {/* Try free Button */}
            <button className="border border-gray-400 text-gray-300 hover:text-white hover:border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-transparent">
              Try free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

