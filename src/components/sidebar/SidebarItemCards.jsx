import React, { useContext } from 'react'
import { shoppingListContext } from '../context/ShoppingContext'
import Delete from '../icons/Delete'
import Dollar from '../icons/Dollar'
import ItemDownArrow from '../icons/ItemDownArrow'
import ItemUpArrow from '../icons/ItemUpArrow'
import People from '../icons/People'
import Star from '../icons/Star'
import ChangeSelectedItemsCount from './../products/ChangeSelectedItemsCount'

function SidebarItemCards ({
  id: idx,
  totalPrice,
  setTotalPrice,
  image,
  title,
  category,
  rating,
  price,
  count
}) {
  const { itemList, selectedItems, setSelectedItems } = useContext(
    shoppingListContext
  )
  const funcChangeItemCount = (changedItemCount, type) => {
    if(type === 'UP'){
        setTotalPrice(totalPrice+price)
    }
    else if(type === 'DOWN'){
        setTotalPrice(totalPrice-price)
    } else{
        setTotalPrice(totalPrice-price*count)
    }

    ChangeSelectedItemsCount(
      idx,
      changedItemCount,
      itemList,
      selectedItems,
      setSelectedItems
    )
  }

  return (
    <li className='py-6 flex'>
      <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden'>
        <img
          src={image}
          alt='one of our product'
          className='w-full h-full object-center object-cover'
        />
      </div>

      <div className='ml-4 flex-1 flex flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <div>
              <h3>
                {title}
              </h3>

              <p className='mt-1 text-sm text-gray-500'>{category}</p>
            </div>

            <div>
              <div className='ml-4 flex'>
                {' '}
                <Star /> {rating && rating.rate}
              </div>
              <div className='ml-4 flex'>
                {' '}
                <People /> {rating && rating.count}
              </div>
              <div className='ml-4 flex'>
                {' '}
                <Dollar /> {price}
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 flex items-end justify-between text-sm'>
          <div className='flex space-x-1'>
            <div className='text-gray-500'>
              <button onClick={() => funcChangeItemCount(count + 1, 'UP')}>
                <ItemUpArrow />
              </button>
            </div>
            <div className='text-gray-500'>Qty {count}</div>
            <div className='text-gray-500'>
              <button onClick={()=> funcChangeItemCount(count > 1 ? count-1 : 0, 'DOWN')}>
                <ItemDownArrow />
              </button>
            </div>
          </div>
          <div className='flex'>
            <button
              type='button'
              className='font-medium text-red-600 hover:text-white hover:bg-red-500 rounded-md p-1'
                onClick={()=>funcChangeItemCount(0,'DELETE')}
            >
              <div className='flex'><Delete />Remove</div>
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SidebarItemCards
