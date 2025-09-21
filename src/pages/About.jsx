import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?coffee,travel')" }}>
        <div className="bg-black bg-opacity-40 absolute inset-0"></div>
        <h1 className="relative text-white text-5xl font-bold z-10 text-center px-4">
          About BeanBag Co.
        </h1>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center font-baked">
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="leading-relaxed mb-4">
            BeanBag Co. started with a simple idea: coffee is more than just a drink, it’s a journey. With years behind the bar serving espresso and learning from farmers across Indonesia, we wanted to bring those experiences into every cup. What began as a small project turned into a brand built on curiosity, travel, and discovery.
          </p>
        </div>
        <img
          src="https://source.unsplash.com/600x600/?coffee,beans"
          alt="Our Story"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Our Coffee */}
      <section className="bg-gray-50 py-20 px-6 font-baked">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://source.unsplash.com/600x600/?coffee,cup"
            alt="Our Coffee"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">Our Coffee</h2>
            <p className="leading-relaxed mb-4">
              Every bag of BeanBag coffee reflects a story from the highlands of Indonesia. We carefully source Arabica beans from regions like Gayo, Lintong, and Kintamani. each with its own character shaped by soil, climate, and tradition.
            </p>
            <p className="leading-relaxed mb-4">
              From natural to washed processes, we choose beans that highlight the diversity of Indonesia’s landscapes. The roast is balanced, made to be approachable for everyday coffee lovers while still exciting for curious explorers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
          <p className="leading-relaxed mb-4">
            Coffee is an adventure, and we believe every cup should feel like one. That’s why our brand is built around the spirit of traveling. whether you’re climbing mountains, surfing waves, or simply finding a quiet moment at home, we want our coffee to be part of that journey.
          </p>
        </div>
        <img
          src="https://source.unsplash.com/600x600/?coffee,travel"
          alt="Our Philosophy"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Sustainability & Community */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://source.unsplash.com/600x600/?coffee,farm"
            alt="Sustainability"
            className="rounded-2xl shadow-lg order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Sustainability & Community</h2>
            <p className="leading-relaxed mb-4">
              Behind every cup are farmers who dedicate their lives to the craft. We value direct connections with growers and aim to build relationships that are fair and lasting.
            </p>
            <p className="leading-relaxed mb-4">
              Supporting local communities and promoting sustainable practices is at the heart of BeanBag Co. Because good coffee should not only taste good, it should also do good.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;