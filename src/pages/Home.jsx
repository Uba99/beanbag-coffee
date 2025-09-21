import React from "react";
import ProductCard from "../components/ProductCard";
import Products from "../data/products";
import journeys from "../data/journeys";
import JourneyCard from "../components/JourneyCard";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="bg-retro-beige text-retro-brown">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center -mb-10">
        <img src="/images/hero1.jpg" alt="Beanbag coffee Adventure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl text-white translate-y-2/4">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">BeanBag Co.</h1>
            <p className="font-sans text-lg md:text-xl mb-6">
              Comfort like a beanbag, taste like an adventure.
              Discover coffee that feels at home, wherever you wander
            </p>
          </div>
        </div>
      </section>

      {/*product Highlight*/}
      <section className="py-6 px-6">
        <h2 className="text-3xl font-bold font-baked text-center p-10 bg-black/10 translate-y-5">
          " OUR COFFEE "
        </h2>
        <div className="grid md:grid-cols-3 gap-8  max-w-5xl mx-auto">
          {Products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/product" className="px-6 py-3 bg-retro-brown font-body rounded-full shadow-lg hover:scale-105 transition">
            See All Products
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-6 bg-[url('/public/bg-photo.jpg')] text-retro-brown shadow-xl rounded-md">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="images/our.jpg"
              alt="Coffee Adventure"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>

          {/* Text */}
          <div className="text-left font-baked">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
              <p className="leading-relaxed">
                BeanBag Co. started with a simple idea:</p>
              <p className="leading-relaxed mb-4">coffee is more than just a drink,
                it’s a journey. With years behind the bar serving espresso and learning from farmers across Indonesia,
                we wanted to bring those experiences into every cup. What began as a small project turned into a brand built on curiosity, travel, and discovery.
              </p>
            </div>
            <div className="py-5 bg-retro-brown text-retro-beige text-center">
              <h2 className="text-3xl font-semibold font-baked">Ready for your adventure?</h2>
              <Link to="/About"
                className="inline-block mt-10 px-6 py-3 bg-gray-200 text-baked rounded-full shadow-xl hover:scale-105 transition"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Journeys Highlight */}
      <section className="py-10 px-6 mt-5">
        <h2 className="text-3xl font-bold text-center mb-2 font-baked">" Travelers's Brew "</h2>
        <p className="text-center text-lg text-gray-600 mb-10 font-baked italic">A 7-day adventure through indonesia's best coffees.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeys.slice(0, 3).map((journey) => (
            <JourneyCard
              key={journey.id}
              day={journey.day}
              title={journey.title}
              description={journey.description}
              image={journey.image}
              slug={journey.slug}
            />
          ))}
        </div>
        <div className="text-center mt-10 font-semibold">
          <Link to="/journeys" className="border border-gray-700 px-6 py-3 bg-retro-brown rounded-full shadow-xl hover:scale-105 transition">
            See All Journeys
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
