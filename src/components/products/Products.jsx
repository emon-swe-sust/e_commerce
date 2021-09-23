import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import ProductSearch from './ProductSearch'
import HashLinkUp from '../footer/HashLinkUp'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Footer from './../footer/Footer'
import Loading from './Loading'

function Products () {
  const [searchedCategory, setSearchedCategory] = useState('ALL PRODUCTS')
  const [searchedItems, setSearchedItems] = useState('')
  const [isItemsLoaded, setIsItemLoaded] = useState(false)
  const categories = [
    'ALL PRODUCTS',
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing"
  ]

  useEffect(() => {
    function fetchItems () {
      if (localStorage.getItem('items') === null) {
        axios
          .get('https://fakestoreapi.com/products/')
          .then(response => response.data)
          .then(response =>
            localStorage.setItem('items', JSON.stringify(response))
          )
          .then(() => setIsItemLoaded(true))
          .catch(() => alert('API DOWN!'))
      } else setIsItemLoaded(true)
    }
    fetchItems()
  }, [])

  return (
    <div className='mt-12'>
      <Banner />
      <div
        className='my-3 flex bg-gradient-to-r from-indigo-300 to-green-300 text-white
    shadow-xl w-full'
      >
        <div className='m-auto font-bold text-4xl py-5'>Our Products</div>
      </div>
      <div className='px-4 sm:px-20 md:px-20 xl:px-60 sm:flex'>
        <div className='sm:flex-1 sm:px-4'>
          <label
            htmlFor='search category'
            className='text-lg text-gray-600 font-bold'
          >
            Select Category
          </label>
          <div className='relative w-full'>
            <select
              className='block appearance-none w-full bg-white border border-indigo-200 hover:border-indigo-500 text-gray-700 py-2
              px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
              name='category'
              onChange={e => setSearchedCategory(e.target.value)}
              value={searchedCategory}
            >
              {categories &&
                categories.map(category => {
                  return (
                    <option key={category} value={category}>
                      {category.toUpperCase()}
                    </option>
                  )
                })}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
        </div>
        <div className='sm:flex-1 sm:px-4'>
          <label
            htmlFor='search category'
            className='text-lg text-gray-600 font-bold'
          >
            Search Item
          </label>
          <div className='relative w-full'>
            <input
              className='block appearance-none w-full bg-white border border-indigo-200 text-gray-700 py-2
              px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white hover:border-indigo-500 focus:border-indigo-500'
              name='Items'
              onChange={e => setSearchedItems(e.target.value)}
              value={searchedItems}
            />
          </div>
        </div>
      </div>
      {isItemsLoaded || localStorage.getItem('items') ? (
        <ProductSearch
          items={JSON.parse(localStorage.getItem('items'))}
          searchedCategory={searchedCategory}
          searchedItems={searchedItems}
        />
      ) : (
        <Loading />
      )}

      <Navbar />
      <HashLinkUp />
      <Footer />
    </div>
  )
}

export default Products
