import React, { Fragment, useContext, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { shoppingListContext } from '../context/ShoppingContext'
import SidebarItemCards from './SidebarItemCards'
import { Link } from 'react-router-dom'

export default function Example ({ isSidebarOpen, setIsSidebarOpen }) {
  const { selectedItems } = useContext(shoppingListContext)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let tempPrice = 0
    let length = selectedItems.length
    for (let i = 0; i < length; i++) {
      tempPrice += selectedItems[i].count * selectedItems[i].price
    }

    setTotalPrice(tempPrice)
  }, [selectedItems])

  return (
    <Transition.Root show={isSidebarOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-hidden'
        onClose={() => setIsSidebarOpen(false)}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                  <div className='flex-1 pb-6  overflow-y-auto'>
                    <div className='flex items-start bg-gradient-to-r from-indigo-400 to-green-400 py-4 px-4 sm:px-6 justify-between'>
                      <Dialog.Title className='text-lg font-medium text-white'>
                        Shopping cart
                      </Dialog.Title>
                      <div className='ml-3 h-7 flex items-center'>
                        <button
                          type='button'
                          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XIcon
                            className='h-6 w-6 text-white bg-red-500 rounded-md
                          hover:-translate-y-1 shadow-xl hover:opacity-60 transition transform'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                    </div>

                    <div className='mt-8 px-4 sm:px-6'>
                      <div className='flow-root'>
                        <div className='-my-6 divide-y divide-gray-200'>
                          {selectedItems.map(
                            ({
                              id,
                              image,
                              title,
                              category,
                              rating,
                              price,
                              count
                            }) => (
                              <SidebarItemCards
                                key={id}
                                totalPrice={totalPrice}
                                setTotalPrice={setTotalPrice}
                                id={id}
                                image={image}
                                title={title}
                                category={category}
                                rating={rating}
                                price={price}
                                count={count}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                      <p>Subtotal</p>
                      <p>{totalPrice.toFixed(3)}</p>
                    </div>
                    <p className='mt-0.5 text-sm text-gray-500'>
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className='mt-6'>
                      <button
                        className='w-full'
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <Link
                          to='/checkout/'
                          className='flex justify-center items-center px-6 py-3 border
                         border-transparent rounded-md shadow-sm text-base font-medium text-white
                        bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1 transform transition'
                        >
                          Checkout
                        </Link>
                      </button>
                    </div>
                    <div className='mt-6 flex justify-center text-sm text-center text-gray-500'>
                      <p>
                        or{' '}
                        <button
                          type='button'
                          className='text-indigo-600 font-medium hover:text-indigo-500'
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden='true'> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
