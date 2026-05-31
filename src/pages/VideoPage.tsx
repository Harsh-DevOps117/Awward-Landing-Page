import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    quote:
      "Hildén & Kaira understands our audience and voice, and delivers results.",
    author: "Alma Rapakko",
    role: "CMO, Kuntokeskus Liiku",
    positionClasses: "left-8 md:left-16 text-left",
  },
  {
    id: 2,
    quote: "We've reached a huge audience fast, with total peace of mind.",
    author: "Nea Mertsalmi",
    role: "CMO, Finlayson & Co",
    positionClasses: "right-8 md:right-16 text-right",
  },
];

const VideoPage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const video = videoRef.current;
      const textElements = textElementsRef.current.filter(Boolean);

      if (!video || textElements.length === 0) return;

      gsap.to(video, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "none",
        pin: true,
        scrollTrigger: {
          trigger: video,
          start: "top center",
          end: "+=200",
          scrub: true,
        },
      });

      gsap.to(textElements, {
        scale: 0.8,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top center",
          end: "+=800",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToTextRefs = (el: HTMLElement | null) => {
    if (el && !textElementsRef.current.includes(el)) {
      textElementsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#efefec]"
    >
      <div className="relative w-full h-full overflow-hidden bg-black">
        <div
          ref={videoRef}
          className="

            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[90vw]
            md:w-[60vw]
            h-[30vh]
            md:h-[45vh]
            rounded-[32px]
            overflow-hidden
            z-0
          "
        >
          <iframe
            className="w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/ugrq-usgF4s?autoplay=1&mute=1&loop=1&playlist=ugrq-usgF4s&controls=0&showinfo=0&rel=0"
            title="Background video"
            allow="autoplay"
            allowFullScreen
          />
        </div>

        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
        <div className="absolute inset-0 flex justify-center items-center px-6 z-20 pointer-events-none">
          <h1
            ref={addToTextRefs}
            style={{ fontFamily: "font" }}
            className="
              font-extralight
              text-center
              text-[#E6F4A6]
              text-5xl
              md:text-7xl
              lg:text-[6rem]
              leading-[0.9]
              max-w-6xl
            "
          >
            Content only you can post
            <br />
            because it's built around your people.
          </h1>
        </div>

        {REVIEWS.map((review) => (
          <div
            key={review.id}
            ref={addToTextRefs}
            className={`
              absolute
              bottom-12
              text-[#E6F4A6]
              max-w-xs
              z-20
              ${review.positionClasses}
            `}
          >
            <p className="text-xl" aria-label="5 out of 5 stars">
              ★★★★★
            </p>

            <p className="mt-4 text-sm md:text-lg leading-relaxed">
              {review.quote}
            </p>

            <p className="mt-4 text-sm font-medium">
              {review.author}
              <br />
              <span className="opacity-80 font-normal">{review.role}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoPage;
