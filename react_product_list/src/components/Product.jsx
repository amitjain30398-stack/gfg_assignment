import React from "react";

const Product = ({ product, onRemove }) => {
  return (
    <div className="border p-3 rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">₹{product.price}</p>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default Product;