import React from 'react'

import Fb from '../assets/Fb.svg'
import twiter from '../assets/twiter.svg'
import youtube from '../assets/youtube.svg'
import youtube2 from '../assets/youtube2.svg'

import twiter2 from '../assets/twiter2.svg'
import Fb2 from '../assets/Fb2.svg'
import insta2 from '../assets/insta2.svg'


const SetAppYourWord = () => {
  return (
    <section className="py-20 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row text-center mb-12 items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26262B] mb-4">
          Setapp in your words.
          </h2>

          <div className='pr-[25px] pl-[10px] max-w-[300px]'>
            <p className="text-lg text-[#26262B] text-start ">
            What you say about how Setapp
        
            </p>

            <p className="text-lg text-[#26262B]  text-start ">
          
             powers you up.
          </p>

          </div>
         
          <div className='flex flex-row items-center gap-[10px]'>
            <img src={Fb} alt="Facebook" className='max-w-[48ox] h-[48px]'/>
            <img src={twiter} alt="twiter" className='max-w-[48ox] h-[48px]'/>
            <img src={youtube} alt="youtube" className='max-w-[48ox] h-[48px]'/>
            <img src={youtube2} alt="youtube2" className='max-w-[48ox] h-[48px]'/>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white bg-[#F5F5F5] px-[8px] py-[4px] rounded-[8px]">
            <div className="flex bg-[#71719A] max-w-[366px] py-[38px] px-[25px] h-[300px] rounded-[8px]  mb-4">
              <p className='text-[#FFFFFF]  lg:text-[26px]'>
                Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective
                     way of having apps on
                      Mac.</p>
            </div>
            
            <div className='flex flex-row   justify-between items-end lg:px-[22px]'>
              <div >
                <p className='text-[#26262B] lg:text-[18px]' > Arash Pourhabibi</p>
                <p className='text-[#9F9F9F] lg:text-[14px]'>@ArashPourhabibi</p>
              </div>
              <img className='max-w-[22px] h-[32px]' src={twiter2} alt="twiter2" />
            </div>
            
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white bg-[#F5F5F5] px-[8px] py-[4px] rounded-[8px]">
            <div className="flex bg-[#D9AE89] pt-[38px] pb-[75px] pr-[81px] pl-[22px]  rounded-[8px] max-w-[366px] h-[300px] mb-4">
              <p className='text-[#FFFFFF] lg:text-[26px]'>
              My favorites ❤️ from
@Setapp Ulysses,
CleanMyMac X, Paste,
MindNode, Swift
Publisher.</p>
            </div>
            
            <div className='flex flex-row   justify-between items-end lg:px-[22px]'>
              <div >
                <p className='text-[#26262B] lg:text-[18px]' > Mauricio Sanchez</p>
                <p className='text-[#9F9F9F] lg:text-[14px]'>@m741s</p>
              </div>
              <img className='max-w-[22px] h-[32px]' src={insta2} alt="insta2" />
            </div>
            
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white bg-[#F5F5F5] px-[8px] py-[4px] rounded-[8px]">
            <div className="flex bg-[#765070] rounded-[8px] max-w-[366px] py-[38px] px-[22px] h-[300px] mb-4">
              <p className='text-[#FFFFFF] lg:text-[26px]'>
              For those of you that
wonder where I
discover/get all the
awesome apps for my Mac
that I use, a lot of them are
from Setapp!
                      Mac.</p>
            </div>
            
            <div className='flex flex-row   justify-between items-end lg:px-[22px]'>
              <div >
                <p className='text-[#26262B] lg:text-[18px]' > Meredith Sweet</p>
                <p className='text-[#9F9F9F] lg:text-[14px]'>@meredith.sweet.silberstein</p>
              </div>
              <img className='max-w-[22px] h-[32px]' src={Fb2} alt="Fb2" />
            </div>
            
          </div>
        </div>

        <div className='w-full mt-[24px] flex items-center justify-center'>
          <div className='flex flex-row  w-full gap-[25px] items-center justify-center'>
            <div className='w-[12px] h-[12px] rounded-[50%] bg-[#1D1D22]'></div>
            <div className='w-[12px] h-[12px] rounded-[50%] bg-[#D5D4D4]'></div>
            <div className='w-[12px] h-[12px] rounded-[50%] bg-[#D5D4D4]'></div>
            <div className='w-[12px] h-[12px] rounded-[50%] bg-[#D5D4D4]'></div>
            <div className='w-[12px] h-[12px] rounded-[50%] bg-[#D5D4D4]'></div>
            <div className='w-[12px] h-[12px] rounded-[50%] bg-[#D5D4D4]'></div>
          </div>
          
        </div>


      </div>
    </section>
  )
}

export default SetAppYourWord

