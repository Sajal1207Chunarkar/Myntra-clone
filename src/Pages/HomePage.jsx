import React from "react";
import Header from "../Components/Header/Header";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import FilterOptions from "../Components/FiltersOptions/FilterOptions";
import AllProducts from "../Components/AllProducts/AllProducts";

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* header */}
      <Header />
      {/* breadcrumbs */}
      <BreadCrumbs />

      <div className="flex-flex-row w-[1350px] m-auto">
        {/* filteroptions */}
        <FilterOptions />

        {/* allproducts */}
        <AllProducts />
      </div>
    </div>
  );
}

export default HomePage;
