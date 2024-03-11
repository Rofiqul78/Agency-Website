import React from 'react'

function PricingCard({plan, price, proceedbtn,}) {
    return (
        <div className='bg-white border-[3px] border-green-900 rounded-lg w-[25%] h-[400px] gap-10 p-10 justify-center mr-[20px]'>
            <p className='text-3xl text-green-600 '>
                {plan}
            </p> 

            <h1 className='text-4xl font-bold text-green-600 py-5'>
                {price}
            </h1> 

            <button className=' bg-green-800 text-white text-xl px-[15px] py-[8px] rounded-md my-7'>
                {proceedbtn}
            </button>
            
            <p className='text-xl'>
            Free static.app domain included, No credit card
            </p>
            
        </div>
    )
}

export default PricingCard;