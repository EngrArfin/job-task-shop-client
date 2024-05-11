import { useContext } from 'react';
import Lehinga from '../../../../../assets/OrderItem/lehinga.png';
import { AuthContext } from '../../../../../AuthProvider/AuthProvider';
import useCab from '../../../../User/hook/useCab';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const OrderFinal = ({ item }) => {

    const { name, image, price, description, _id } = item || {};

    const { user } = useContext(AuthContext);
    const [, refetch] = useCab();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCab = item => {
        console.log(item);
        if (user && user.email) {
            const cabItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/cabs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cabItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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



        else {
            Swal.fire({
                title: "Login for Order?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login here"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { form: location } })
                }
            });

        }
    }

    return (
        <div>
            <div className="card  lg:card-side  shadow-xl">
                <figure>
                    <img src={Lehinga} alt="" />
                </figure>
                <div className="card-body ml-20">
                    <h3 className="card-title">Semi Long Premium Quality Embroidery work Lehinga- Lehinga For Women</h3>

                    <p> Rating
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={4}
                            readOnly
                        />
                    </p>
                    <div className="mt-30  text-black">
                        <p>price: {price}</p>
                    </div>
                    <div className='flex'>


                        <div className="absolute mb-20 bg-red-700 text-white">
                            <del>1600</del>
                        </div>
                    </div>

                    <div>
                        <h3>Size</h3>
                        <p>Icon</p>
                        <p>M L XL</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-active">increase/ Decrise</button>
                        <button onClick={() => handleAddToCab(item)} className="btn btn-warning">Buy Now</button>
                        <button onClick={() => handleAddToCab(item)} className="btn btn-active">Add To Cart</button>
                    </div>
                    <h2 className="card-title">Product Description :</h2>
                    <p>Semi Long Premium Quality Embroidery work Panjabi- Panjabi For Men </p>

                    <p>
                        <pre>
                            Soft tensile cotton fabric. <br />

                            ✅ Panjabi for Men Semi Long Premium Quality Embroidery work Panjabi <br />

                            ✅Color:black(As Given Picture) <br />

                            ✅100% Export Quality <br />
                        </pre>
                    </p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCab(item)} className="btn btn-outline btn-warning">More Details</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Related Products</h2>
            </div>
        </div>
    );
};

export default OrderFinal;