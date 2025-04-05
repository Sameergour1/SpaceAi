import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const AIHub = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: input }],
                role: "user",
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      setResponse(aiResponse);
    } catch (error) {
      console.error("Gemini API error:", error);
      setResponse("❌ Error fetching response. Please check your API key or network.");
    }

    setLoading(false);
    setInput("");
  };

  return (
    <section
      id="aihub"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 text-white bg-black overflow-hidden"
    >
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-20"
      >
        <source src="/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 💬 AI Assistant UI */}
      <div className="w-full max-w-2xl bg-[#0e0e0e]/90 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition duration-300">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-2 drop-shadow-md animate-glow">
          AI Assistant
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Ask anything and get intelligent answers instantly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="w-full px-4 py-3 rounded-md bg-[#1f1f1f] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="self-start px-6 py-2 bg-cyan-600 hover:bg-cyan-700 transition rounded-md text-white font-medium disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-[#161616] border border-gray-700 rounded-lg text-sm text-gray-300 whitespace-pre-line animate-fade-up">
            <strong className="text-cyan-400 block mb-2">Response:</strong>
            {response}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIHub;
