import React from 'react';
import Header from '../Header/Header';
import ProdutCard from '../Share/ProdutCard/ProdutCard';
import Category from '../Share/Category/Category';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Category></Category>
           <ProdutCard></ProdutCard>
        </div>
    );
};

export default Home;