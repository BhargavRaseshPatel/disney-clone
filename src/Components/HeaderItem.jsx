import React from 'react'

function HeaderItem({itemName, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px]
     font-semibold cursor-pointer hover:underline
     underline-offset-8'><Icon/><h2 className=''>{itemName}</h2></div>
  )
}

export default HeaderItem