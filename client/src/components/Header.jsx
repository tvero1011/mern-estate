import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Header() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <header className='bg-blue-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-xs sm:text-2xl, '>
         <span className='text-orange-900'>AOS</span>
         <br  />    
         <span className='text-zinc-700'>Apartment Directories</span>
      </h1>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600' />
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-zinc-700 hover:font-bold'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-zinc-700 hover:font-bold'>About</li>
        </Link>

        <Link to='/Signin'>
        {currentUser ? (
          <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>
        ) : (   
         <li className='text-xs sm:text-base text-zinc-700 hover:font-bold'>Sign-in</li>
        )}
        </Link>
      </ul>
    </div>
    </header>
  );
}
export default Header;
