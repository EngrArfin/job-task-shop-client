import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryProductItem from "../CategoryProductItem/CategoryProductItem";
import CategoryData from "../CategoryData/CategoryData";
import { useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [menu] = CategoryData();

  const dessert = menu.filter((item) => item.category === "dessert");
  const popular = menu.filter((item) => item.category === "popular");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const tabTitles = ["T-Shirt", "Shirt", "Pant", "Panjabi", "Shari", "Child"];

  // Find index of current category from search param or default to 0
  const getInitialTab = () => {
    if (!categoryParam) return 0;
    const index = tabTitles.indexOf(categoryParam);
    return index !== -1 ? index : 0;
  };

  const [tabMenu, setTabMenu] = useState(getInitialTab());

  // Keep state in sync with URL search parameter changes
  useEffect(() => {
    if (categoryParam) {
      const index = tabTitles.indexOf(categoryParam);
      if (index !== -1 && index !== tabMenu) {
        setTabMenu(index);
      }
    }
  }, [categoryParam]);

  const handleTabSelect = (index) => {
    setTabMenu(index);
    setSearchParams({ category: tabTitles[index] });
  };

  const handlePrev = () => {
    const nextIndex = tabMenu === 0 ? tabTitles.length - 1 : tabMenu - 1;
    setTabMenu(nextIndex);
    setSearchParams({ category: tabTitles[nextIndex] });
  };

  const handleNext = () => {
    const nextIndex = tabMenu === tabTitles.length - 1 ? 0 : tabMenu + 1;
    setTabMenu(nextIndex);
    setSearchParams({ category: tabTitles[nextIndex] });
  };

  return (
    <div className="text-black bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs selectedIndex={tabMenu} onSelect={handleTabSelect}>
          {/* Tab Navigation Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-gradient-to-r from-emerald-950 to-teal-900 border border-emerald-900/40 rounded-2xl shadow-xl mb-10">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-10 h-10 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 border border-emerald-800/50 rounded-xl transition-all duration-300 shadow-inner active:scale-95"
                aria-label="Previous category"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <h3 className="sm:hidden font-bold text-emerald-100 text-sm tracking-wide uppercase">
                Categories
              </h3>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-10 h-10 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 border border-emerald-800/50 rounded-xl transition-all duration-300 shadow-inner active:scale-95 sm:order-last"
                aria-label="Next category"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>

            <TabList className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-0.5 sm:flex-1 sm:justify-center">
              {tabTitles.map((title, index) => (
                <Tab
                  key={index}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap cursor-pointer transition-all duration-300 outline-none select-none ${
                    tabMenu === index
                      ? "bg-white text-emerald-950 shadow-md shadow-emerald-950/20 scale-105 border border-white"
                      : "bg-emerald-900/40 text-emerald-200/80 hover:bg-emerald-800/60 hover:text-white border border-emerald-800/30 hover:border-emerald-700/50"
                  }`}
                >
                  {title}
                </Tab>
              ))}
            </TabList>
          </div>

          {/* Tab Panels */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {salad.map((item) => (
                <CategoryProductItem
                  key={item._id || item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {dessert.map((item) => (
                <CategoryProductItem
                  key={item._id || item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {popular.map((item) => (
                <CategoryProductItem
                  key={item._id || item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {soup.map((item) => (
                <CategoryProductItem
                  key={item._id || item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {pizza.map((item) => (
                <CategoryProductItem
                  key={item._id || item.id}
                  item={item}
                ></CategoryProductItem>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {drinks.map((item) => (
                <CategoryProductItem
                  key={item._id || item.id}
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
