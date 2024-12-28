function Faq() {
  return (
    <>
      <section id='faq'>
        <div className='container mx-auto'>
          <h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='max-lg px-6 mx-auto text-center text-blue-600'>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
      </section>
      <section id='faq-bottom'>
        {/* container */}
        <div className='container mx-auto px-6 mb-32'>
          <div className='max-w-2xl m-8 mx-auto overflow-hidden'>
            {/* tab 1 */}
            <div className='py-1 border-b outline-none group' tabIndex={1}>
              {/* tab container */}
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                {/* title */}
                <div className='transtion duration-500 ease group-hover:text-blue-400'>
                  Why smile?
                </div>
                {/* arrow */}
                <div className='transtion duration-500 ease group-focus:-rotate-180 group-focus:text-blue-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={18}
                    height={12}
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={3}
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>
              {/* content */}
              <div className='overflow-hidden transtion duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  We are a team of creative and talented individuals who love to
                  create beautiful and functional websites. We are passionate
                  about our work and we love to make our clients happy.
                </p>
              </div>
            </div>

            {/* tab 2 */}
            <div className='py-1 border-b outline-none group' tabIndex={2}>
              {/* tab container */}
              <div className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease'>
                {/* title */}
                <div className='transtion duration-500 ease group-hover:text-blue-400'>
                  How do I smile?
                </div>
                {/* arrow */}
                <div className='transtion duration-500 ease group-focus:-rotate-180 group-focus:text-blue-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={18}
                    height={12}
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={3}
                      d='M1 1l8 8 8-8'
                    />
                  </svg>
                </div>
              </div>
              {/* content */}
              <div className='overflow-hidden transtion duration-500 group-focus:max-h-screen max-h-0 ease'>
                <p className='py-2 text-justify text-gray-400'>
                  Smiling is easy! Just think of something that makes you happy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Faq;
