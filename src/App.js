import React from "react";
import { FaMicrochip } from "react-icons/fa";

function App() {
  return (
    <div className="bg-[#0b0f14] text-gray-200 min-h-screen font-sans">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-lg font-semibold tracking-wide">
          GPU BIOS Toolkit
        </h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#guides" className="hover:text-white">Guides</a>
          <a href="#tools" className="hover:text-white">Tools</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
          Fix and Flash GPU BIOS  
          <br /> without breaking your card
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-8">
          Simple guides and tools for repairing GPUs, flashing vBIOS, and recovering from bad flashes.
          Built for people who actually work on hardware.
        </p>

        <div className="flex gap-4">
          <a
            href="#guides"
            className="bg-white text-black px-6 py-3 rounded-md font-medium hover:opacity-80 transition"
          >
            View Guides
          </a>

          <a
            href="#tools"
            className="border border-gray-600 px-6 py-3 rounded-md hover:border-white transition"
          >
            Download Tools
          </a>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section id="guides" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-10 text-white">
          Popular Guides
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Backup Your BIOS",
              desc: "Save your original vBIOS before making any changes.",
            },
            {
              title: "Flash Safely",
              desc: "Step-by-step process to flash AMD and NVIDIA cards.",
            },
            {
              title: "Fix a Bricked GPU",
              desc: "Recover from bad flashes using secondary GPUs.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#11161c] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition"
            >
              <FaMicrochip className="text-gray-400 mb-4 text-2xl" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section id="tools" className="bg-[#0e1319] border-t border-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-white">
            Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#11161c] p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">NVIDIA Tools</h3>
              <p className="text-gray-400 text-sm mb-4">
                NVFlash, BIOS editors, and recovery tools.
              </p>
              <button className="text-sm text-white underline">
                Download
              </button>
            </div>

            <div className="bg-[#11161c] p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold mb-2">AMD Tools</h3>
              <p className="text-gray-400 text-sm mb-4">
                ATIFlash, mod tools, and BIOS recovery utilities.
              </p>
              <button className="text-sm text-white underline">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
        Built for learning and repair. Use at your own risk. Website Developed By Mohan Chippala
      </footer>
    </div>
  );
}

export default App;