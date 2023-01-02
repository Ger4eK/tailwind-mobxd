import React from 'react';
import brand1 from '../images/brand/brand (1).png';
import brand2 from '../images/brand/brand (2).png';
import brand3 from '../images/brand/brand (3).png';
import brand4 from '../images/brand/brand (4).png';
import hero from '../images/hero.png';

const Hero = () => {
  return (
    <section className='relative bg-white py-16 lg:pt-[100px]'>
      <div className='container px-8 md:px-6'>
        <div class='flex flex-wrap justify-between'>
          <div class='w-full lg:w-5/12'>
            <h1 class='text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]'>
              Everything you need to run your online{' '}
              <span class='text-blue-600'>business</span>
            </h1>
            <p class='text-slate-500 mb-8 max-w-[480px] text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              alias voluptate esse blanditiis molestiae repudiandae fugiat eius
              sapiente expedita ut.
            </p>

            <button class='btn w-full sm:w-auto'>Get Started</button>

            <button class='btn-outline mt-4 w-full sm:ml-4 sm:mt-0 sm:w-auto '>
              Register Now
            </button>

            {/*brand */}
            <div class='mt-6 flex justify-center lg:justify-start flex-wrap gap-4'>
              <img
                src={brand1}
                alt='brand'
                class='w-[120px] cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36'
              />
              <img
                src={brand2}
                alt='brand'
                class='w-[120px] cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36'
              />
              <img
                src={brand3}
                alt='brand'
                class='w-[120px] cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36'
              />
              <img
                src={brand4}
                alt='brand'
                class='w-[120px] cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36'
              />
            </div>
          </div>

          {/*//! це замість justify-between в батьківському діві*/}
          {/*<div class='hidden px-4 lg:block lg:w-1/12'></div>*/}

          <div class='w-full px-4 lg:w-6/12'>
            <div class='lg:ml-auto lg:text-right'>
              <div class='relative z-10 inline-block pt-11 lg:pt-0'>
                <img
                  src={hero}
                  alt='hero section img'
                  class='max-w-full lg:ml-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
