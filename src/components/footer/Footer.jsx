import React from 'react'
import BkashIcon from '../icons/BkashIcon'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import TwitterIcon from '../icons/TwitterIcon'
import WhatsappIcon from '../icons/WhatsappIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import MasterCardIcon from '../icons/MasterCardIcon'
import VisaCardIcon from '../icons/VisaCardIcon'

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
              <BkashIcon />
              <MasterCardIcon />
              <VisaCardIcon />
            </div>
          </div>
          <div className='pl-10 pr-5'>
            <div className='mb-3'>CONNECT WITH US</div>
            <div className='flex flex-wrap'>
              <FacebookIcon />
              <WhatsappIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YoutubeIcon />
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
