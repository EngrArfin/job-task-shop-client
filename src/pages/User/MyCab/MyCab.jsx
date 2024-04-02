import React from 'react';
import useCab from '../hook/useCab';
import { Helmet } from 'react-helmet';

const MyCab = () => { 
    const [cab] = useCab();
    return (
        <div className=''>
            <Helmet>
                <title>SA Shop | Dashboard</title>
            </Helmet>
            
            <h2>
                My cab here: {cab.length}
            </h2>
            
                
        </div>
    );
};

export default MyCab;