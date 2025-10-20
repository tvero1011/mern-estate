import {FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-blue-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
         <span className='text-orange-900'>The Apartment</span>
         <span className='text-zinc-700'>Directories</span>
      </h1>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600' />
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-zinc-700 hover:font-bold text-orange-900'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-zinc-700 hover:font-bold text-orange-900'>About</li>
        </Link>
        <Link to='/Signin'>
        <li className='text-zinc-700 hover:font-bold text-orange-900'>Sign in</li>
        </Link>
      </ul>
    </div>
    </header>
  );
}
