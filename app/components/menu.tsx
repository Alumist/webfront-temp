import Link from 'next/link';



function Menu() {
  return (
    <div
      id='menu'
      className='fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full min-h-screen px-6 py-1 pt-48 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-[#13182c] '
    >
      <div className='w-full py-3 text-center'>
        <Link href='#features' className='hover:text-gray-400'>
          Features
        </Link>
      </div>
      <div className='w-full py-3 text-center'>
        <Link href='#download' className='hover:text-gray-400'>
          Download
        </Link>
      </div>
      <div className='w-full py-3 text-center'>
        <Link href='#faq' className='hover:text-gray-400'>
          FAQ
        </Link>
      </div>
      <div className='w-full py-3 text-center'>
        <Link
          href='https://www.nicholasquiroz.me'
          className='hover:text-gray-400'
          target='_blank'
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
export default Menu;
