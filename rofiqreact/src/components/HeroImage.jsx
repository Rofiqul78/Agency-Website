import React from 'react'
import hero from '../Assets/hero.png'

function HeroImage() {
    return (
        <div className='w-[50%] flex justify-center'>
            <img 
                src={hero} 
                className='h-[450px]'
                alt="" srcset="" />
        </div>
    )
}

export default HeroImage