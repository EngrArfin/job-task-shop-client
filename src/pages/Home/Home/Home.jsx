import Header from '../Header/Header';
import ProdutCard from '../Share/ProdutCard/ProdutCard';
import Category from '../Share/Category/Category';
import OrderFinal from '../Share/SubShare/OrderFinal/OrderFinal';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Category></Category>
           <OrderFinal></OrderFinal>
           <ProdutCard></ProdutCard>
        </div>
    );
};

export default Home;