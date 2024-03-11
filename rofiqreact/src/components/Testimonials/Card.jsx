import React from 'react';

function Card({ img, description, name, role }) {
    return (
        <div className='bg-gray-200 p-5 rounded-lg h-[500px] w-[25%] mx-10'>
            <div className='flex justify-center'>
                <img className='border-[5px] border-green-500 rounded-[100px] h-[160px] w-[160px] mt-7' src={img} alt="" />
            </div>
            <p className='text-[15px] text-green-900 my-5 text-center'>
                {description}
            </p>
            <h1 className='text-2xl text-green-600 font-semibold text-center'>
                {name}
            </h1>
            <p className='text-[18px] text-black font-light text-center my-3'>
                {role}
            </p>
        </div>
    );
}

export default Card;
