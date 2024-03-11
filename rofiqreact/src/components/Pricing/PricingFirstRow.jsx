import React from 'react';
import tickIcon from '../../Assets/tick.svg';

function PricingFirst () {
    return (
        <div className='p-14'>
            <div className='text-green-600 text-6xl font-bold '>
                <h1 className='my-[10px] mb-[20px]'>
                    Pricing Table
                </h1>
            </div>

            <div className='flex justify-between'>
                <div className='w-[50%]'>
                    <p className='text-2xl'> 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolore quidem officiis molestiae necessitatibus fuga sed. Libero sit quis quia?
                    </p> 
                </div>
                <div className='w-[30%]'>
                    <ul className='flex flex-wrap w-[100%] justify-between rounded-md gap-5'>

                        <li className='flex gap-5'>
                            <img className='bg-green-400 rounded-[50px] h-[40px] w-[40px]' src={tickIcon} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>Unlimited Pages</h2>
                        </li>

                        <li className='flex gap-5'>
                            <img className='bg-green-400 rounded-[50px] h-[40px] w-[40px]' src={tickIcon} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>Unlimited Pages</h2>
                        </li>

                        <li className='flex gap-5'>
                            <img className='bg-green-400 rounded-[50px] h-[40px] w-[40px]' src={tickIcon} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>Unlimited Pages</h2>
                        </li>
                        
                    </ul>

                </div>

                <div className='w-[25%]'>
                    
                    <ul className='flex flex-wrap w-[100%] justify-between rounded-md gap-5'>

                        <li className='flex gap-5'>
                            <img className='bg-green-400 rounded-[50px] h-[40px] w-[40px]' src={tickIcon} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>Free Sub-Domain</h2>
                        </li>

                        <li className='flex gap-5'>
                            <img className='bg-green-400 rounded-[50px] h-[40px] w-[40px]' src={tickIcon} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>Free SSL Certificate</h2>
                        </li>

                        <li className='flex gap-5'>
                            <img className='bg-green-400 rounded-[50px] h-[40px] w-[40px]' src={tickIcon} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>24/7 Support</h2>
                        </li>
                        
                    </ul>
                </div>

               
            </div>
        </div>
    );
}

export default PricingFirst;
