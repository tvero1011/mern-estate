import React from 'react'
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div>
    <div>
      <h1>"Already have an Account?"</h1>
            <Link to={'/Signup'}>
            <span className='text-blue-700'> Sign Up</span>
            </Link>
     </div>
     </div>
  )
}
