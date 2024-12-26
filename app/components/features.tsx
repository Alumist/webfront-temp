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
          <div className='bg-tabs'>
            {/* tabs */}
            <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'>
              {/* tab1 */}
              <div
                className='flex justify-center text-center text-gray-800 border-b md:border-b-0 hover:text-blue-800 md:w-1/3 tab'
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
                className='flex justify-center text-center text-gray-800 border-b md:border-b-0 hover:text-blue-800 md:w-1/3 tab'
                data-target='panel-1'
              >
                <div className='py-5' data-target='panel-1'>
                  Not So Simple Business Plan
                </div>
              </div>
              {/* tab3 */}
              <div
                className='flex justify-center text-center text-gray-800 border-b md:border-b-0 hover:text-blue-800 md:w-1/3 tab'
                data-target='panel-1'
              >
                <div className='py-5' data-target='panel-1'>
                  Diffecult Business Plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Features;
