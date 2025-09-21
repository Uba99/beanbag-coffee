import React from "react";
import { ProductsList } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="py-20 px-6 mt-2 max-w-6xl mx-auto font-bold text-xl font-baked">
      <h2 className="text-3xl font-semibold mt-2 mb-8 text-center">OUR PRODUCTS</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {ProductsList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            slug={product.slug}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
