import React from 'react'
import phone from '../../Assets/phone.svg';
import email from '../../Assets/email.svg';
import location from '../../Assets/phone.svg';
import fb from '../../Assets/fb.svg';
import insta from '../../Assets/insta.svg';
import twitter from '../../Assets/twitter.svg';
import youtube from '../../Assets/youtube.svg';




function Contact() {
    return (
        <div className='h-[65vh] w-[70%] bg-red-50 relative z-99'>
            <div className='flex justify-between'>

                <div className='w-[50%] ml-[50px]'> {/* leftpart */}
                    <h1 className='text-4xl font-bold text-green-600 py-5 px-8 mt-[20px]'>
                    Contact Info
                    </h1> 

                    <ul className='flex flex-wrap w-[100%] justify-between rounded-md gap-5 p-5'>

                        <li className='flex gap-5'>
                            <img className='bg-green-500 rounded-[100px] h-[45px] w-[45px] p-3' src={phone} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>+91 879 090 3780</h2>
                        </li>

                        <li className='flex gap-5'>
                            <img className='bg-green-500 rounded-[50px] h-[45px] w-[45px] p-3' src={email} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>contact@yourmail.com</h2>
                        </li>

                        <li className='flex gap-5'>
                            <img className='bg-green-500 rounded-[50px] h-[45px] w-[45px] p-3' src={location} alt="" srcSet="" />
                            <h2 className='text-gray-900 text-xl'>203, Envato Labs, Behind Alis Street, Australia</h2>
                        </li>
                        
                        <ul className='flex w-[50%] justify-between rounded-md my-[20px] '>

                            <li>
                                <img className='bg-green-500 rounded-[50px] h-[45px] w-[45px] p-3' src={fb} alt="" srcSet="" />
                                
                            </li>

                            <li>
                                <img className='bg-green-500 rounded-[50px] h-[45px] w-[45px] p-3' src={insta} alt="" srcSet="" />  
                            </li>

                            <li>
                                <img className='bg-green-500 rounded-[50px] h-[45px] w-[45px] p-3' src={twitter} alt="" srcSet="" />
                            </li>

                            <li>
                                <img className='bg-green-500 rounded-[50px] h-[45px] w-[45px] p-3' src={youtube} alt="" srcSet="" />
                            </li>
                        
                        </ul>

                    </ul>
                </div>

                <div> {/* Rightpart-input form */}
                <div >
                <form>
                        <div className='mr-[40px]'>
                            <input className='bg-gray-100 rounded-[10px] text-xl border-[2px] border-green-500 mt-[50px] mb-[20px] mr-[20px] w-[400px] h-[20px] p-8' placeholder="Enter Your Name"></input>
                        </div>

                        <div>
                            <input className='bg-gray-100 rounded-[10px] text-xl border-[2px] border-green-500 mb-[20px] mr-[20px] w-[400px] h-[20px] p-8' placeholder="Enter Your Email Address"></input>
                        </div>

                        <div>
                            <textarea className='bg-gray-100 rounded-[10px] text-xl border-[2px] border-green-500 mb-[20px] mr-[10px] w-[400px] h-[20px] p-8' placeholder="Enter Your Message"></textarea>
                        </div>

                        <div>
                            <button type="button" className='bg-green-700 rounded-[10px] text-white text-base border-[2px] mb-[20px] mr-[20px] w-[400px] h-[50px] '>SUBMIT</button>
                        </div>

                </form>
                
           </div>

                </div>
             
            </div>
        </div>
    )

}
export default Contact;