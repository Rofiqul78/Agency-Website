import React from 'react'
import ServiceCard from './ServiceCard'
import icon1 from '../../Assets/icon1.svg'
import icon2 from '../../Assets/icon2.svg'
// import icon3 from '../../Assets/icon3.svg'
// import icon4 from '../../Assets/icon4.svg'

function ServiceRight() {
    return (
        <div className='w-[50%] p-[70px] flex flex-wrap gap-3'>
            <ServiceCard 
                icon={icon1}
                title="One" 
                description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." /> 
             <ServiceCard 
                icon={icon1}
                title="Two" 
                description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." /> 
            <ServiceCard 
                icon={icon1}
                title="Three" 
                description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." /> 
            <ServiceCard 
                icon={icon1}
                title="Four" 
                description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." /> 
        </div>
    ) 
}

export default ServiceRight;