// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/Products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="mt-10 bg-retro-beige text-retro-brown">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center font-baked">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">
            Rp {product.price.toLocaleString()}
          </p>

          <div className="flex gap-4 mb-6">
            {product.shopeeLink && (
              <a
                href={product.shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition"
              >
                Order on Shopee
              </a>
            )}
            {product.tokopediaLink && (
              <a
                href={product.tokopediaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
              >
                Order on Tokopedia
              </a>
            )}
          </div>

          <Link
            to="/product"
            className="inline-block px-6 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          >
            Back to Products
          </Link>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex gap-6 border-b border-gray-300 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2 ${
              activeTab === "description"
                ? "border-b-2 border-retro-brown font-bold"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("brew")}
            className={`pb-2 ${
              activeTab === "brew"
                ? "border-b-2 border-retro-brown font-bold"
                : "text-gray-500"
            }`}
          >
            Brewing Guide
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-retro-brown font-bold"
                : "text-gray-500"
            }`}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <p className="text-gray-700 leading-relaxed">
            {product.description} This coffee is crafted with care to bring out
            its unique flavor profile. Perfect for your daily brew or as a gift
            for fellow coffee lovers.
          </p>
        )}

        {activeTab === "brew" && (
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Use 15g coffee for 250ml water</li>
            <li>Water temperature: 92–96°C</li>
            <li>Brew time: 2.5–3 minutes</li>
            <li>Best with pour-over or French press</li>
          </ul>
        )}

        {activeTab === "reviews" && (
          <p className="text-gray-500 italic">
            No reviews yet. Be the first to share your thoughts!
          </p>
        )}
      </section>

      {/* Related Products */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-8 text-center">You may also like</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.description}</p>
              <Link to={`/product/${p.slug}`}>
                <button className="px-4 py-2 bg-retro-brown text-retro-beige rounded-full shadow hover:scale-105 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
