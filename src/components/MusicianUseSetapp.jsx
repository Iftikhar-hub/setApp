import React from 'react'

import musician from '../assets/musician.svg'

const MusicianUseSetapp = () => {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg, #26262B 0%, #26262B 50%, #FEFEFE 50%, #FEFEFE 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="bg-[#765070] rounded-2xl shadow-xl overflow-hidden relative">
         
          <div className="absolute top-6 right-6 z-10 flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          
            <div className="p-8 md:p-12 flex flex-col justify-between">
            
              <div className="mb-8">
                <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6">
                  Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.
                </p>
                <p className="text-white text-lg md:text-xl font-medium">
                  Jason Stoczek
                </p>
              </div>

            
              <div className="mt-auto">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
               
                  <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

           
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 flex top-[30px] items-end">
                <div className="w-full h-full bg-[#765070] p-[60px] flex items-center justify-center">
                  <img className='bg-[#765070] w-full max-w-[430px] h-[450px] lg:max-w-[670px] lg:h-[690px]' src={musician} alt="musician" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
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

