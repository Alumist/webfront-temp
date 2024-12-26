import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section id='hero'>
      {/* img container/content */}
      <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0'>
        <div className='flex flex-col space-y-10 lg:mt-16 lg:w-1/2'>
          <h1 className='text-3xl font-semibold text-center lg:text-left lg:text-6xl'>
            A Happy Face created by Grok
          </h1>
          <p className='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0'>
            A Happy Place, needs a Happy Face. Grok is a happy face that will
            make you smile.
          </p>
          {/* buttons */}
          <div className='flex items-center justify-center w-full space-x-4 lg:justify-start'>
            <Link
              href='https://x.com/grok'
              target='_blank'
              className='p-4 text-sm font-semibold text-white bg-blue-600 rounded shadow-md border-blue md:text-base hover:bg-blue-400 hover:text-blue'
            >
              Grok?
            </Link>
            <Link
              href='https://pubmed.ncbi.nlm.nih.gov/35285408/'
              target='_blank'
              className='p-4 text-sm font-semibold text-gray-600 bg-gray-400 rounded shadow-md border-blue md:text-base hover:bg-gray-200 hover:text-gray-800'
            >
              Why Smile with Grok?
            </Link>
          </div>
        </div>

        {/* img */}
        <div className='relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
          <div className='bg-hero'></div>
          <Image
            src='/images/company.jpg'
            alt='Grok'
            width={500}
            height={500}
            className='relative z-10 lg:top-24 xl:top-0 overflow-x-visible rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
