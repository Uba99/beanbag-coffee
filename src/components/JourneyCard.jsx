import React from "react";
import { Link } from "react-router-dom";

const JourneyCard = ({ title, description, image, slug }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-heading font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 font-baked">{description}</p>
        <Link
          to={`/journeys/${slug}`}
          className="inline-block px-4 py-2 bg-retro-brown text-retro-beige rounded-full text-sm font-semibold hover:bg-opacity-90 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default JourneyCard;
