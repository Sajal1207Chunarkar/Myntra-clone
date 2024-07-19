import React from "react";
import { CiSearch } from "react-icons/ci";

function FilterOptions() {
  const allFilters = [
    {
        filterBy: 'BRAND',
        search: true,
        color:false,
        inputType:'checkbox',
        filters: [
            { filterName: 'HIGHLANDER', filteredProducts: 12345 },
            { filterName: 'Snitch', filteredProducts: 5235 },
            { filterName: 'Roadster', filteredProducts: 213 },
            { filterName: 'Parx', filteredProducts: 7890 },
            { filterName: 'Indian Terrain', filteredProducts: 24537 },
            { filterName: 'M & H', filteredProducts: 10000 },
            { filterName: 'ShowOff', filteredProducts: 100 },
            { filterName: 'Luis Phillipe', filteredProducts: 1 },
        ]
    },
    {
        filterBy: 'PRICES',
        search: false,
        color:false,
        inputType:'checkbox',
        filters: [
            { filterName: 'Rs. 249 to 1000', filteredProducts: 12345 },
            { filterName: 'Rs. 1000 to 2000', filteredProducts: 5235 },
            { filterName: 'Rs. 2000 to 3000', filteredProducts: 213 },
            { filterName: 'Rs. 3000 to 4000', filteredProducts: 213 },
            { filterName: 'Rs. 4000 to 5000', filteredProducts: 213 },
        ]
    },
    {
        filterBy: 'Color',
        search: true,
        inputType:'checkbox',
        color:true,
        filters:[
          { filterName: 'Green', filteredProducts: 1 },
          { filterName: 'Red', filteredProducts: 2 },
          { filterName: 'Purple', filteredProducts: 3 },
          { filterName: 'Orange', filteredProducts: 4 },
          { filterName: 'Blue', filteredProducts: 5 },
          { filterName: 'Yellow', filteredProducts: 6 },
          { filterName: 'Black', filteredProducts: 7 },



        ]
    },
    {
        filterBy: 'Discount Range',
        search: false,
        color:false,
        inputType:'radio',
        filters:[
          { filterName: '10% Above', filteredProducts: 12345 },
          { filterName: '20% above', filteredProducts: 5235 },
          { filterName: '30% Above', filteredProducts: 213 },
          { filterName: '40% Above', filteredProducts: 213 },
          { filterName: '50% Above', filteredProducts: 213 },
          { filterName: '60% Above', filteredProducts: 213 },
          { filterName: '70% Above', filteredProducts: 213 },

        ]
    }
]

  return (
    <div className="w-[300px] border-r-2 border-t-2 border-slate-300 rounded-sm">
      {
        allFilters.map((oneFilter,i)=>(
          <div key={i} className="border-b-2 border-slate-300 pb-5 p-3">
        <div className="flex flex-row items-center justify-between mb-2">
          <p className="text-xs font-bold ">{oneFilter.filterBy}</p>
          {
            oneFilter.search &&
          
          <CiSearch className="text-md bg-slate-200 p-1.5 rounded-full box-content" />
}
        </div>
        <div className="flex flex-col">
          {
            oneFilter.filters.map((oneBrand,i)=>(
          <div key={i} className="flex flex-row items-center mb-2">
            <input name={oneFilter.filterBy} type={oneFilter.inputType} className="mr-3" />
            {oneFilter.color && 
            <div style={{backgroundColor:oneBrand.filterName}}
            className="w-4 h-4 rounded-full mr-2">
              </div>
}
            <p className="text-xs font font-semibold mr-1 ">{oneBrand.filterName}</p>
            <p className="text-xs text-slate-500">({oneBrand.filteredProducts})</p>
          </div>
          ))
        }
        </div>
      </div>
          
        ))
      }
      {/* brand */}
      

      {/* price */}
      {/* <div className="border-b-2 border-slate-300 pb-5 p-3">
        <div className="flex flex-row items-center justify-between mb-2">
          <p className="text-xs font-bold ">BRAND</p>
          <CiSearch className="text-md bg-slate-200 p-1.5 rounded-full box-content" />
        </div>
        <div className="flex flex-col">
          {
          prices.map((oneBrand,i)=>(
          <div key={i} className="flex flex-row items-center mb-2">
            <input type="checkbox" className="mr-3" />
            <p className="text-xs font font-semibold mr-1 ">{oneBrand.priceRange}</p>
            <p className="text-xs text-slate-500">({oneBrand.totalProducts})</p>
          </div>
          ))
        }
        </div>
      </div> */}
      {/* color */}
      <div></div>
      {/* discount range */}
      <div>

      </div>
    </div>
  );
}

export default FilterOptions;
