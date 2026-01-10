import React from "react";
import Product from "./Product";

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <p className="text-gray-500">No products available</p>;
  }

  return (
    <div className="space-y-2">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;