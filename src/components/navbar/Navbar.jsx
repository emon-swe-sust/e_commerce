import React, { useState } from 'react'
import SidebarContainer from '../sidebar/SidebarContainer'
import { Link } from 'react-router-dom'

function Navbar () {
  const [navShow, setNavShow] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const cart = (
    <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8 text-indigo-700 hover:-translate-y-1 hover:bg-green-500
    hover:text-white transform transition hover:h-10 hover:w-10'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358
    5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1
    1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5
    1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
        />
      </svg>
    </button>
  )

  const element = (
    <div
      className='text-lg md:flex text-indigo-700 
     font-semibold mt-3 md:mt-0'
    >
      <span className='navitem'><Link to='/'>E M S</Link></span>
      <div className='navitem'>Popular</div>
      <div className='navitem'>Offers</div>
      <div className='navitem'>Newly Arrived</div>
      <div className='mr-5 hidden md:inline-block md:ml-auto'>{cart}</div>
    </div>
  )

  return (
    <nav
      className='w-full justify-between items-center flex-wrap
      px-6 py-2 bg-gradient-to-r from-indigo-200 to-green-200 fixed top-0'
    >
      <div className='flex md:hidden w-full'>
        <button
          className='items-center px-3 py-2 border rounded text-teal-200 border-indigo-700
        hover:text-white hover:border-white'
          onClick={() => setNavShow(!navShow)}
        >
          <svg
            className='fill-current h-3 w-3 text-indigo-700'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <div className='inline-flex ml-auto'>{cart}</div>
      </div>

      <div className='w-full block flex-grow md:inline-block md:items-center'>
        {navShow ? element : <div className='hidden md:block'> {element} </div>}
      </div>
      
        <SidebarContainer
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        
      
    </nav>
  )
}

export default Navbar
