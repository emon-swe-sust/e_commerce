import React from 'react'

function Banner () {
  return (
    <div
    id='banner'
      className='bg-cover bg-center h-auto text-white shadow-xl py-24 px-10 object-fill'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"
      }}
    >
      <div className='md:w-1/2 font-mono sm:ml-16 md:ml-32'>
        <p
          className='bg-clip-text sha text-transparent bg-gradient-to-r
      from-green-700 to-indigo-700 font-bold text-4xl  md:pt-16'
        >
          Treat yo' self
        </p>
        <p className='bg-clip-text sha text-transparent bg-gradient-to-r
         from-indigo-500 to-green-500 font-bold text-xl pb-28'>
          It's an add to cart kinda day !
        </p>
        <button
          className='bg-gradient-to-r from-green-500 to-indigo-500 t py-2 px-5
        text-white font-bold uppercase text-xl rounded hover:bg-gray-200
        hover:-translate-y-1 transform transition'
        >
          Contact us
        </button>
      </div>
    </div>
  )
}

export default Banner
