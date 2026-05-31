import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const OverlayComponent = () => {
  const refDiv = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      refDiv.current,
      {
        opacity: 1,
      },
      {
        x: 0,
        y: -2000,
        duration: 2,
        ease: "linear",
      },
    );
  });

  return (
    <div
      ref={refDiv}
      className="
      absolute
      h-[200vh]
      w-screen
      bg-[#EBFDAD]
      inset-0 pointer-events-none z-10
      "
    ></div>
  );
};

export default OverlayComponent;
