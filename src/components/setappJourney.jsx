import React from 'react'

const SetAppJourney = () => {
  return (
    <section className="py-20 bg-[#26262B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-8 pb-12">
          {/* Main Title - Left */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Your Setapp journey.
          </h2>
          
          {/* Subtitle - Right, slightly below baseline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl md:mt-2">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        {/* Horizontal Separator */}
        <div className="border-t border-gray-400"></div>
      </div>
    </section>
  )
}

export default SetAppJourney

