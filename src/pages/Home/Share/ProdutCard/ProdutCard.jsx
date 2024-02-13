import { useEffect, useState } from 'react';
import Produt from '../Produt/Produt';

const ProdutCard = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === 'popular');

                setMenu(PopularItems)
            })
    }, [])
    return (
        <div className='grid md:grid-cols-2 gap-10'>
            {
                menu.map(item => <Produt
                    key={item._id}
                    item={item}
                ></Produt>)
            }
        </div>
    );
};

export default ProdutCard;