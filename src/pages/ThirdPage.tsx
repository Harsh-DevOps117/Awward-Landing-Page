import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import image20 from "../assets/image_21.webp";
import image23 from "../assets/image_23.webp";
import image27 from "../assets/image_27.avif";
import image29 from "../assets/image_29.webp";
import image31 from "../assets/image_31.webp";
import image37 from "../assets/image_37.webp";

gsap.registerPlugin(ScrollTrigger);

const CASE_STUDIES = [
  {
    id: 1,
    title: "Kierrätyskeskus put their people at the center and went viral.",
    statLabel: "Social reach from past 30 days",
    views: "1 245 179",
    likes: "22 587",
    mainImage: image20,
    bgImages: [image23, image23],
    themeIcon: image27,
  },
  {
    id: 2,
    title:
      "Finlayson & Co reached a massive audience with total peace of mind.",
    statLabel: "Campaign reach in Q3",
    views: "3 400 000",
    likes: "45 120",
    mainImage: image29,
    bgImages: [image20, image23],
    themeIcon: image27,
  },
  {
    id: 3,
    title:
      "Kuntokeskus Liiku found their authentic voice and dominated TikTok.",
    statLabel: "Organic growth this year",
    views: "890 500",
    likes: "12 400",
    mainImage: image31,
    bgImages: [image37, image20],
    themeIcon: image27,
  },
  {
    id: 4,
    title: "How we turned everyday employees into industry influencers.",
    statLabel: "Total engagement rate",
    views: "5 200 000",
    likes: "88 900",
    mainImage: image37,
    bgImages: [image20, image23],
    themeIcon: image27,
  },
];

const CaseStudyScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = slidesRef.current;
      if (!slides.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${slides.length * 1200}`,
          scrub: 1,
          pin: true,
        },
      });

      slides.forEach((slide, index) => {
        if (index === 0) {
          gsap.set(slide, { zIndex: 1, xPercent: 0 });
          return;
        }

        gsap.set(slide, { zIndex: index + 1, xPercent: -100 });

        tl.to(slide, {
          xPercent: 0,
          duration: 1,
          ease: "none",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-10 relative w-full h-screen bg-white overflow-hidden flex items-center justify-center overscroll-x-hidden"
    >
      {CASE_STUDIES.map((activeCase, index) => (
        <div
          key={activeCase.id}
          ref={(el) => (slidesRef.current[index] = el)}
          className="absolute mt-10 mb-10 inset-0 w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 will-change-transform bg-white "
        >
          <div className="max-w-340 w-full h-full lg:h-[90vh] max-h-full bg-white flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-4xl lg:rounded-[3rem] overflow-y-auto lg:overflow-hidden border border-gray-100">
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00B47D] rounded-full flex items-center justify-center mb-6 md:mb-8 shrink-0 shadow-md">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-[1.05] tracking-tight mb-8 md:mb-10">
                {activeCase.title}
              </h1>

              <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-8 max-w-sm shrink-0">
                <div className="w-2 h-2 bg-[#FF4F4F] rounded-full shadow-[0_0_8px_rgba(255,79,79,0.6)]"></div>
                <span className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-wide">
                  {activeCase.statLabel}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mb-8 md:mb-10 shrink-0">
                <div className="flex-1 bg-[#E6F4A6] p-6 md:p-8 flex flex-col justify-end min-h-35 md:min-h-40 rounded-3xl transition-transform hover:-translate-y-1 duration-300">
                  <span className="text-sm md:text-base font-semibold text-gray-700 mb-2">
                    Organic views
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-[#1A1A1A]">
                    {activeCase.views}
                  </span>
                </div>

                <div className="flex-1 bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 p-6 md:p-8 flex flex-col justify-end min-h-35 md:min-h-40 rounded-3xl relative overflow-hidden transition-transform hover:-translate-y-1 duration-300 border border-gray-200">
                  <div className="absolute top-4 left-0 w-full flex justify-center drop-shadow-xl z-0 pointer-events-none opacity-90">
                    <img
                      src={activeCase.themeIcon}
                      alt="3D Theme Icon"
                      className="w-16 h-16 md:w-20 md:h-20 object-contain mix-blend-multiply"
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold mb-1 z-10 text-gray-800 drop-shadow-sm">
                    Likes
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter z-10 text-gray-900 drop-shadow-sm">
                    {activeCase.likes}
                  </span>
                </div>
              </div>

              <div className="shrink-0 pb-6 lg:pb-0">
                <button className="bg-[#1A1A1A] text-white text-sm md:text-base font-medium py-4 px-8 rounded-full flex items-center gap-4 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg w-fit">
                  Show case
                  <span className="bg-[#E6F4A6] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-[#F9F9F9] flex items-center justify-center relative p-8 min-h-125 lg:min-h-full overflow-hidden shrink-0">
              <div className="relative flex items-center justify-center w-75h-130 scale-[0.7] md:scale-90 lg:scale-100">
                <div className="absolute w-65 h-110 bg-white p-2.5 shadow-xl rounded-2xl -rotate-12 -translate-x-14 translate-y-6 z-0 border border-gray-100 transition-transform duration-500 hover:-rotate-12 hover:-translate-x-16">
                  <img
                    src={activeCase.bgImages[0]}
                    alt="Background left"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="absolute w-65 h-110 bg-white p-2.5 shadow-xl rounded-2xl rotate-14 translate-x-14 translate-y-4 z-0 border border-gray-100 transition-transform duration-500 hover:rotate-12 hover:translate-x-16">
                  <img
                    src={activeCase.bgImages[1]}
                    alt="Background right"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="absolute w-70 h-120 bg-white p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.15)] rounded-2xl z-10 border border-gray-100 transition-transform duration-500 hover:-translate-y-2">
                  <div className="relative w-full h-full bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={activeCase.mainImage}
                      alt="Main showcase"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                        <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white  border-b-transparent ml-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyScroll;
