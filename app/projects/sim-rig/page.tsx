import Image from "next/image";

export default function SimRig() {
  const gallery = [
    {
      title: "Designed from scratch",
      image: "/sim_rig/sim_rig_cad.jpg",
      description: "Complete CAD design developed from scratch",
    },
    {
      title: "Fully adjustable",
      image: "/sim_rig/sim_rig_adjustale.jpg",
      description: "Adjustable steering wheel, pedals and seat position",
    },
    {
      title: "Real car seat",
      image: "/sim_rig/sim_rig_seat.jpg",
      description: "Real car seat integrated into the rig",
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
            Sim Racing Rig
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-neutral-500">
            Sim racing rig designed from scratch, combining CAD
            engineering, a rigid wooden structure and adjustable driving
            ergonomics.
          </p>
        </div>

        {/* MAIN IMAGE LAYOUT */}
        <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">

          {/* HERO */}
          <div className="relative h-full min-h-0 min-w-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <Image
              src="/sim_rig/sim_rig_hero.jpg"
              alt="Sim racing rig"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
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

                {/* IMAGE */}
                <div className="relative min-h-0 min-w-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
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

            {/* EMPTY SLOT */}
            <div />

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