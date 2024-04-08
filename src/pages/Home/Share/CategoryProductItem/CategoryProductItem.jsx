import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCab from '../../../User/hook/useCab';


const CategoryProductItem = ({ item }) => {
    /* const { name, image, details, rating } = item || {}; */
    const { name, image, price, recipe, _id } = item|| {};

    const {user} = useContext(AuthContext);
    const [ , refetch] = useCab();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCab = item =>{
        console.log(item);
        if(user && user.email){
            const cabItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/cabs', { 
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cabItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); /* refetch to the cab */
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product add on cab",
                        showConfirmButton: false,
                        timer: 1500
                      });

                }
            })
        }



        else{
            Swal.fire({
                title: "Login for Order?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login here"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {form: location}})
                }
              });

        }
    }

    return (

        <div className="mt-10 card w-96 bg-white shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            
            <div className=' absolute right-0  mr-4 mt-4'>
                <div>
                    <p className="absolute right-0  mr-4 mt-4 bg-yellow-900 text-white">
                        ${price}
                    </p>
                </div>
                <div>
                    <p className="absolute right-0  mr-4 mt-4 bg-yellow-900 text-white">
                        ${price}
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{price}</div>
                </h2>
                <p>{recipe}</p>

                <div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{price}</div>
                        <div className="badge badge-outline">{price}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCab(item)} className="btn btn-primary">Shoping</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductItem;