import React, { useContext, useState, useEffect } from 'react'
import { shoppingListContext } from '../context/ShoppingContext'
import DollarIcon from '../icons/DollarIcon'
import ItemDownArrowIcon from '../icons/ItemDownArrowIcon'
import ItemUpArrow from '../icons/ItemUpArrowIcon'
import People from '../icons/PeopleIcon'
import StarIcon from '../icons/StarIcon'
import ChangeSelectedItemsCount from './ChangeSelectedItemsCount'

function ItemCards ({item}) {
  const {  selectedItems, setSelectedItems } = useContext(
    shoppingListContext
  )
  const [itemCount, setItemCount] = useState(0)

  const funcChangeItemCount = changedItemCount => {

    setItemCount(changedItemCount)
    ChangeSelectedItemsCount(
      item.id,
      changedItemCount,
      
      selectedItems,
      setSelectedItems
    )
  }

  useEffect(() => {
    let tempItem = selectedItems.filter(({ id }) => id === item.id)
    if (tempItem.length > 0) {
      setItemCount(tempItem[0].count)
    } else {
      setItemCount(0)
    }
  }, [selectedItems, item.id])

  return (
    <div
      className='px-5 pt-5 my-4 mx-0 sm:mx-4 shadow-md rounded-lg bg-gradient-to-r from-green-50
        to-indigo-50 hover:from-indigo-100 hover:to-green-100 hover:-translate-y-1 transform
        transition flex flex-col justify-between w-96 md:w-80 xl:w-72'
    >
      <div className="overflow-hidden w-full rounded-md shadow-xl
      border-2 border-indigo-100 hover:border-indigo-300">

      
      <img
        src={item.image}
        alt='one of our product'
        className='rounded-md shadow-xl h-80
         transform
         hover:h-72 hover:scale-110 transition-all w-96 md:w-80 xl:w-72'
      />
      </div>
      <div className='mt-2 uppercase'>{item.category}</div>
      <hr />
      <div className='font-semibold mt-2'>{item.title}</div>
      <div className='flex mb-1'>
        <div className='mt-2 flex justify-between'>
          <DollarIcon />
          &nbsp; {item.price}
        </div>
        <div className='mt-2 ml-auto'>
          <div className='mt-2 flex ml-auto'>
            <StarIcon />
            &nbsp; {item.rating.rate}
          </div>
          <div className='flex ml-auto'>
            <People />
            &nbsp; {item.rating.count}
          </div>
        </div>
      </div>
      <div className='mt-auto mb-3 inline-block'>
        {itemCount === 0 ? (
          <button
            className=' p-2 text-white rounded-md w-full bg-indigo-500
            shadow-md hover:shadow-2xl hover:bg-indigo-700'
            onClick={() => funcChangeItemCount(itemCount + 1)}
          >
            Add to cart
          </button>
        ) : (
          <div
            className='w-full px-2 py-1 rounded-md bg-blue-50 border-2
          border-blue-200 hover:border-blue-600 flex'
          >
            <div className='m-auto flex space-x-4'>
              <button
                onClick={() =>
                  funcChangeItemCount(itemCount > 0 ? itemCount - 1 : 0)
                }
              >
                <ItemDownArrowIcon />
              </button>
              <div className='flex'>{itemCount}</div>
              <button onClick={() => funcChangeItemCount(itemCount + 1)}>
                <ItemUpArrow />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemCards
