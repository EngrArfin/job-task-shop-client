import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <h2 className='text-4xl uppercase border-y-4 text-red-600'>{heading}</h2>
            <p className='text-blak-600'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;