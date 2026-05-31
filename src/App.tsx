import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import OverlayComponent from "./components/OverlayComponent";
import FourthPage from "./pages/FourthPAge";
import HeroPage from "./pages/HeroPage";
import ThirdPage from "./pages/ThirdPage";
import VideoPage from "./pages/VideoPage";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const syncTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(syncTicker);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(syncTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="relative
     max-h-screen bg-[#efefec]"
    >
      <Navbar></Navbar>
      <HeroPage />
      <VideoPage></VideoPage>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
      <div>
        <OverlayComponent />
      </div>
    </div>
  );
};

export default App;
