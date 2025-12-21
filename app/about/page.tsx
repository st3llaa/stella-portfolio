import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-900 min-h-screen text-white">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          I’m a software engineer, competitive combat sports athlete, and creative
          builder focused on health, performance, and community-driven products.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            My background sits at the intersection of <strong>engineering, athletics,
            and entrepreneurship</strong>. I graduated from UC San Diego with a
            degree in Mathematics and Computer Science, where I focused on building
            technically rigorous systems while applying them to real-world problems
            in health, finance, and research.
          </p>

          <p>
            Outside of the classroom, I apply the same discipline to competitive
            boxing and Muay Thai. Training, cutting weight, and preparing for
            competition has shaped how I approach problem-solving: consistency,
            measurable progress, and resilience under pressure.
          </p>

          <p>
            This mindset carries into my technical work. I’ve built full-stack
            applications, cloud-based services, and data pipelines—ranging from
            healthcare cost modeling platforms to AWS-powered Alexa skills and
            performance analytics tools for athletes.
          </p>

          <p>
            I’m also deeply interested in <strong>content creation and brand-building</strong>.
            Through marketing roles, modeling, and short-form fitness content, I’ve
            learned how technology, storytelling, and community engagement intersect.
            This has inspired my current focus on launching a protein-focused baked
            goods business for local farmers markets—combining nutrition, transparency,
            and direct consumer connection.
          </p>

          <p>
            Whether I’m writing code, training, or building a business, I’m motivated
            by the same goal: <strong>create things that improve how people feel,
            perform, and connect</strong>.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What I Value</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Discipline</h3>
              <p className="text-gray-400 text-sm">
                Built through athletics, research, and long-term projects that
                demand consistency and focus.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ownership</h3>
              <p className="text-gray-400 text-sm">
                I take ideas from concept to execution—shipping, iterating, and
                learning quickly.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-400 text-sm">
                From team-based engineering to gyms and local markets, I thrive
                in collaborative, people-first environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Let’s Build Something Meaningful</h3>
        <p className="text-gray-300 mb-6">
          I’m always open to collaborations, engineering roles, creative projects,
          and conversations at the intersection of tech and human performance.
        </p>
        <a
          href="mailto:sastbury@ucsd.edu"
          className="inline-block px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
