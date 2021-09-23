import React, { useContext, useState } from 'react'
import { shoppingListContext } from '../context/ShoppingContext'
import Delete from '../icons/DeleteIcon'
import DollarIcon from '../icons/DollarIcon'
import ItemDownArrowIcon from '../icons/ItemDownArrowIcon'
import ItemUpArrowIcon from '../icons/ItemUpArrowIcon'
import PeopleIcon from '../icons/PeopleIcon'
import StarIcon from '../icons/StarIcon'
import useChangeSelectedItemsCount from '../products/useChangeSelectedItemsCount'

function SidebarItemCards ({
  selectedItem
}) {
  const changeSelectedItemsCount = useChangeSelectedItemsCount(selectedItem.id)
  const {totalPrice, setTotalPrice} = useContext(shoppingListContext)

  const funcChangeItemCount = (type) => {
    if (type === 'UP') {
      setTotalPrice(totalPrice + selectedItem.price)
    } else if (type === 'DOWN') {
      setTotalPrice(totalPrice - selectedItem.price)
    } else {
      setTotalPrice(totalPrice - selectedItem.price * selectedItem.count)
    }
  }

  return (
    <li className='py-6 flex'>
      <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden'>
        <img
          src={selectedItem.image}
          alt='one of our product'
          className='w-full h-full object-center object-cover'
        />
      </div>

      <div className='ml-4 flex-1 flex flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <div>
              <h3>{selectedItem.title}</h3>

              <p className='mt-1 text-sm text-gray-500'>{selectedItem.category}</p>
            </div>

            <div>
              <div className='ml-4 flex'>
                {' '}
                <StarIcon /> {selectedItem.rating && selectedItem.rating.rate}
              </div>
              <div className='ml-4 flex'>
                {' '}
                <PeopleIcon /> {selectedItem.rating && selectedItem.rating.count}
              </div>
              <div className='ml-4 flex'>
                {' '}
                <DollarIcon /> {selectedItem.price}
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 flex items-end justify-between text-sm'>
          <div className='flex space-x-1'>
            <div className='text-gray-500'>
              <button
                onClick={()=>changeSelectedItemsCount(selectedItem.count > 0 ? selectedItem.count - 1 : 0)
                }
              >
                <ItemDownArrowIcon />
              </button>
            </div>
            <div className='text-gray-500'>Quantity {selectedItem.count}</div>
            <div className='text-gray-500'>
              <button onClick={() => changeSelectedItemsCount(selectedItem.count + 1)}>
                <ItemUpArrowIcon />
              </button>
            </div>
          </div>
          <div className='flex'>
            <button
              type='button'
              className='font-medium text-red-600 hover:text-white hover:bg-red-500 rounded-md p-1'
              onClick={() => changeSelectedItemsCount(0)}
            >
              <div className='flex'>
                <Delete />
                Remove
              </div>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SidebarItemCards
