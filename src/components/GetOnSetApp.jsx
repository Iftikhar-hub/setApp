import React from 'react'

import keep from '../assets/keep.svg'
import h1 from '../assets/h1.svg'
import h2 from '../assets/h2.svg'
import play from '../assets/play.svg'
import play2 from '../assets/play2.svg'
import h3 from '../assets/h3.svg'

const GetOnSetApp = () => {
  return (
    <section className="py-20 bg-[#26262B]">
      <div className="border-t-[#E5E5E5] border-t max-w-7xl mx-auto pt-[50px] lg:pt-[100px]">
       
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What you get on Setapp.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md md:mt-2">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
         
          <div className="lg:col-span-2 bg-[#DF96AE] rounded-2xl pt-6 px-6 md:px-8 md:pt-8  overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
             
                <div className="w-12 h-12   flex items-center justify-center">
                  <img src={keep} alt="" />
                </div>
              </div>
             
              <div>
                <h1 className="text-[18px] md:text-[22px] lg:text-[26px] font-bold text-[#26262B] ">
                  Keep your Mac clean
                </h1>
                <p className="text-[12px] md:text-[15px] lg:text-[18px] font-light text-[#26262B] ">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>
            {/* Screenshot Placeholder */}
            <div className="w-full h-full overflow-hidden">
              <img src={h1} alt="h1" />
            </div>
          </div>

          
          <div className="bg-amber-50 rounded-2xl p-6 md:p-8 overflow-hidden">

          <div className=" rounded-lg h-64 md:h-80 flex items-center justify-center">
              <img src={h2} alt="h2" />
              
            </div>
            <div className="flex flex-col items-start gap-4 mb-6 pt-[50px] px-[20px] md:px-[40px]  lg:px-[60px]" >
             
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
               
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={play} alt="play" />
                </div>
              </div>
              
              <div>
                <h3 className="text-[16px] md:text-[22px] lg:text-[26px] font-bold text-[#26262B] mb-2">
                  Write code
                </h3>
                <p className="text-[12px] md:text-[14px] lg:text-[18px] font-regular text-[#26262B]">
                  Create applications in more than 25 languages
                </p>
              </div>
            </div>
            
            
          </div>

          {/* Bottom Right Card: Join meetings in a click */}
          <div className="bg-[#384C75] rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="flex flex-col items-start gap-4 mb-6 pt-[20px] px-[20px] md:px-[40px]  lg:px-[60px]" >
             
             <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              
               <div className="w-12 h-12 flex items-center justify-center">
                 <img src={play2} alt="play" />
               </div>
             </div>
             
             <div>
               <h3 className="text-[16px] md:text-[22px] lg:text-[26px] font-bold text-[#FFFFFF] mb-2">
               Join meetings in a click
               </h3>
               <p className="text-[12px] md:text-[14px] lg:text-[18px] font-regular text-[#FFFFFF]">
               Quickly access links to your meetings from menu bar
               </p>
             </div>
           </div>
           
            <div className="mt-[25px] lg:mt-[50px] h-64 md:h-80 flex items-center justify-center">
              <img src={h3} alt="h3" />
              
            </div>
           
          </div>
        </div>

       
        <div className="flex justify-center items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
          <span className="text-xl">→</span>
          <span className="text-lg font-medium">View all superpowers.</span>
        </div>
      </div>
    </section>
  )
}

export default GetOnSetApp

