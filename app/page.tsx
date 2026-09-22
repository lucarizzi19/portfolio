import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "F6F RC Aircraft",
    category: "Model Making · RC · 3D Printing",
    description:
      "Scale aircraft model combining traditional balsa construction, RC electronics and custom 3D printed components.",
    image: "/f6f/f6f_hero.jpg",
    link: "/projects/f6f",
  },
  {
    title: "Steering Wheel",
    category: "CAD · Electronics · 3D Printing",
    description:
      "Custom sim racing steering wheel combining mechanical design, electronics and 3D printed components.",
    image: "/steering_wheel/steering_wheel_hero.jpg",
    link: "/projects/steering-wheel",
  },
  {
    title: "Sim rig",
    category: "Design · CAD · Manufacturing",
    description:
      "Detailed physical model focused on mechanical structure, proportions and surface finishing.",
    image: null,
    link: null,
  },
  {
    title: "Lego wheels",
    category: "Modelling · Resin · Finishing",
    description:
      "Custom wheel designs combining CAD modelling, resin printing and finishing.",
    image: "/lego_wheels/lego_wheels_02.jpg",
    link: "/projects/lego-wheels",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HEADER */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-neutral-400"
        >
          Luca Rizzi
        </Link>

        <nav className="flex gap-6 text-sm text-neutral-500">
          <Link
            href="/#about"
            className="transition hover:text-white"
          >
            About
          </Link>
        </nav>
      </header>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Industrial Model Maker
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From CAD to physical models.
            </h1>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500">
            Scale models, prototypes and detailed physical objects,
            designed and manufactured from concept to final finish.
          </p>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-[1400px] px-6 pb-32 lg:px-12"
      >
        <div className="mb-8 flex items-end justify-between border-b border-neutral-900 pb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
            Projects
          </p>

          <p className="text-xs text-neutral-700">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-1 lg:grid-cols-4">

          {projects.map((project, index) => {
            const content = (
              <>
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">

                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-neutral-700">
                          Project {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="mt-2 text-xs text-neutral-800">
                          Coming soon
                        </p>
                      </div>
                    </div>
                  )}

                </div>

                {/* INFO */}
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-4">

                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                      {project.category}
                    </p>

                    <span className="shrink-0 text-xs text-neutral-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h2 className="mt-2 text-xl font-medium tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                    {project.description}
                  </p>

                  {project.link && (
                    <div className="mt-4 text-sm text-neutral-400 transition group-hover:text-white">
                      View project →
                    </div>
                  )}
                </div>
              </>
            );

            if (!project.link) {
              return (
                <div
                  key={project.title}
                  className="group block"
                >
                  {content}
                </div>
              );
            }

            return (
              <Link
                key={project.title}
                href={project.link}
                className="group block"
              >
                {content}
              </Link>
            );
          })}

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-neutral-900 px-6 py-20 lg:px-12"
      >
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* ABOUT TEXT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                About
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Luca Rizzi
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Mechanical Engineer · Italy
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-500">
                I work in mechanical design and manufacturing, while spending
                much of my free time building things.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500">
                I'm particularly interested in model making, 3D printing,
                electronics and mechanical projects — especially when CAD
                eventually becomes something physical.
              </p>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap gap-3">

              {/* CV */}
              <a
                href="/Luca_Rizzi_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                  />
                </svg>

                Download CV
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/TUO-PROFILO/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0-4.12ZM3.56 20.45h3.56V8.99H3.56v11.46Z" />
                </svg>

                LinkedIn
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] justify-between text-xs text-neutral-700">
          <span>Luca Rizzi</span>
          <span>Industrial Model Maker</span>
        </div>
      </footer>

    </main>
  );
}