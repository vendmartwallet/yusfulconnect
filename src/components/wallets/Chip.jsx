import React from 'react'

const Chip = ({img, name, onClick, showExtension}) => {
  return (
      <button onClick={onClick} className='w-full mt-2 rounded-[15px] bg-[#1e1e1e] py-3 cursor-pointer hover:bg-[#353535]'>
        <div className='flex items-center'>
          <img src={img} alt={`${name}`} className='w-[30px] h-[30px] mx-[10px] rounded-full object-cover' />

          <h3 className='text-[#fff] ]'>{name}</h3>
        </div>

        {
          showExtension &&
          <p className='mt-3 text-start text-[#fff] px-3'>
            Easy-to-use browser extension.
          </p>
        }
      </button>
  )
}

export default Chip