import React from 'react'
import DollarIcon from '../icons/DollarIcon'

function CheckoutItems ({ image, title, price, count }) {
  return (
    <div>
      <hr />
      <div className='flex my-2'>
        <div className='flex-shrink-0 w-16 h-16 mt-1 border border-gray-200 rounded-md overflow-hidden'>
          <img
            src={image}
            alt='one of our product'
            className='w-full h-full object-center object-cover'
          />
        </div>
        <div className='font-semibold text-xs'>
          <div className='my-1'>{title}</div>
          <hr />
          <div className='mt-2'>Qty {count}</div>
        </div>

        <div className='ml-auto'>
          <div className='flex'>
            <DollarIcon />
            {price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItems
