import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Stella Astbury
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-xl">
          Software Engineer | Health Tech Enthusiast | Full-Stack Developer
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            See My Work
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-800 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Healthcare Cost Estimator</h3>
            <p className="text-gray-300 mb-4">
              Built a web app using React, FastAPI, and PostgreSQL to model healthcare costs and out-of-pocket expenses.
            </p>
            <p className="text-sm text-gray-400">Tech: React, Tailwind, FastAPI, PostgreSQL</p>
          </div>
          {/* Project 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Fitness Training Dashboard</h3>
            <p className="text-gray-300 mb-4">
              Developed a full-stack platform to track combat sports training, weight, and recovery trends.
            </p>
            <p className="text-sm text-gray-400">Tech: React, FastAPI, PostgreSQL, Chart.js</p>
          </div>
          {/* Project 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2 text-white">Alexa Skill for Audible</h3>
            <p className="text-gray-300 mb-4">
              Developed a voice-activated skill integrating Goodreads API using AWS Lambda and DynamoDB.
            </p>
            <p className="text-sm text-gray-400">Tech: AWS Lambda, DynamoDB, Node.js</p>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER SECTION */}
      <footer className="bg-gray-800 py-10 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-4 text-gray-300">
            I’m open to collaborating, internships, or full-time roles in software engineering and health tech.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:sastbury@ucsd.edu" className="text-blue-400 hover:underline">
              Email
            </a>
            <a href="https://github.com/st3llaa" className="text-blue-400 hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/stella-astbury/" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">&copy; 2025 Stella Astbury</p>
        </div>
      </footer>
    </main>
  );
}
