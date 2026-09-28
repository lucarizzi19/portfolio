import Image from "next/image";

export default function SteeringWheel() {
  const gallery = [
    {
      title: "Designed from scratch",
      image: "/steering_wheel/steering_wheel_cad.jpg",
      description: "Completely engineered from scratch",
    },
    {
      title: "Custom PCB",
      image: "/steering_wheel/steering_wheel_pcb.jpg",
      description: "Custom PCB integrating all functionalities",
    },
    {
      title: "Working display and LEDs",
      image: "/steering_wheel/steering_wheel_dis.jpg",
      description: "Connected to Assetto Corsa",
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
            Steering Wheel
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-neutral-500">
            Custom sim racing steering wheel combining mechanical design,
            electronics and custom 3D printed components.
          </p>
        </div>

        {/* MAIN IMAGE LAYOUT */}
        <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-2">

          {/* HERO */}
          <div className="relative h-full min-h-0 min-w-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <Image
              src="/steering_wheel/steering_wheel_hero.jpg"
              alt="Steering Wheel"
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