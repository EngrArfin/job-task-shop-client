import React from 'react';
import Header from '../Header/Header';
import Footer from '../Share/Footer/Footer';
import ProdutCard from '../Share/ProdutCard/ProdutCard';
import Produt from '../Share/Produt/Produt';

const Home = () => {
    return (
        <div>
           
           <Header></Header>
           <ProdutCard></ProdutCard>
           <Produt></Produt>
            <Footer></Footer>
        </div>
    );
};

export default Home;