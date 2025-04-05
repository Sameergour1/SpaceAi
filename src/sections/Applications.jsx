import React from 'react'
import { Cpu, MessageSquare, BookOpen, Camera, Zap, Globe } from 'lucide-react'

const applications = [
  {
    title: "AI Chatbot",
    description: "Conversational AI assistant for support, learning, and productivity.",
    icon: <MessageSquare className="h-10 w-10 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Content Generation",
    description: "Generate blogs, ad copy, social posts, and more with a single prompt.",
    icon: <BookOpen className="h-10 w-10 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Code Assistance",
    description: "Auto-complete, debugging, and generation of code in multiple languages.",
    icon: <Cpu className="h-10 w-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Image Recognition",
    description: "AI-powered vision tools to analyze and describe images.",
    icon: <Camera className="h-10 w-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Automation Workflows",
    description: "Automate repetitive tasks with smart AI integrations.",
    icon: <Zap className="h-10 w-10 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Global Translation",
    description: "Translate across languages with near-human accuracy.",
    icon: <Globe className="h-10 w-10 text-green-500 group-hover:scale-110 transition-transform duration-300" />,
  },
];

const Applications = () => {
  return (
    <section className="py-24 px-6 bg-white text-gray-800" id="applications">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-600 drop-shadow-sm">✨ Applications of AI Hub</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore how AI Hub transforms industries with cutting-edge AI solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl bg-white p-6 shadow hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {app.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Applications
