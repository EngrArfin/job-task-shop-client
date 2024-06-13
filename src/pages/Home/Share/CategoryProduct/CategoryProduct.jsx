import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryProductItem from "../CategoryProductItem/CategoryProductItem";
import CategoryData from "../CategoryData/CategoryData";

const CategoryProduct = () => {
  const [tabMenu, setTabMenu] = useState(0);
  const [menu] = CategoryData();

  const dessert = menu.filter((item) => item.category === "dessert");
  const popular = menu.filter((item) => item.category === "popular");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const tabTitles = ["T-Shirt", "Shirt", "Pant", "Panjabi", "Shari", "Child"];

  const handlePrev = () => {
    setTabMenu((prev) => (prev === 0 ? tabTitles.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setTabMenu((prev) => (prev === tabTitles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="text-black bg-white">
      <div>
        <Tabs selectedIndex={tabMenu} onSelect={(index) => setTabMenu(index)}>
          <div className="flex items-center justify-between p-4 bg-green-900 rounded-md">
            <button
              onClick={handlePrev}
              className="px-10 py-2 bg-red-900 text-white rounded-md hover:bg-blue-700"
            >
              &lt;
            </button>
            <TabList className="flex space-x-4">
              {tabTitles.map((title, index) => (
                <Tab
                  key={index}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 ${
                    tabMenu === index ? "bg-blue-700" : ""
                  }`}
                >
                  {title}
                </Tab>
              ))}
            </TabList>
            <button
              onClick={handleNext}
              className="px-10 py-2 bg-red-900 text-white rounded-md hover:bg-white-700"
            >
              &gt;
            </button>
          </div>
          <TabPanel>
            <div className="grid md:grid-cols-4 gap-5">
              {salad.map((item) => (
                <CategoryProductItem
                  key={item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4 gap-5">
              {dessert.map((item) => (
                <CategoryProductItem
                  key={item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4 gap-5">
              {popular.map((item) => (
                <CategoryProductItem
                  key={item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4 gap-5">
              {soup.map((item) => (
                <CategoryProductItem
                  key={item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4 gap-5">
              {pizza.map((item) => (
                <CategoryProductItem
                  key={item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4 gap-5">
              {drinks.map((item) => (
                <CategoryProductItem
                  key={item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryProduct;
