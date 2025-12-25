import React from 'react'
import musician from '../assets/musician.svg'

const MusicianUseSetapp = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{
        background:
          'linear-gradient(180deg, #26262B 0%, #26262B 50%, #FEFEFE 50%, #FEFEFE 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#765070] rounded-2xl shadow-xl overflow-hidden relative">

          {/* ARROWS */}
          <div className="absolute top-6 right-6 z-10 flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

            {/* TEXT */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-3xl leading-relaxed mb-6">
                  Musicians like Jason use Setapp to push the limits of their creativity,
                  dancing through task for more time to play.
                </p>
                <p className="text-white text-sm sm:text-base md:text-lg font-medium">
                  Jason Stoczek
                </p>
              </div>

              <button className="mt-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* IMAGE */}
            <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-0">

              {/* MOBILE / TABLET */}
              <img
                src={musician}
                alt="musician"
                className="
                  w-full max-w-[280px] sm:max-w-[380px] md:max-w-[430px]
                  h-auto object-contain
                  lg:hidden
                "
              />

              {/* DESKTOP (FIXED) */}
              <div className="hidden lg:flex absolute inset-0 items-end justify-center">
                <img
                  src={musician}
                  alt="musician"
                  className="
                    w-full max-w-[670px]
                    max-h-[520px]
                    object-contain
                  "
                />
              </div>

            </div>

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>

      </div>
    </section>
  )
}

export default MusicianUseSetapp
