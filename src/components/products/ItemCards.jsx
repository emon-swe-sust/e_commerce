import React, { useContext, useState, useEffect } from 'react'
import { shoppingListContext } from '../context/ShoppingContext'
import Dollar from '../icons/Dollar'
import ItemDownArrow from '../icons/ItemDownArrow'
import ItemUpArrow from '../icons/ItemUpArrow'
import People from '../icons/People'
import Star from '../icons/Star'
import Text from '../icons/Text'

function ItemCards ({
  title,
  id:idx,
  price,
  description,
  category,
  image,
  rating
}) {
  const { itemList, selectedItems, setSelectedItems } = useContext(shoppingListContext)
  const [seeMoreDesc, setSeeMoreDesc] = useState(true)
  const [itemCount, setItemCount] = useState(0)

  useEffect(()=>{
      let currentItem = itemList.filter(({id})=>id===idx)
      currentItem = currentItem[0]
      currentItem = {...currentItem, 'count':itemCount}
      console.log(currentItem)
      if(itemCount === 0){
          setSelectedItems(selectedItems.filter(({id})=>id!==idx))
      }
      else if(itemCount === 1){
          setSelectedItems([...selectedItems, currentItem])
      }
      else{
          setSelectedItems(selectedItems.map((item) => {
              if(item.id === idx) return currentItem
              else return item
          }))
      }
  },[itemCount])

  return (
    <div
      className='px-6 pt-6 my-4 mx-3 sm:mx-8 shadow-md rounded-lg bg-gradient-to-r from-green-50
        to-indigo-50 hover:from-indigo-100 hover:to-green-100 hover:-translate-y-1 transform
        transition flex flex-col justify-between'
    >
      <img
        src={image}
        className='w-full rounded-md shadow-xl h-96 border-2 border-blue-200 hover:border-blue-500'
      />
      <div className='mt-2 uppercase'>{category}</div>
      <hr />
      <div className='font-semibold mt-2'>{title}</div>
      <div className='flex'>
        <div className='mt-2 flex justify-between'>
          <Dollar />
          &nbsp; {price}
        </div>
        <div className='mt-2 ml-auto'>
          <div className='mt-2 flex ml-auto'>
            <Star />
            &nbsp; {rating.rate}
          </div>
          <div className='flex ml-auto'>
            <People />
            &nbsp; {rating.count}
          </div>
        </div>
      </div>
      <div className='flex'>
        <Text />
        {seeMoreDesc ? (
          <div className='truncate'>{description}</div>
        ) : (
          <div>
            {description}{' '}
            <div className='flex'>
              <button
                className='ml-auto font-semibold text-blue-500 hover:text-black'
                onClick={() => setSeeMoreDesc(!seeMoreDesc)}
              >
                see less
              </button>
            </div>
          </div>
        )}

        {seeMoreDesc && (
          <button
            className='font-semibold text-blue-500 hover:text-black'
            onClick={() => setSeeMoreDesc(!seeMoreDesc)}
          >
            &nbsp;see&nbsp;more
          </button>
        )}
      </div>
      <div className='mt-auto mb-3 inline-block'>
        {itemCount === 0 ? (
          <button
            className=' p-2 text-white rounded-md w-full bg-indigo-500
            shadow-md hover:shadow-2xl hover:bg-indigo-700'
            onClick={() => setItemCount(itemCount + 1)}
          >
            Add to cart
          </button>
        ) : (
          <div
            className='w-full px-2 py-1 rounded-md bg-blue-50 border-2
          border-blue-200 hover:border-blue-600 flex'
          >
            <div className='m-auto flex space-x-4'>
              <button onClick={() => setItemCount(itemCount + 1)}>
                <ItemUpArrow />
              </button>
              <div className='flex'>{itemCount}</div>
              <button
                onClick={() => setItemCount(itemCount > 0 ? itemCount - 1 : 0)}
              >
                <ItemDownArrow />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemCards
