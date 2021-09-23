import React from 'react'

function NoItemFound() {
    return (
        <div className='m-4 rounded-md bg-red-100 flex py-24'>
            <div className="m-auto text-2xl font-semibold px-4">Sorry, we don't have this product right now!</div>
        </div>
    )
}

export default NoItemFound
