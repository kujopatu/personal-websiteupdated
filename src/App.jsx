import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  const allProjects = [
    { title: "Inventory System", type: "Logistics" },
    { title: "Portfolio Builder", type: "Tech" },
    { title: "Data Analysis Dashboard", type: "Tech" },
    { title: "Supply Chain Optimizer", type: "Logistics" },
  ];

  const testimonials = [
    { name: "John Doe", quote: "Patu is amazing to work with!" },
    { name: "Jane Smith", quote: "Very reliable and professional." },
  ];

  const services = [
    "Web Development",
    "Logistics Consultancy",
    "Data Analysis",
    "System Automation",
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

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
          <img
            src="images/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border"
          />
          <h1 className="text-3xl font-bold">Patu Kujo Emmanuel</h1>
          <p className="text-lg">Computer Engineer | Logistics Professional</p>
          <div className="flex justify-center mt-4 space-x-4 text-xl text-blue-600 dark:text-blue-300">
            <a href="https://www.facebook.com/pkujo" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/kujo-patu-a2a06075/" target="_blank"><FaLinkedin /></a>
            <a href="https://x.com/kujolamba1" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com/emmy.pat/" target="_blank"><FaInstagram /></a>
          </div>
          <a href="resume.pdf" download className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Download Resume</a>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m a computer engineer and logistics expert with a passion for
            building smart digital systems and optimizing supply chains.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <ul className="list-disc pl-6">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="mb-4">
            {["All", "Tech", "Logistics"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 mr-2 rounded ${
                  filter === cat
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <ul className="space-y-2">
            {filteredProjects.map((project, idx) => (
              <li key={idx} className="border-b border-gray-300 pb-2">
                <strong>{project.title}</strong> —{" "}
                <span className="italic text-sm text-gray-500">
                  {project.type}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
          {testimonials.map((t, i) => (
            <blockquote key={i} className="border-l-4 pl-4 mb-4">
              <p className="italic">"{t.quote}"</p>
              <footer className="text-sm mt-1">— {t.name}</footer>
            </blockquote>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <form className="grid gap-4 mt-4 max-w-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 dark:border-gray-700 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-2 border border-gray-300 dark:border-gray-700 rounded"
              required
            />
            <button
              type="submit"
              disabled
              className="bg-orange-600 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed"
            >
              Send (Disabled for now)
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
