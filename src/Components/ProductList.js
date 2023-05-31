import React, { useEffect } from "react";
import { getProductList } from "../store/action/product.action";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.ProductList);
  // console.log(productList.name);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div>
      <h1>Product Listing</h1>
    </div>
  );
}

export default ProductList;
