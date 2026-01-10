import React, { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) return;

    onAdd({
      id: Date.now(),
      name,
      price: Number(price),
    });

    setName("");
    setPrice("");
  };

  return (
    <div className="space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;