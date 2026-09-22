"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ImageLightbox({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 z-10 text-4xl text-white/80 transition hover:text-white"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1200}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}