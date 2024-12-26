import Image from 'next/image';
import Link from 'next/link';

function Features() {
  return (
    <>
      <section id='features'>
        <div className='container mx-auto mt-16 px-6'>
          <h2 className='mb-6 text-4xl font-semibold text-center'>Smiles</h2>
          <p className='max-w-md mx-auto text-center text-gray-800'>
            With Smiles, you can make the world a better place. Smiles are
            contagious and can make a difference in someone's day.
          </p>
        </div>
      </section>

      <section id='tabs'>
        <div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
          <div className='bg-tabs'></div>
          {/* tabs */}
          <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'>
            {/* tab1 */}
            <div
              className='flex justify-center text-center cursor-pointer text-gray-800 border-b md:border-b-0 hover:text-blue-800 md:w-1/3 tab'
              data-target='panel-1'
            >
              <div
                className='py-5 border-b-4 border-blue-400'
                data-target='panel-1'
              >
                Simple Business Plan
              </div>
            </div>
            {/* tab2 */}
            <div
              className='flex justify-center text-center cursor-pointer text-gray-800 border-b md:border-b-0 hover:text-blue-800 md:w-1/3 tab'
              data-target='panel-2'
            >
              <div className='py-5' data-target='panel-2'>
                Not So Simple Business Plan
              </div>
            </div>
            {/* tab3 */}
            <div
              className='flex justify-center text-center cursor-pointer text-gray-800 border-b md:border-b-0 hover:text-blue-800 md:w-1/3 tab'
              data-target='panel-3'
            >
              <div className='py-5' data-target='panel-3'>
                Difficult Business Plan
              </div>
            </div>
          </div>
          {/* panels */}
          <section id='panels' className='container mx-auto'>
            {/* first pan */}
            <div className='flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1'>
              {/* img */}
              <div className='flex justify-center md:w-1/2'>
                <Image
                  src='/images/thinking.jpg'
                  alt='Smiles'
                  width={300}
                  height={300}
                  className='relative z-10 rounded-md'
                />
              </div>
              {/* text */}
              <div className='flex flex-col space-y-8 md:w-1/2'>
                <h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                  Simple Business Plan
                </h3>
                <p className='max-w-md text-center text-gray-600 md:text-left'>
                  This is a simple business plan that can be done in a minute.
                  As easy as a drawn stick figure.
                </p>
                <div className='mx-auto md:mx-0'>
                  <Link
                    href='#'
                    className='px-2 py-3 mt-4 font-semibold text-white rounded-lg md:inline-flex bg-blue-600 hover:bg-blue-400 '
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 pan */}
            <div className='flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-1'>
              {/* img */}
              <div className='flex justify-center md:w-1/2'>
                <Image
                  src='/images/annoyed.jpg'
                  alt='Smiles'
                  width={300}
                  height={300}
                  className='relative z-10 rounded-md'
                />
              </div>
              {/* text */}
              <div className='flex flex-col space-y-8 md:w-1/2'>
                <h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                  Not So Simple Plan
                </h3>
                <p className='max-w-md text-center text-gray-600 md:text-left'>
                  This is a simple business plan that can be done in 15 minutes.
                  As 'easy' as a drawn stick figure, with a very little detail.
                </p>
                <div className='mx-auto md:mx-0'>
                  <Link
                    href='#'
                    className='px-2 py-3 mt-4 font-semibold text-white rounded-lg md:inline-flex bg-blue-600 hover:bg-blue-400 '
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* 3 pan */}
            <div className='flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-1'>
              {/* img */}
              <div className='flex justify-center md:w-1/2'>
                <Image
                  src='/images/angry.jpg'
                  alt='Smiles'
                  width={300}
                  height={300}
                  className='relative z-10 rounded-md'
                />
              </div>
              {/* text */}
              <div className='flex flex-col space-y-8 md:w-1/2'>
                <h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                  Difficult Plan
                </h3>
                <p className='max-w-md text-center text-gray-600 md:text-left'>
                  This is a Difficult business plan that can be done in a 30
                  minutes. As hard as a drawn stick figure, with details.
                </p>
                <div className='mx-auto md:mx-0'>
                  <Link
                    href='#'
                    className='px-2 py-3 mt-4 font-semibold text-white rounded-lg md:inline-flex bg-blue-600 hover:bg-blue-400 '
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default Features;
