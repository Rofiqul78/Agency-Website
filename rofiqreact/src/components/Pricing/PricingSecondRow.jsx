import React from 'react'
import PricingCard from './PricingCard'


function PricingSecondRow({plan, price, proceedbtn,}) {
    return (
        <div className='flex justify-center bg-white-900 gap-2 p-1'>
           
            <PricingCard 
                plan="Starter Plan"
                price="Free"
                proceedbtn="Proceed Free"/> 
            
            <PricingCard 
                plan="Yearly Plan"
                price="$9/month"
                proceedbtn="Proceed Annually"/> 

            <PricingCard 
                plan="Monthly Plan"
                price="$12/month"
                proceedbtn="Proceed Monthly"/> 
            
        </div>
    )
}

export default PricingSecondRow;