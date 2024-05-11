import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=' text-center '>
            <h2 className='text-2xl uppercase  text-black-300'>---{heading}---</h2>
            <p className='text-blak-600'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;