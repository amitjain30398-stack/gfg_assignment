import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

export default function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Product List</h1>
      {/* state uplifting, whole addProduct function is passed as a prop*/}
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onRemove={removeProduct} />
    </div>
  );
}
