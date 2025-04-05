import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
          Let’s Talk
        </h2>
        <p className="text-gray-400 mb-12">
          Got questions or ideas? We’d love to hear from you. Drop a message and we’ll be in touch shortly.
        </p>

        <form
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 h-40 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
