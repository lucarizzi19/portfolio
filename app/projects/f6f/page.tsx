import ImageLightbox from "@/components/ImageLightbox";

export default function F6FProject() {
  const gallery = [
    {
      title: "3D printed engine mount",
      image: "/f6f/f6f_nose.jpg",
      description: "Interior details",
    },
    {
      title: "RC system",
      image: "/f6f/f6f_rc.jpg",
      description: "Integrated RC system",
    },
    {
      title: "Lighting",
      image: "/f6f/f6f_lights.jpg",
      description: "Functional lighting",
    },
    {
      title: "Interior",
      image: "/f6f/f6f_interior.jpg",
      description: "Interior details",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HEADER */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">

        <a
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-neutral-400"
        >
          Luca Rizzi
        </a>

        <nav className="flex gap-6 text-sm text-neutral-500">
          <a
            href="/#about"
            className="transition hover:text-white"
          >
            About
          </a>
        </nav>

      </header>

      {/* PROJECT */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 lg:px-10">

        {/* TOP */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          {/* LEFT */}
          <div className="lg:pr-8">

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              F6F RC Aircraft
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-500">
              Scale RC aircraft combining traditional balsa construction,
              custom 3D printed components, electronics and integrated
              lighting.
            </p>

            {/* SMALL INFO */}
            <div className="mt-8 space-y-3 border-t border-neutral-900 pt-5">

              <div className="flex max-w-sm justify-between text-sm">
                <span className="text-neutral-600">
                  Type
                </span>

                <span className="text-neutral-300">
                  RC Aircraft
                </span>
              </div>

              <div className="flex max-w-sm justify-between text-sm">
                <span className="text-neutral-600">
                  Construction
                </span>

                <span className="text-neutral-300">
                  Balsa
                </span>
              </div>

              <div className="flex max-w-sm justify-between text-sm">
                <span className="text-neutral-600">
                  Components
                </span>

                <span className="text-neutral-300">
                  3D Printed
                </span>
              </div>

              <div className="flex max-w-sm justify-between text-sm">
                <span className="text-neutral-600">
                  Electronics
                </span>

                <span className="text-neutral-300">
                  Integrated
                </span>
              </div>

            </div>

          </div>

          {/* HERO */}
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">

            <ImageLightbox
              src="/f6f/f6f_hero.jpg"
              alt="F6F RC Aircraft"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
            />

          </div>

        </div>

        {/* GALLERY */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-4">

          {gallery.map((item) => (

            <div key={item.title} className="group">

              <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">

                <ImageLightbox
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={750}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

              </div>

              <div className="mt-3">

                <h2 className="text-sm font-medium text-neutral-200">
                  {item.title}
                </h2>

                <p className="mt-1 text-xs text-neutral-600">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* BACK */}
        <div className="mt-10 border-t border-neutral-900 pt-6">

          <a
            href="/"
            className="text-sm text-neutral-500 transition hover:text-white"
          >
            ← Back to projects
          </a>

        </div>

      </section>

    </main>
  );
}