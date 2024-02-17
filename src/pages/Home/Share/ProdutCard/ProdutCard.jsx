import { useEffect, useState } from 'react';
import Produt from '../Produt/Produt';
import SectionTitle from '../SectionTitle/SectionTitle';

const ProdutCard = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === 'popular');
                setMenu(PopularItems)
            })
    }, [])
    return (
        <div className='mx-auto'>
            <SectionTitle
                heading="Product"
                subHeading="open fooer here"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <Produt
                        key={item._id}
                        item={item}
                    ></Produt>)
                }
            </div>
        </div>

    );
};

export default ProdutCard;