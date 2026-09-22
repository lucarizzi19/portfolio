import ImageLightbox from "@/components/ImageLightbox";

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
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
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

      {/* Content */}
      <section className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="mb-8">
          <p className="mb-2 text-sm text-neutral-500">
            Modelling · Resin · Finishing
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">
            Lego wheels
          </h1>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <ImageLightbox
              key={image}
              src={image}
              alt={`LEGO wheels ${index + 1}`}
              width={800}
              height={450}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ))}
        </div>
      </section>
    </main>
  );
}