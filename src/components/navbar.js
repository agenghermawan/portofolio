import React from 'react'
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <>
      <div className='mx-auto hero container'>
        <div className='flex justify-between py-5'>
          <h1>
            Portofolio
          </h1>
         <ul>
          <li>
            About Me 
          </li>
          <li>
            Experience
          </li>
          <li>
            Projects 
          </li>
          <li>
            Contact Me 
          </li>
          <li>
            <button type='button' className='p-1 outline outline-offset-2 outline-blue-400 rounded-md'>
              Resume 
            </button>
          </li>
         </ul>
        </div>
      </div>
    </>
  )
}
