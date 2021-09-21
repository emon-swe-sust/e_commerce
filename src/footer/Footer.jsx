import React from 'react'
import Bkash from '../components/icons/Bkash'
import Facebook from '../components/icons/Facebook'
import Instagram from '../components/icons/Instagram'
import Twitter from '../components/icons/Twitter'
import Whatsapp from '../components/icons/Whatsapp'
import Youtube from '../components/icons/Youtube'
import MasterCard from '../components/icons/MasterCard'
import VisaCard from '../components/icons/VisaCard'

function Footer () {
  return (
    <div
      className='h-auto bg-blue-900 w-full
        text-white pt-12'
    >
      <div className='flex'>
        <div className='block m-auto text-2xl'>Thank's for choosing us!</div>
      </div>
      <div className='flex flex-wrap'>
        <div className='divide-x-4 m-auto divide-indigo-200 pt-10 flex'>
          <div className='pr-10 pl-5'>
            <div className='mb-3'>PAYMENT METHODS</div>
            <div className='flex flex-wrap'>
              <Bkash />
              <MasterCard />
              <VisaCard />
            </div>
          </div>
          <div className='pl-10 pr-5'>
            <div className='mb-3'>CONNECT WITH US</div>
            <div className='flex flex-wrap'>
              <Facebook />
              <Whatsapp />
              <Instagram />
              <Twitter />
              <Youtube />
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-10 pb-3'>
        <div className='m-auto'>All right is reserved by DSi</div>
      </div>
    </div>
  )
}

export default Footer
