import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import usa from '../assets/usa.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#26262B] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <div className="w-[18px] h-[28px] sm:w-[20px] sm:h-[30px] lg:w-[22px] lg:h-[32px] flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center mx-8">
            {[
              'How it works',
              'All apps',
              'Pricing',
              'For Teams',
              'Blog',
              'Podcast',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <div className="h-4 w-px bg-gray-400"></div>

            <img className="w-[24px] h-[20px]" src={usa} alt="usa" />

            <a href="#sign-in" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Sign In
            </a>

            <button className="border border-gray-400 text-gray-300 hover:text-white hover:border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-transparent">
              Try free
            </button>
          </div>

          {/* HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#26262B] border-t border-gray-700">
          <div className="px-4 py-4 space-y-4">

            {[
              'How it works',
              'All apps',
              'Pricing',
              'For Teams',
              'Blog',
              'Podcast',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm font-medium"
              >
                {item}
              </a>
            ))}

            <div className="h-px bg-gray-700 my-2"></div>

            <div className="flex items-center gap-3">
              <img className="w-[24px] h-[20px]" src={usa} alt="usa" />
              <span className="text-gray-300 text-sm">United States</span>
            </div>

            <a
              href="#sign-in"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm font-medium"
            >
              Sign In
            </a>

            <button className="w-full border border-gray-400 text-gray-300 hover:text-white hover:border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-transparent">
              Try free
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
