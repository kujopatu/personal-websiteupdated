import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaMoon, FaSun } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-10 transition-all duration-300">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-orange-600 dark:text-yellow-300"
            title="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <header className="text-center mb-10">
          <img src="images/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border" />
          <h1 className="text-3xl font-bold">Patu Kujo Emmanuel</h1>
          <p className="text-lg">Computer Engineer | Logistics Professional</p>
          <div className="flex justify-center mt-4 space-x-4 text-xl text-blue-600 dark:text-blue-300">
            <a href="https://www.facebook.com/pkujo" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/kujo-patu-a2a06075/" target="_blank"><FaLinkedin /></a>
            <a href="https://x.com/kujolamba1" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com/emmy.pat/" target="_blank"><FaInstagram /></a>
          </div>
          <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed">
            Download Resume (Coming Soon)
          </button>
        </header>

        <main>
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>I’m a computer engineer and logistics expert with a passion for building smart digital systems and optimizing supply chains.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
