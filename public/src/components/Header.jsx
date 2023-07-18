import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <>
    <div className="mainheaderdiv">
 <ul>
<li>
  <Link to='/' className='links'>
   Home
  </Link>
</li>
<li>
  <Link to='/about' className='links'>
    About
  </Link>
</li>
{/* <li>
  <Link to='/books' className='links'>
    Books
  </Link>
</li> */}
<li>
  <Link to='/add' className='links'>
    Addbooks
  </Link>
</li>
 </ul>
    </div>
    </>
  )
}

export default Header