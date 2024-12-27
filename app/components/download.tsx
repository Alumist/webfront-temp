import Image from 'next/image';
import Link from 'next/link';

function Download() {
  return (
    <>
      <section id='download'>
        <div className='container mx-auto px-6'>
          <h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
            Smile More
          </h2>
          <p className='max-w-lg mx-auto text-center text-gray-600'>
            Download the app today and start smiling more.
          </p>
        </div>
      </section>
      {/* // box */}
      <section id='download-box' className='py-32'>
        <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
          {/* box1 */}
          <div className='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3'>
            {/* img */}
            <div className='flex justify-center'>
              <Image
                src='/images/logo-chrome.svg'
                alt='logo-chrome'
                width={200}
                height={400}
              />
            </div>
            {/* text */}
            <h5 className='pt-6 text-xl font-bold'>Add to Chrome</h5>
            <p className='text-blue-400'>Minimum version 62</p>

            {/* dots? */}
            <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'>
              <Link
                href='/smile-link'
                className='block w-full mx-auto py-3 bg-blue-600 text-white hover:bg-blue-400 rounded-lg duration-200'
              >
                Smile Link
              </Link>
            </div>
          </div>
          {/* box2 */}
          <div className='w-full md:w-1/3'>
            <div className='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8'>
              {/* img */}
              <div className='flex justify-center'>
                <Image
                  src='/images/logo-firefox.svg'
                  alt='logo-chrome'
                  width={200}
                  height={400}
                />
              </div>
              {/* text */}
              <h5 className='pt-6 text-xl font-bold'>Add to Firefox</h5>
              <p className='text-blue-400'>Minimum version 55</p>

              {/* dots? */}
              <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'>
                <Link
                  href='/smile-link'
                  className='block w-full mx-auto py-3 bg-blue-600 text-white hover:bg-blue-400 rounded-lg duration-200'
                >
                  Smile Link
                </Link>
              </div>
            </div>
          </div>

          {/* box3 */}
          <div className='w-full md:w-1/3'>
            <div className='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16'>
              {/* img */}
              <div className='flex justify-center'>
                <Image
                  src='/images/logo-opera.svg'
                  alt='logo-chrome'
                  width={200}
                  height={400}
                />
              </div>
              {/* text */}
              <h5 className='pt-6 text-xl font-bold'>Add to Opera</h5>
              <p className='text-blue-400'>Minimum version 46</p>

              {/* dots? */}
              <div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'>
                <Link
                  href='/smile-link'
                  className='block w-full mx-auto py-3 bg-blue-600 text-white hover:bg-blue-400 rounded-lg duration-200'
                >
                  Smile Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Download;
