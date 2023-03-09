import React from 'react'
import Rider from "../img/rider.png"
import Arrowbelow from "../img/arrowbelow.svg"

const NavFilters = () => {
  return (
    <div>
        <div className='w-full bg-white py-[12px] px-[16px] flex items-center' >
        <div className=' pr-[8px]'>
            <img className='w-[36px]' src={Rider} alt="rider" />
        </div>
        <div>
            <p className='text-[14px]'>Consegna - Adesso</p>
            <p className='text-[16px] font-bold '>Duomo <span><img className='' src={Arrowbelow} alt="" /></span></p>
            
        </div>
        </div>
    </div>
  )
}

export default NavFilters