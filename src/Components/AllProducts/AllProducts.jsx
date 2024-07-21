import React, {useState,useEffect} from "react";
import OneProduct from './OneProduct'

function AllProducts() {
  const [allProducts, setallProducts] = useState(null)
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      
        setallProducts(data.products)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  return (
    <div className=" grid grid-cols-5 border-t-2
    border-slate-300  ">
      {/*one product  */}
      {
        allProducts?.map((oneProduct, i) => (
          <OneProduct key={i} 
          productImage={oneProduct.images[0]}
          productRatings={oneProduct.rating}
          productBrand={oneProduct.brand}
          productPrice={oneProduct.price}
          productName={oneProduct.title}
          productDiscount={oneProduct.discountPercentage}
      />



        ))
      }
    </div>

  );
}

export default AllProducts;
