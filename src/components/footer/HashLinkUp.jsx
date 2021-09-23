import React from 'react'
import UpArrow from './../icons/UpArrow'
import { HashLink } from 'react-router-hash-link'

function HashLinkUp () {
  return (
      <div className='pb-3 ml-auto flex fixed bottom-2 w-full'>
        <HashLink
          smooth
          to='/#nav'
          className='mr-7 text-blue-700 ml-auto hover:-translate-y-2 transition transform'
        >
          <button className='ml-4'>
            <UpArrow />
          </button>
        </HashLink>
      </div>
  )
}

export default HashLinkUp
