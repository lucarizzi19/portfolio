import Image from "next/image";

export default function F6FProject() {
  const gallery = [
    {
      title: "3D printed engine mount",
      image: "/f6f/f6f_nose.jpg",
      description: "Custom 3D printed component",
    },
    {
      title: "RC system",
      image: "/f6f/f6f_rc.jpg",
      description: "Integrated RC electronics",
    },
    {
      title: "Lighting",
      image: "/f6f/f6f_lights.jpg",
      description: "Functional lighting system",
    },
    {
      title: "Interior",
      image: "/f6f/f6f_interior.jpg",
      description: "Internal construction details",
    },
  ];

  return (
    <main className="h-screen overflow-hidden bg-neutral-950 text-white">
      {/* HEADER */}
      <header className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-neutral-400"
        >
          Luca Rizzi
        </a>

        <nav className="flex gap-6 text-sm text-neutral-500">
          <a href="/#about" className="transition hover:text-white">
            About
          </a>
        </nav>
      </header>

      {/* PROJECT */}
      <section className="mx-auto flex h-[calc(100vh-68px)] max-w-[1400px] flex-col px-6 pb-6 pt-5 lg:px-10">
        {/* INTRO */}
        <div className="mb-5 shrink-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            F6F RC Aircraft
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-neutral-500">
            Scale RC aircraft combining traditional balsa construction,
            custom 3D printed components, electronics and integrated
            lighting.
          </p>
        </div>

        <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">

          {/* HERO */}
          <div className="relative h-full min-h-0 min-w-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <Image
              src="/f6f/f6f_hero.jpg"
              alt="F6F RC Aircraft"
              fill
              sizes="(min-width: 1024px) 57vw, 100vw"
              className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* GALLERY */}
          <div className="grid h-full min-h-0 min-w-0 grid-cols-2 grid-rows-2 gap-5">

            {gallery.map((item) => (
              <div
                key={item.title}
                className="grid min-h-0 min-w-0 grid-rows-[minmax(0,1fr)_auto]"
              >

                {/* IMAGE BOX */}
                <div className="relative min-h-0 min-w-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* INFO */}
                <div className="min-w-0 pt-2">
                  <h2 className="truncate text-sm font-medium leading-5 text-neutral-200">
                    {item.title}
                  </h2>

                  <p className="truncate text-xs leading-4 text-neutral-600">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* BACK */}
        <div className="mt-4 shrink-0 border-t border-neutral-900 pt-3">
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