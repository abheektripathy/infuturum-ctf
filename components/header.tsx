import React from 'react'

function Header() {
  return (
    <div className='bg-black'>
<div className="navbar bg-black">
  <div className="flex-1">
  <a href="/" className="text-white text-xl md:text-xl lg:text-xl xl:text-xl font-bold font-poppins text-center ml-5" style={{
        background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>infuturum</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href ="/about "className="font-mono">itinerary</a></li>

      <li><a href = "https://tally.so/r/wQo6Pp" className="font-mono">register</a></li>
    </ul>
  </div>
</div>
</div>
  )
}

export default Header
