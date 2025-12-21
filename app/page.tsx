import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen flex flex-col text-white">
      {/* NAVIGATION SECTION */}
        <header className="flex justify-between items-center px-6 py-4 bg-gray-900">
        <div className="font-bold text-xl">Stella Astbury</div>

        <nav className="flex gap-6">
        <a href="/" className="hover:text-blue-400 transition">
          Home
       </a>
        <a href="/about" className="hover:text-blue-400 transition">
          About
        </a>
      </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <p className="text-sm text-gray-400 mt-4">
          Engineer. Athlete. Builder.
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Stella Astbury
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-xl">
          Software Engineer | Combat Sports Athlete | Health & Performance Builder
          Building at the intersection of health, performance, and community
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            See My Work
          </a>
        <a
          href="/Stella Astbury.pdf"
          target="_blank"
          rel="noopener noreferrer"
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
              Built a full-stack healthcare cost modeling platform to estimate out-of-pocket expenses and improve patient financial transparency.
            </p>
            <ul>
              <li>Designed REST APIs with FastAPI and PostgreSQL</li>
              <li>Implemented cost simulations and insurance logic  </li>
              <li>Deployed with production-ready authentication patterns</li>
            </ul>
            <p className="text-sm text-gray-400">Tech: React, Tailwind, FastAPI, PostgreSQL</p>  
            <Image
              src="/projects/healthcare.png"
              alt="Healthcare Cost Estimator"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />  
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
            I build things I care about and collaborate with people who do the same.
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
