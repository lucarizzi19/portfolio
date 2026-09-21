import Image from "next/image";

const gallery = [
  "/lego_wheels/lego_wheels_01.jpg",
  "/lego_wheels/lego_wheels_02.jpg",
  "/lego_wheels/lego_wheels_03.jpg",
  "/lego_wheels/lego_wheels_04.jpg",
  "/lego_wheels/lego_wheels_05.jpg",
  "/lego_wheels/lego_wheels_06.jpg",
];

export default function LegoWheels() {
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
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 lg:px-10">

        {/* TITLE */}
        <div className="mb-12">

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Lego Wheels
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500">
            Custom wheel designs developed for LEGO scale models,
            combining CAD modelling, resin printing and finishing.
          </p>

        </div>


        {/* GALLERY */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((image, index) => (

            <div
              key={image}
              className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
            >

              <Image
                src={image}
                alt={`LEGO wheels ${index + 1}`}
                width={800}
                height={450}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />

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