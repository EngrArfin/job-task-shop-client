import React from 'react';

const CategoryProductItem = ({ item }) => {
    const { name, image, price, recipe } = item || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{price}</div>
                </h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price}</div>
                    <div className="badge badge-outline">{price}</div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductItem;