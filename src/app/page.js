import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

function Home() {
  return (
    <div className='w-full  min-h-screen bg-cover bg-left flex justify-center' style={{
      backgroundImage: "url('/assets/images/hero_background.png')",
    }}>
      <div className="w-[93%] h-full relative">
        <Navbar />
        <Image
          src="/assets/images/hero-image.png"
          className='absolute bottom-0 left-1/2 transform -translate-x-1/2 '
          width={500}
          height={500}
          alt="Picture of the author"
          priority={true}
        />
        <h1 className='uppercase text-[8vw] font-bold text-white w-full text-center pt-[.6vw]'>Thumbnail Designer</h1>
        <div className='w-full flex justify-between h-fit flex-row'>
          <div className='w-1/2 flex justify-center flex-col'>
            <p className='text-[.5] w-[60%] font-normal leading-4'>I design more than just thumbnails, I craft compelling narratives. Every project is a reflection of bold ideas, designed to captivate audiences and drive engagement.</p>
            <button className='w-fit border bg-white border-white text-black px-4 py-1 rounded-3xl mt-3'>Let's Talk</button>
          </div>
          <div className="w-1/2 text-end flex justify-between">
            <div className=''></div>
            <h2 className='w-[80%] uppercase font-bold text-[7vw] leading-[5.5vw] text-white text-right pt-[3.5vw]'>I am Joseph</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 absolute bottom-2 left-1/2 transform -translate-x-1/2 pb-2">
        <div className='h-[14vw] w-[30vw] rounded-xl origin-bottom-right skew-y-2 bg-cover bg-center ' style={{
          backgroundImage: "url('/assets/thumbnails/thumbnail_1.png')",
        }}></div>
        <div className='h-[14vw] w-[30vw] rounded-xl  bg-cover bg-center ' style={{
          backgroundImage: "url('/assets/thumbnails/thumbnail_2.png')",
        }}></div>
        <div className='h-[14vw] w-[30vw] rounded-xl origin-bottom-left -skew-y-2 bg-cover bg-center ' style={{
          backgroundImage: "url('/assets/thumbnails/thumbnail_3.png')",
        }}></div>
      </div>
    </div>
  )
}

export default Home