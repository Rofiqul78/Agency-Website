import React from 'react';
import Card from './Card';
import Testimonial1 from '../../Assets/testimonial1.jpg';
import Testimonial2 from '../../Assets/testimonial2.jpg';
import Testimonial3 from '../../Assets/testimonial3.jpg';
import Testimonial4 from '../../Assets/testimonial4.jpg';

function Testimonials() {
  return (
    <div className='flex flex-wrap justify-center bg-white-900 gap-6 p-8'>
      {/* First Row */}
      <div className='flex justify-center'>
        <Card
          img={Testimonial1}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Consectetur recusandae voluptas repellat dolore quo ratione cumque eveniet voluptates!'
          name='Emily Brown '
          role='Web Developer'
        />
        
        <Card
          img={Testimonial2}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Consectetur recusandae voluptas repellat dolore quo ratione cumque eveniet voluptates!'
          name='James Smith '
          role='Android Developer'
        />

        <Card
          img={Testimonial3}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Consectetur recusandae voluptas repellat dolore quo ratione cumque eveniet voluptates!'
          name='Emma Davis'
          role='UI/UX Designer'
        />
      </div>

      {/* Second Row */}
      <div className='flex justify-center'>
        <Card
          img={Testimonial4}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis. Consectetur recusandae voluptas repellat dolore quo ratione cumque eveniet voluptates!'
          name='John Johnson'
          role='Full Stack Developer'
        />
      </div>
    </div>
  );
}

export default Testimonials;
