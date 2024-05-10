import Lehinga from '../../../../../assets/OrderItem/lehinga.png';

const OrderFinal = () => {
    return (
        <div>
            <div className="card  lg:card-side  shadow-xl">
                <figure>
                    <img src={Lehinga} alt="" />
                </figure>
                <div className="card-body ml-20">
                    <h3 className="card-title">Semi Long Premium Quality Embroidery work Lehinga- Lehinga For Women</h3>
                    <p>949 <span>810</span></p>
                    <p>Rating: </p>
                    <p>Rating: </p>
                    <div>
                        <h3>Size</h3>
                        <p>Icon</p>
                        <p>M L XL</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-active">increase/ Decrise</button>
                        <button className="btn btn-warning">Buy Now</button>
                        <button className="btn btn-active">Add To Cart</button>
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
                        <button className="btn btn-outline btn-warning">More Details</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFinal;