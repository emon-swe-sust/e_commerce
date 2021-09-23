import React from 'react'
import UpArrowIcon from '../icons/UpArrowIcon'
import { HashLink } from 'react-router-hash-link'

function HashLinkUp () {
  return (
      <div className='pb-3 ml-auto flex fixed bottom-2 w-full'>
        <HashLink
          smooth
          to='/#banner'
          className='mr-7 text-green-500 ml-auto hover:-translate-y-2 transition transform'
        >
          <button className='ml-4'>
            <UpArrowIcon />
          </button>
        </HashLink>
      </div>
  )
}

export default HashLinkUp
