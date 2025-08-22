import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/test-img/abhishek.png",
  "/test-img/ayush.png",
  "/test-img/sachin.png",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % slides.length),
      4_000
    );
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i + 1) % slides.length);

  return (
    <div className="mx-auto flex max-w-[80vw] flex-col items-center shadow-xl">
      <h2 className="mb-2 text-center text-2xl font-bold text-gray-100">
        Testimonials 
        <span className="block h-1 w-16 bg-gray-500 mt-1 mx-auto"></span>
      </h2>


      <div className="relative h-[20vh] w-full overflow-hidden rounded-lg">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`slide ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-2 flex gap-4">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
