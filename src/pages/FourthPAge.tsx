import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import image_63 from "../assets/image_63.avif";
import image_64 from "../assets/image_64.avif";
import image_68 from "../assets/image_68.avif";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface SplitTextProps {
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Hildén & Kaira believed from day one that we could turn even our critics into supporters through TikTok, and that's exactly what happened. Over the course of the campaign, the harshest voices faded and genuine support grew in their place. They work at the same relentless pace as a presidential campaign demands, delivering in hours what would take others days. In a race like this, that was invaluable.",
    author: "Pekka Haavisto",
    role: "Personal Envoy of the UN Secretary-General for Sudan",
    image: image_63,
  },
  {
    id: 2,
    quote:
      "They executed our vision with absolute precision. Watching the engagement metrics skyrocket in real-time proved that their unorthodox methods were exactly what the digital landscape required right now.",
    author: "Jane Doe",
    role: "Chief Marketing Officer",
    image: image_64,
  },
  {
    id: 3,
    quote:
      "This team delivered exceptional results under immense pressure. Their strategy completely transformed our digital presence within a matter of weeks, creating unprecedented momentum.",
    author: "John Smith",
    role: "Campaign Manager",
    image: image_63,
  },
];

const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  return (
    <span aria-label={text} role="heading">
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className="inline-block overflow-hidden whitespace-nowrap mr-[0.25em] pb-1 align-bottom"
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={`char-${wordIndex}-${charIndex}`}
              className="char inline-block translate-y-full opacity-0"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default function FourthPage() {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef<boolean>(false);

  const handleNavigation = (newDir: "next" | "prev") => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setDirection(newDir);

    let ctx = gsap.context(() => {
      gsap.to(".char", {
        y: newDir === "next" ? -50 : 50,
        opacity: 0,
        duration: 0.25,
        stagger: {
          amount: 0.15,
          from: newDir === "next" ? "start" : "end",
        },
        ease: "power2.in",
        onComplete: () => {
          setIndex((prev) =>
            newDir === "next"
              ? (prev + 1) % testimonials.length
              : (prev - 1 + testimonials.length) % testimonials.length,
          );
        },
      });
    }, containerRef);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".char", {
        y: direction === "next" ? 50 : -50,
        opacity: 0,
      });

      gsap.to(".char", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: {
          amount: 0.3,
          from: direction === "next" ? "start" : "end",
        },
        ease: "power3.out",
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [index, direction]);

  return (
    <div
      className="min-h-screen bg-[#EBE9E4] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 relative font-sans overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-[1000px] w-full mx-auto relative flex flex-col min-h-[500px]">
        <div className="flex items-center text-[13px] font-medium text-gray-900 tracking-wide mb-12">
          <span>
            {index + 1} / {testimonials.length}
          </span>
          <span className="ml-4">What our clients say:</span>
        </div>

        <div className="absolute -top-8 -right-8 md:-top-12 md:-right-16 hidden sm:block pointer-events-none z-0">
          <img
            src={image_68}
            alt="Quotation marks"
            className="w-32 h-32 md:w-48 md:h-48 object-contain opacity-90 mix-blend-multiply transform -rotate-6"
          />
        </div>

        <div className="relative z-10 flex-grow">
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-serif leading-[1.05] text-[#1A1A1A] tracking-[-0.02em] mb-12">
            <SplitText text={testimonials[index].quote} />
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-auto relative z-10">
          <div className="flex items-center gap-4">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].author}
              className="w-[60px] h-[60px] rounded-full object-cover grayscale brightness-95"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 text-[15px] leading-snug">
                {testimonials[index].author}
              </span>
              <span className="text-[13px] text-gray-800 leading-snug">
                {testimonials[index].role}
              </span>
            </div>
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => handleNavigation("prev")}
              className="bg-[#1C1C1C] hover:bg-[#333] text-white w-11 h-11 flex items-center justify-center transition-colors duration-200 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="bg-[#1C1C1C] hover:bg-[#333] text-white w-11 h-11 flex items-center justify-center transition-colors duration-200 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
