import React from 'react'
import img1 from '../Photo/poert1.png'
import img2 from '../Photo/port2.png'
import img3 from '../Photo/port3.png'
export default function Protfolio() {
  return (
    <div>
      <div className="container pb-lg-5">
        <div className="row gy-4">
          <h1 className='text-center pt-lg-5'>PORTFOLIO COMPONENT</h1>
          <div className="col-md-4 ">
          <img className='w-100' src={img1} alt="" />
          </div>
          <div className="col-md-4 ">
          <img className='w-100' src={img2} alt="" />
          </div>
          <div className="col-md-4 ">
          <img className='w-100' src={img3} alt="" />
          </div>
          <div className="col-md-4 ">
          <img className='w-100' src={img1} alt="" />
          </div>
          <div className="col-md-4 ">
          <img className='w-100' src={img2} alt="" />
          </div>
          <div className="col-md-4 ">
          <img className='w-100' src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
