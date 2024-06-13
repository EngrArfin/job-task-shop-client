import Header from "../Header/Header";
import ProdutCard from "../Share/ProdutCard/ProdutCard";
import Category from "../Share/Category/Category";
import OrderFinal from "../Share/SubShare/OrderFinal/OrderFinal";
import PopularProduct from "../Share/SubShare/PopularProduct/PopularProduct";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Category></Category>
      <PopularProduct></PopularProduct>
      <ProdutCard></ProdutCard>
    </div>
  );
};

export default Home;
