import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularProduct  = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div className='mt-5 text-black bg-white'>
            <SectionTitle className='mt-5'
                heading=" Shop Popular Product"
            /* subHeading="Click here for difference category Product here" */
            ></SectionTitle>
            <div className='grid md:grid-cols-5 gap-3 '>
                {
                    categorys.map(category => <div
                        key={category._id}
                    >
                        <div className="card w-75 h-110 bg-white-500 shadow-xl ">
                            <figure className='border-3'><img src={category.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <div className="badge badge-secondary">{category.price}</div>
                                <p>{category.description}</p>
                                
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={category.rating}
                                    readOnly
                                />
                                
                                

                                {/* <div className="card-actions justify-end">
                                    <Link to='/' className="btn btn-danger text-white  border-3 border-b-2 mt-2">Add Product</Link>
                                </div> */}
                            </div>
                        </div>



                    </div>)
                }
            </div>

        </div>
    );
};

export default PopularProduct ;