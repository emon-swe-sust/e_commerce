import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { shoppingListContext } from './../context/ShoppingContext'
import CheckoutItems from './CheckoutItems'

function Checkout() {
  const history = useHistory()
  const { selectedItems, setSelectedItems, totalPrice } = useContext(shoppingListContext)

  const confirmCheckout = () => {
    setSelectedItems([])
    history.push('/confirm/')
  }

  if(selectedItems.length < 1) history.push('/')

  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-r from-indigo-100 to-green-100 mt-12'>
        <div
          className='my-3 flex bg-indigo-500 text-white
    shadow-xl'
        >
          <div className='m-auto font-bold text-4xl p-5 mt-4'>
            Shipment Information
          </div>
        </div>
        <div className='px-2 sm:px-16 md:px-40 w-full xl:px-80 py-10 md:flex md:flex-row-reverse'>
          <div className='md:flex-1 px-3 bg-white py-2 md:py-0 rounded-md'>
            <div
              className='my-3 flex rounded-md bg-gradient-to-r from-indigo-300 to-green-300 text-white
    shadow-xl'
            >
              <div className='m-auto font-bold text-xl py-2'>Products</div>
            </div>
            <div className='h-96 overflow-y-auto'>
              {selectedItems.map(({ image, title, price, count, id }) => (
                <CheckoutItems
                  key={id}
                  image={image}
                  title={title}
                  price={price}
                  count={count}
                />
              ))}
            </div>
            <div
              className='py-2 mt-2 bg-gradient-to-r from-indigo-400 to-green-400
          rounded-md text-white flex shadow-md'
            >
              <div className='m-auto'>
                <div className='flex font-semibold'>
                  Total Price &nbsp;:&nbsp;{totalPrice.toFixed(3)}
                </div>
              </div>
            </div>
          </div>
          <form
            className='flex-1 px-3 mt-10 md:mt-5'
            onSubmit={() => confirmCheckout()}
          >
            <div className='flex flex-col'>
              <label
                htmlFor='Name'
                className='text-lg text-gray-600 font-semibold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                placeholder='Name'
                className='shadow-xl appearance-none border-2 rounded w-full py-2
            px-3 text-gray-700 leading-tight focus:outline-none border-blue-200
            focus:shadow-outline hover:border-blue-600'
                required
              />
              <label
                htmlFor='Email'
                className='text-lg text-gray-600 font-semibold mb-2 mt-4'
              >
                Email
              </label>
              <input
                type='email'
                placeholder='Email'
                className='shadow-xl appearance-none border-2 rounded w-full py-2
            px-3 text-gray-700 leading-tight focus:outline-none border-blue-200
            focus:shadow-outline hover:border-blue-600'
                required
              />
              <label
                htmlFor='Address'
                className='text-lg text-gray-600 font-semibold mb-2 mt-4'
              >
                Shipping Address
              </label>
              <input
                type='text'
                placeholder='Address'
                className='shadow-xl appearance-none border-2 rounded w-full py-2
            px-3 text-gray-700 leading-tight focus:outline-none border-blue-200
            focus:shadow-outline hover:border-blue-600'
                required
              />
              <label
                htmlFor='Card Number'
                className='text-lg text-gray-600 font-semibold mb-2 mt-4'
              >
                Card Number
              </label>
              <input
                type='number'
                placeholder='Address'
                className='shadow-xl appearance-none border-2 rounded w-full py-2
            px-3 text-gray-700 leading-tight focus:outline-none border-blue-200
            focus:shadow-outline hover:border-blue-600'
                required
              />
              <label
                htmlFor='Contact No'
                className='text-lg text-gray-600 font-semibold mb-2 mt-4'
              >
                Contact No
              </label>
              <input
                type='number'
                placeholder='Contact Number'
                className='shadow-xl appearance-none border-2 rounded w-full py-2
            px-3 text-gray-700 leading-tight focus:outline-none border-blue-200
            focus:shadow-outline hover:border-blue-600'
                required
              />
            </div>
            <button
              className='bg-indigo-500 text-white w-full mt-8 rounded-md py-1'
              type='submit'
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
