import React from 'react';

const Skill = ({skill}) => {
    const {img, name} = skill;
    return (
        <div className='bg-white p-10 rounded-lg z-40 cursor-pointer'>
            <img className='w-full h-auto' src={img} alt={name} />
            <p className='text-black text-center font-bold'><small>{name}</small></p>
        </div>
    );
};

export default Skill;