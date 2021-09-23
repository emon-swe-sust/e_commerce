import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

function ConfirmPurchase() {
    return (
        <div>
            <Navbar />
            <div className='bg-gray-100'>
                <div className='w-9/12 m-auto py-16 min-h-screen flex items-center justify-center'>
                    <div className='bg-green-400 shadow overflow-hidden sm:rounded-lg pb-8'>
                        <div className='border-t border-gray-200 text-center pt-8'>
                            <h1 className='text-4xl font-bold text-white'>Successful !</h1>
                            <h1 className='text-2xl font-medium py-8 px-12 text-white'>We will contact you as soon as the product become ready! </h1>
                            <Link to='/'>
                                <button className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>
                                    HOME
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmPurchase
