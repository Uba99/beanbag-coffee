import React from "react";
import { useParams, Link } from "react-router-dom";
import journeys from "../data/Journeys";

const JourneyDetail = () => {
  const { slug } = useParams();
  const journey = journeys.find((j) => j.slug === slug);

  if (!journey) {
    return <p className="text-center mt-10">Journey not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 py-10">
      {/*Header*/}
      <div className="text-center mt-10 mb-6">
        <h1 className="text-3xl font-bold font-heading mb-4">{journey.title}</h1>
        <p className="text-gray-600 font-body text-lg italic">{journey.description}</p>
      </div>
      {/*Main conten*/}
      <div className="grid grid-cols-1 md-grid-cols-2 gap-10 items-center">
        <img
          src={journey.image}
          alt={journey.title}
          className="rounded-lg shadow-md w-full object-cover"
        />
        <div>
          <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed font-baked">
            {journey.content}
          </p>
        </div>
      </div>

      {journey.notes && journey.notes.length > 0 && (
        <div className="bg-gray-100 p-6 rounded-xl shadow-md mt-10">
          <h2 className="text-xl font-semibold mb-3">Flavor Notes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {journey.notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/*other journey*/}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center font-baked">
          Explore More</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {journeys
            .filter((j) => j.slug !== journey.slug) // exclude yg lagi dibaca
            .slice(0, 3) // ambil max 3
            .map((other) => (
              <Link
                key={other.id}
                to={`/journeys/${other.slug}`}
                className="flex items-center bg-white rounded-lg shadow-sm hover:shadow-md p-3 gap-3"
              >
                <img
                  src={other.image}
                  alt={other.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{other.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{other.description}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          want to explore more coffee journeys?</p>
        <Link
          to="/journeys"
          className="inline-block bg-[#856d55] hover:bg-[#ded4c9] text-white px-6 shadow-md transition">
          Back to Journeys
        </Link>
      </div>
    </div>
  );
};

export default JourneyDetail;
