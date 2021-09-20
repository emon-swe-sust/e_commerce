import React from 'react'
import {
  Bkash,
  Facebook,
  Instagram,
  MasterCard,
  Twitter,
  VisaCard,
  Whatsapp,
  Youtube
} from '../components/icons/Icons'

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
      <div className="flex mt-10 pb-3">
          <div className="m-auto">
              all right is reserved by 
          </div>
      </div>
    </div>
  )
}

export default Footer
