import React from "react";
import Journeys from "../data/journeys";
import JourneyCard from "../components/JourneyCard";

const Journeys = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Coffee Journeys</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {journeys.map((journey) => (
          <JourneyCard key={journey.id} {...journey} />
        ))}
      </div>
    </div>
  );
};

export default Journeys;
