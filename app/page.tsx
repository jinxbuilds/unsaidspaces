import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import MediumSection from "@/components/MediumSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        {/* NOISE TEXTURE */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "url('/noise.png')",
          }}
        />

        {/* HERO SECTION */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden pt-28 md:pt-40">

          {/* BACKGROUND BRANDING LOGO */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" />
              <text x="200" y="210" textAnchor="middle" className="text-xl font-semibold" fill="currentColor">
                UNSAID SPACES
              </text>
            </svg>
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            UNSAID SPACES
          </p>

          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
            Building quietly on the internet.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Systems, thoughts, photography, and experiments in design,
            infrastructure, and digital spaces.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-zinc-400 hover:bg-white/10"
            >
              About
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">

            <a
              href="https://github.com/jinxbuilds"
              target="_blank"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://x.com/seenandunsaid"
              target="_blank"
              className="transition hover:text-white"
            >
              X
            </a>

            <a
              href="https://streetlevelthought.medium.com/"
              target="_blank"
              className="transition hover:text-white"
            >
              Medium
            </a>

            <a
              href="https://in.pinterest.com/unsaidspaces/"
              target="_blank"
              className="transition hover:text-white"
            >
              Pinterest
            </a>

          </div>

        {/* MEDIUM SECTION */}
        <div className="mx-auto max-w-6xl px-6">
          <MediumSection />
        </div>


        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="mx-auto max-w-5xl px-6 py-32"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <h2 className="max-w-4xl text-3xl font-semibold leading-relaxed text-zinc-100 md:text-5xl">
            Developer focused on backend systems, cloud infrastructure,
            scalable applications, and thoughtful digital experiences.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Building projects across full-stack development, APIs,
            deployment workflows, computer vision, and modern web
            architecture while documenting observations through writing
            and photography.
          </p>
        </section>


        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 pb-32"
        >
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Projects
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            {/* PROJECT CARD */}
            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900/70">

              <h3 className="text-2xl font-semibold">
                Traffic Sign Recognition
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Computer vision system using TensorFlow, OpenCV,
                and CNN architectures for traffic sign detection
                and classification. The project is live and you can check it here.
              </p>

              <a
                href="https://traffic-sign-recognition-er68.onrender.com/"
                target="_blank"
                className="mt-4 inline-block rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-red-600 hover:text-red-500"
              >
                View Project
              </a>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  TensorFlow
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  OpenCV
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  CNN
                </span>

              </div>

            </div>

            {/* PROJECT CARD */}
            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900/70">

              <h3 className="text-2xl font-semibold">
                MERN E-Commerce Platform
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Full-stack commerce application with authentication,
                APIs, responsive UI, and deployment workflows.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  React
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  Node.js
                </span>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  MongoDB
                </span>

              </div>

            </div>

          </div>
        </section>

        {/* GALLERY */}
        <Gallery />


        {/* FOOTER */}
        <footer className="border-t border-zinc-900 px-6 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

            <p>
              © 2026 Unsaid Spaces
            </p>

            <div className="flex gap-6">

              <a
                href="https://github.com/jinxbuilds"
                target="_blank"
                className="transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://x.com/seenandunsaid"
                target="_blank"
                className="transition hover:text-white"
              >
                X
              </a>

              <a
                href="https://streetlevelthought.medium.com/"
                target="_blank"
                className="transition hover:text-white"
              >
                Medium
              </a>

            </div>

          </div>
        </footer>

      </main>
    </>
  );
}