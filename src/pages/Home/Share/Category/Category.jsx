import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div>
            <SectionTitle
                heading="Product Category"
                subHeading="Click here for difference category Product here"
            ></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    categorys.map(category => <div
                        key={category._id}
                    >
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={category.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <div className="badge badge-secondary">{category.rating}</div>
                                <p>{category.details}</p>
                                
                                <div className="card-actions justify-end">
                                    <Link to='/' className="btn btn-primary">Add Product</Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Category;