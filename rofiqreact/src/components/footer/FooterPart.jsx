import React from 'react'
import fb from '../../Assets/fb.svg';
import insta from '../../Assets/insta.svg';
import twitter from '../../Assets/twitter.svg';
import youtube from '../../Assets/youtube.svg';


export default function FooterPart() {
  return (
    <div className='h-[60vh] mt-[180px] bg-black flex justify-between'>
        <div className='w-[50%] p-20'>
            <h1 className=' text-green-600 text-4xl font-bold pt-[15px]'>
                DEBUG ENTITY 
            </h1>       

            <p className='text-white mt-[10px] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore tenetur id tempore dolor nisi perspiciatis alias modi quos laboriosam.</p>

            <ul className='flex w-[50%] justify-between rounded-md my-[30px] '>

                <li><img className='bg-white rounded-[100px] h-[45px] w-[45px] p-3' src={fb} alt="" srcSet="" /></li>
                <li><img className='bg-white rounded-[50px] h-[45px] w-[45px] p-3' src={insta} alt="" srcSet="" /></li>
                <li><img className='bg-white rounded-[50px] h-[45px] w-[45px] p-3' src={twitter} alt="" srcSet="" /></li>
                <li><img className='bg-white rounded-[50px] h-[45px] w-[45px] p-3' src={youtube} alt="" srcSet="" /></li>

            </ul>

        </div>
   

        <div className='w-[17%]'>
            <ul className='w-[100%] rounded-md gap-5'>

                <li className='flex gap-5'>
                    <h2 className='text-white text-xl pt-[100px]'>PAGES</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Home</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Services</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Testimonials</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Pricing</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Contact</h2>
                </li>
            </ul>
        </div>

        <div className='w-[17%]'>
            <ul className='w-[100%] rounded-md gap-5'>

                <li className='flex gap-5'>
                    <h2 className='text-white text-xl pt-[100px]'>PAGES</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Home</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Services</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Testimonials</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Pricing</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Contact</h2>
                </li>
            </ul>
        </div>

        <div className='w-[17%]'>
            <ul className='w-[100%] rounded-md gap-5'>

                <li className='flex gap-5'>
                    <h2 className='text-white text-xl pt-[100px]'>PAGES</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Home</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Services</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Testimonials</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Pricing</h2>
                </li>

                <li className='flex gap-5'>
                    <h2 className='text-white text-base pt-[10px]'>Contact</h2>
                </li>
            </ul>
        </div>
    </div>
  )
}

