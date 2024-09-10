import React from 'react'

export default function ContactPage() {
  return (
    <div>
        
        <div id="contact" className="bg-light py-5">
          <div className="pb-3 text-center ps-5">
            <h1 className='text-heading'>CONTACT</h1>
          </div>
          <div className="d-flex">
            <div className="w-50 text-start ps-5">
              <div className="mb-1">ABC Restaurant</div>
              <div className="mb-1">No.283 Dehiwala, Colombo</div>
              <div className="mb-1">Tel: 0112-23451</div>
              <div className="mb-1">Email: abcreataurant@gmail.lk</div>
            </div>
            <div className="w-50 d-flex justify-content-center align-items-end">
              <div>&copy; All Right Reserved 2024 ABC Restaurant</div>
            </div>
          </div>
        </div>
    </div>
  )
}