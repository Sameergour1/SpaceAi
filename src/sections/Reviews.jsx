import React from "react";

const reviews = [
  {
    name: "Aarav Sharma",
    title: "Software Engineer",
    comment:
      "AIHub transformed how we integrate AI. It’s intuitive, fast, and reliable.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Meera Kaur",
    title: "Data Scientist",
    comment:
      "The features are unmatched. Integration has never been this seamless.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Verma",
    title: "Startup Founder",
    comment:
      "Our startup saved weeks using AIHub's pre-built AI modules. Game changer!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-br from-[#f7fbff] to-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          What People Are Saying
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Real feedback from our amazing users across the globe.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-lg border border-gray-200 p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
              />
              <p className="text-gray-700 mb-4 italic">“{review.comment}”</p>
              <h4 className="text-lg font-semibold text-cyan-600">
                {review.name}
              </h4>
              <span className="text-sm text-gray-500">{review.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
