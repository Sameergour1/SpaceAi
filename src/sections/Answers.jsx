import React, { useState } from 'react';

const faqData = [
  {
    question: "What is AI Integration Hub?",
    answer:
      "AI Integration Hub is a platform to interact with powerful AI models for various use-cases like chat, coding help, and more.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "Currently, we support OpenAI's GPT and Google's Gemini, with more coming soon.",
  },
  {
    question: "Is there any subscription required?",
    answer:
      "Basic usage is free. For premium features, you can upgrade to a subscription plan.",
  },
  {
    question: "Can I integrate this with my app?",
    answer:
      "Yes, you can access APIs and integrate AI responses into your own projects.",
  },
];

const Answers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#E6F4FA] py-20 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          🧠 Answers to Common Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl bg-white border border-indigo-200 shadow-md p-6 group hover:shadow-lg hover:scale-[1.02] ${
                openIndex === index ? "bg-indigo-50" : ""
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-indigo-800"
              >
                <span>{item.question}</span>
                <span className="text-indigo-500 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Answers;
