import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryProductItem from '../CategoryProductItem/CategoryProductItem';
import CategoryData from '../CategoryData/CategoryData';

/* import headerphoto from '../../../../assets/headerphoto.png';
 */
const CategoryProduct = () => {
    const [tabMenu, setTabMenu] = useState(0);
    const [menu] = CategoryData();

    const dessert = menu.filter((item) => item.category === "dessert");
    const popular = menu.filter((item) => item.category === "popular");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div  className='text-black bg-white'>
            
            <div>
            <Tabs  defaultIndex={tabMenu} onSelect={(index) => setTabMenu(index)}>
                <TabList >
                    <Tab>T- Shart</Tab>
                    <Tab>Shart</Tab>
                    <Tab>Pant</Tab>
                    <Tab>Panjabi</Tab>
                    <Tab>Shari</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-4 gap-5'>
                        {
                            salad.map(item => <CategoryProductItem
                                key={item.id}
                                item={item}
                            ></CategoryProductItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-4 gap-5'>
                        {
                            dessert.map(item => <CategoryProductItem
                                key={item.id}
                                item={item}
                            ></CategoryProductItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-4 gap-5'>
                        {
                            popular.map(item => <CategoryProductItem
                                key={item.id}
                                item={item}
                            ></CategoryProductItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-4 gap-5'>
                        {
                            soup.map(item => <CategoryProductItem
                                key={item.id}
                                item={item}
                            ></CategoryProductItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-4 gap-5'>
                        {
                            pizza.map(item => <CategoryProductItem
                                key={item.id}
                                item={item}
                            ></CategoryProductItem>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default CategoryProduct;