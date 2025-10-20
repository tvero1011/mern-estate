import {FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-blue-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
         <span className='text-orange-900'>The Apartment</span>
         <span className='text-zinc-700'>Directories</span>
      </h1>
      <form>
        <input type="text" placeholder='Search....'/>
      </form>
    </div>
    </header>
  );
}
