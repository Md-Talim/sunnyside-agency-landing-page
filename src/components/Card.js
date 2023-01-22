import React from 'react';

const Card = (props) => (
  <div className='px-6 mt-14'>
    <img src={props.image} alt="profile" className='w-20 rounded-full mx-auto' />
    <div className='my-10'>
      <p className='text-neutral-400 text-lg'>{props.testimonial}</p>
      <h4 className='font-serif text-lg text-neutral-500 capitalize font-black mt-10'>{props.name}</h4>
      <p className='text-neutral-200 capitalize text-sm'>{props.work}</p>
    </div>
  </div>
);

export default Card;
