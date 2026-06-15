import React from 'react'

const Box = ({ text }) => {
  return (
    <div className='w-40 h-40 bg-blue-500 flex items-center justify-center text-white text-lg font-bold rounded-lg shadow-md m-5'>
     <h1>{text}</h1>
    </div>
  )
}

export default Box