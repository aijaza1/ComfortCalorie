import React from 'react';
import Link from 'next/link';

const Offer = () => {
  return (
    <div id='offer' className='w-full h-screen bg-slate-100'>
      <div className='max-w-[1240px] m-auto px-2 py-10 w-full'>

        <p className='text-center text-4xl lg:text-5xl tracking-wide uppercase mt-6 mb-6 text-[#FB8500]'>
          What We Offer
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-10'>

          {/* left */}
          <div className='w-full shadow-xl bg-white shadow-gray-400 rounded-xl px-2 py-8 lg:px-10 lg:py-24'>
            <div className='flex flex-col items-center justify-center text-center'>
              <div className='text-2xl lg:text-3xl lg:leading-relaxed'>
                <p>Determine how many calories you should be eating</p>
              </div>

              <div className='pt-5 lg:pt-12'>
                <Link href='/#calculator'>
                  <button className='bg-[#FB8500] hover:bg-[#E07701] text-white font-extrabold text-xl lg:text-2xl py-3 px-4 border-2 border-black rounded-md hover:scale-105 ease-in duration-300'>
                    Calorie Calculator
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='w-full shadow-xl bg-white shadow-gray-400 rounded-xl px-2 py-8 lg:px-10 lg:py-24'>
            <div className='flex flex-col items-center justify-center text-center'>
              <div className='text-2xl lg:text-3xl lg:leading-relaxed'>
                <p>Find nutritional facts for the foods you eat</p>
              </div>

              <div className='pt-5 lg:pt-12'>
                <Link href='/#finder'>
                  <button className='bg-[#FB8500] hover:bg-[#E07701] text-white font-extrabold text-xl lg:text-2xl py-3 px-8 border-2 border-black rounded-md hover:scale-105 ease-in duration-300'>
                    Calorie Finder
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Offer;
