import React from 'react'
import {FaChevronDown}  from "react-icons/fa"

function BreadCrumbs() {
  const allFilters=['Add-ons','Bundles','Collar','Country of origin']
  return (
    <div className='flex flex-col px-5 py-3 m-auto'>
      <p className='text-sm mb-5 text-slate-900'>Home/Clothing/Shirts/<span className='font-bold'>Casual Shirts for men</span></p>
      <p className='text-sm mb-5 text-slate-900 '><span className='font-bold'>Casual Shirts For Men</span> -107809 items</p>
      <div className='flex flex-row items center'>
        <p className='text-lg font-bold w-[300px]'>Filters</p>
        
        {/* options */}
          <div className='flex flex-row items center justify-between w-[1050px] '>
          <div className='flex flex-row items center'>
            {
              allFilters.map((oneFilter,i)=>(
            
          <div key={i} className='flex flex-row items center px-3 py-2 rounded-full  hover:cursor-pointer mx-1'>
            <p className='text-sm text-slate-600'>{oneFilter}</p>
            <FaChevronDown className='text-xs ml-2 text-slate-500'/>
          </div>
          ))
        }
            
        </div>
        {/* recommened boxes */}
        <div>
          <div className='flex flex-row items-center justify-between border-2 border-gray-300 px-4 
          py-2 rounded-sm w-[300px] gray-100 hover:cursor-pointer mx-1'>
            <p className='text-sm text-slate-600'>Sort by : <span className='font-bold'> Recommended</span></p>
            <FaChevronDown className='text-xs ml-2  text-slate-500'/>
          </div>
          <div className='hidden'>
            <p>Recommemed</p>
            <p>What&apos;</p>
            <p>Popularity</p>
            <p>Popularity</p>
            <p>Better Discounts</p>
            <p>Price:High to Low</p>
            <p>Price:Low to High</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BreadCrumbs