import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProdutCard from '../ProdutCard/ProdutCard';

const CategoryProduct = () => {
    const [tabProduct, setTabProduct] = useState(0);

    const menu = ProdutCard();

    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
            <Tabs defaultIndex={tabProduct} onSelect={(index) => setTabProduct(index)}>
                <TabList>
                    <Tab>T- Shart</Tab>
                    <Tab>Shart</Tab>
                    <Tab>Pant</Tab>
                    <Tab>Panjabi</Tab>
                    <Tab>Shari</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryProduct;