import React from "react";
import { FaMicrochip } from "react-icons/fa";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute w-96 h-96 bg-primary rounded-full opacity-30 animate-ping top-[-10%] left-[-10%]"></div>
          <div className="absolute w-72 h-72 bg-secondary rounded-full opacity-40 animate-pulse bottom-[-10%] right-[-10%]"></div>
        </div>

        {/* Hero Text */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-bounce">
          GPU BIOS Made Easy
        </h1>
        <p className="text-gray-400 max-w-3xl text-lg md:text-xl mb-10">
          Learn how to backup, flash, and recover GPUs safely. Step-by-step
          guides for beginners and pros.
        </p>
        <div className="flex gap-6">
          <a
            className="px-8 py-4 bg-primary hover:bg-blue-700 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            href="#tutorials"
          >
            Get Started
          </a>
          <a
            className="px-8 py-4 border border-gray-500 hover:border-white rounded-lg font-semibold transition transform hover:scale-105"
            href="#downloads"
          >
            Download Tools
          </a>
        </div>

        {/* Animated GPU Cards */}
        <div className="absolute top-1/4 left-1/4 w-48 h-32 bg-gray-800 rounded-2xl shadow-lg animate-float rotate-6 opacity-80 flex justify-center items-center">
          <FaMicrochip className="text-primary text-6xl animate-bounce" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-56 h-36 bg-gray-700 rounded-2xl shadow-2xl animate-float delay-2000 rotate-12 opacity-70 flex justify-center items-center">
          <FaMicrochip className="text-secondary text-7xl animate-bounce" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-28 bg-gray-600 rounded-2xl shadow-lg animate-float delay-4000 rotate-[-6deg] opacity-60 flex justify-center items-center">
          <FaMicrochip className="text-primary text-5xl animate-bounce" />
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="p-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Interactive Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Backup NVIDIA BIOS",
              desc: "Step-by-step guide to backup your NVIDIA GPU BIOS safely.",
              link: "#",
            },
            {
              title: "Flash AMD BIOS",
              desc: "Learn how to flash your AMD GPU BIOS without risk.",
              link: "#",
            },
            {
              title: "Recover Failed Flash",
              desc: "Recover your GPU if a BIOS flash fails.",
              link: "#",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 cursor-pointer hover:bg-gray-800 flex flex-col items-center"
            >
              <FaMicrochip className="text-primary text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 mb-4">{card.desc}</p>
              <a
                className="text-primary font-semibold hover:underline"
                href={card.link}
              >
                Read Guide
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="p-16 bg-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">Download Tools</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <a
            href="#"
            className="px-12 py-6 bg-primary rounded-2xl shadow-2xl text-xl font-semibold hover:scale-105 transform transition-all hover:bg-blue-700"
          >
            NVIDIA BIOS Tool
          </a>
          <a
            href="#"
            className="px-12 py-6 bg-secondary rounded-2xl shadow-2xl text-xl font-semibold hover:scale-105 transform transition-all hover:bg-red-500"
          >
            AMD BIOS Tool
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-8 text-center text-gray-500 mt-16 border-t border-gray-700">
        © 2026 GPU BIOS Hub | Use tools at your own risk | Mohan Chippala
      </footer>
    </div>
  );
}

export default App;