import React from 'react'

const Herj = ({img , head, text}) => {
  return (
   <div className=''>
    <img className='w-16 h-16 rounded-full' src={img} alt="" />
    <h2 className='text-lg font-bold'>{head}</h2>
    <p className='text-gray-600'>{text}</p>
   </div>
  )
}

export default Herj