import Image from "next/image";

const images = [
  "/lego_wheels/lego_wheels_01.jpg",
  "/lego_wheels/lego_wheels_02.jpg",
  "/lego_wheels/lego_wheels_03.jpg",
  "/lego_wheels/lego_wheels_04.jpg",
  "/lego_wheels/lego_wheels_05.jpg",
  "/lego_wheels/lego_wheels_06.jpg",
];

export default function LegoWheelsPage() {
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
          <a href="/" className="transition hover:text-white">
            Projects
          </a>

          <a href="/#about" className="transition hover:text-white">
            About
          </a>
        </nav>
      </header>

      {/* CONTENT */}
      <section className="mx-auto flex h-[calc(100vh-68px)] max-w-[1400px] flex-col px-6 pb-6 pt-5 lg:px-10">
        {/* INTRO */}
        <div className="mb-5 shrink-0">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lego wheels
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-5 text-neutral-500">
            Wheel designs for LEGO models, developed through CAD
            modelling, resin printing and hand finishing with airbrush.
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-5">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative min-h-0 min-w-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
            >
              <Image
                src={image}
                alt={`LEGO wheels ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
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