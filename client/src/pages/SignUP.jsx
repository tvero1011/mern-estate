import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-3'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input 
        type='text'
        placeholder='username'
        className='border p-3 rounded-lg'
        id='username'
        />
        <input 
        type='text'
        placeholder='email'
        className='border p-3 rounded-lg'
        id='email'
        />
        <input 
        type='text'
        placeholder='password'
        className='border p-3 rounded-lg'
        id='password'
        />
        <button 
        type='submit'
        className='bg-blue-600 p-3 text-white rounded-lg mt-4 hover:opacity-95 disabled:opacity-80'> Sign Up
         </button>
       </form>
   
       <div classname ='flex gap-2 mt-5'>
            <p>Have an account?
            <Link to={'/Signin'}>
              <span className='text-blue-700'> Sign in</span>
            </Link> 
            </p> 
       </div>     
    </div>
      )
};
