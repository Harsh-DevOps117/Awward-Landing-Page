import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface FloatingComponentProps {
  img: string;
  x: number;
  rotation: number;
  scale?: number;
}

const FloatingComponent = ({
  img,
  x,
  rotation,
  scale = 1,
}: FloatingComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const animate = () => {
      const drift = Math.random() > 0.5 ? 150 : -150;
      const duration = 8 + Math.random() * 12;

      gsap.set(element, {
        y: window.innerHeight + 400,
      });

      gsap.to(element, {
        y: -window.innerHeight - 500,
        x: drift,
        duration,
        ease: "none",
        onComplete: animate,
      });
    };

    animate();

    return () => {
      gsap.killTweensOf(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: 0,
        width: `${150 * scale}px`,
        height: `${200 * scale}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <img
        src={img}
        alt=""
        draggable={false}
        className="w-full h-full object-cover select-none"
      />
    </div>
  );
};

export default FloatingComponent;
