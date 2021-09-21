import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import axios from 'axios'
import { shoppingListContext } from '../context/ShoppingContext'
import ItemCards from './ItemCards'

function Products () {
  const { itemList, setItemList } = useContext(shoppingListContext)

  useEffect(() => {
    function fetchItems () {
      if (localStorage.getItem('items') === null) {
        axios
          .get('https://fakestoreapi.com/products/')
          .then(response => response.data)
          .then(response =>
            localStorage.setItem('items', JSON.stringify(response))
          )
          .then(() => setItemList(JSON.parse(localStorage.getItem('items'))))
          .catch(() => alert('API DOWN!'))
      } else {
        setItemList(JSON.parse(localStorage.getItem('items')))
      }
    }
    fetchItems()
  }, [setItemList])

  return (
    <div>
      <div
        className='my-3 flex bg-gradient-to-r from-indigo-300 to-green-300 text-white
    shadow-xl'
      >
        <div className='m-auto font-bold text-4xl py-5'>Our Products</div>
      </div>
      {itemList.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-0 sm:px-20 md:px-20 xl:px-60'>
          {itemList.map(
            ({ title, id, price, description, category, image, rating }) => {
              return (
                <ItemCards
                  key={id}
                  title={title}
                  id={id}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                ></ItemCards>
              )
            }
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Products
