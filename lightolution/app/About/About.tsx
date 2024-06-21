"use client";
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';

function About() {
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-screen w-screen justify-center items-center' style={{ backgroundColor: '#ded9ca' }}>
      <div className='bg-white h-4/5 w-4/5 flex shadow-2xl rounded-xl'>
        <div className='flex flex-col md:flex-row w-full items-center justify-center'>
          <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center px-10'>
            <h1 className='text-[40px] md:text-[60px]'>About Us</h1>
            <p className='text-center md:text-left'>
              We Are A Young And Dynamic Team With Outstanding Design Skills And Technical Knowledge To Plot On Larger As Well As Smaller Projects. Our Diverse Team Ensures That The Project That We Take In Hand Gets Delivered On Time Holding Immense Professional Quality among them.
            </p>
          </div>
          <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center relative'>
            <div className={`absolute transition-transform duration-500 ease-in-out ${isSwapped ? 'z-10' : 'z-0'} transform ${isSwapped ? 'translate-y-[-30px] translate-x-[30px]' : 'translate-y-0 translate-x-0'} ${!isSwapped ? 'filter blur-sm' : ''}`}>
              <Image
                src="/assets/images/about_us_1.jpg"
                width={isSwapped ? 300 : 300}
                height={isSwapped ? 300 : 300}
                alt="Picture of the author"
                className='rounded-xl'
              />
            </div>
            <div className={`absolute transition-transform duration-500 ease-in-out md:relative ${isSwapped ? 'z-0' : 'z-10'} transform ${isSwapped ? 'translate-y-0' : 'translate-y-[-30px] translate-x-[30px]'} ${!isSwapped ? '' : 'filter blur-sm'}`}>
              <Image
                src="/assets/images/about_us_2.jpg"
                width={isSwapped ? 300 : 300}
                height={isSwapped ? 300 : 300}
                alt="Picture of the author"
                className='rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
