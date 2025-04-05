import React from "react";

const Subscription = () => {
  return (
    <section className="bg-[#E6F4FA] py-16 px-4"> {/* Light dull sky blue */}
      <div className="max-w-4xl mx-auto text-center text-gray-800">
        <h2 className="text-4xl font-bold mb-4">Stay Updated with AIHub</h2>
        <p className="mb-8 text-lg">
          Subscribe to our newsletter for the latest updates, features, and exclusive offers.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-gray-800 focus:outline-none shadow-md"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
