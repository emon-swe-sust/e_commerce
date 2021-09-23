import React from 'react'
import SadIcon from '../icons/SadIcon'

function NoItemFound() {
    return (
        <div className='m-4 rounded-md bg-red-100 flex py-24'>
            <div className="m-auto text-2xl font-semibold px-4 flex">Sorry, we don't have this product right now ! &nbsp; <SadIcon /></div>
        </div>
    )
}

export default NoItemFound
