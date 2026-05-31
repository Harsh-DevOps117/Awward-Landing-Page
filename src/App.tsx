import Navbar from "./components/Navbar";
import OverlayComponent from "./components/OverlayComponent";
import HeroPage from "./pages/HeroPage";
import VideoPage from "./pages/VideoPage";

const App = () => {
  return (
    <div
      className="relative
     max-h-screen bg-[#efefec] "
    >
      <Navbar></Navbar>
      <HeroPage />
      <VideoPage></VideoPage>
      <div>
        <OverlayComponent />
      </div>
    </div>
  );
};

export default App;
