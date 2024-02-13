import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/productCategory')
            .then(res => res.json())
            .then(data => setMenus(data)
            )
    }, [])
    return (<div>
        <SectionTitle
            heading="category"
            subHeading="open fooer here"
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>

            {
                menus.map(item => <div
                    key={item._id}

                >
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={menus.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {menus.details}
                                <div className="badge badge-secondary">{menus.rating}</div>
                            </h2>
                            <p>{menus.details}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{menus.rating}</div>
                                <div className="badge badge-outline">{menus.rating}</div>
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