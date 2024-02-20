


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/cover/cover1.png';
import img2 from '../../../assets/cover/cover2.jpg';
import img3 from '../../../assets/cover/cover2.jpg';
import img4 from '../../../assets/cover/cover2.jpg';
import img5 from '../../../assets/cover/cover2.jpg';
import img6 from '../../../assets/cover/cover2.jpg'; 

const Header = () => {
    return (
        <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />                  
                </div>
                <div>
                    <img src={img3} />                  
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />                  
                </div>
                <div>
                    <img src={img6} />                  
                </div>
            </Carousel>
    );
};

export default Header;