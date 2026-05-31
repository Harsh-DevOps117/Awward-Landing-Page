import image0 from "../assets/image_0.avif";
import image1 from "../assets/image_1.avif";
import image10 from "../assets/image_10.avif";
import image11 from "../assets/image_11.avif";
import image2 from "../assets/image_2.avif";
import image3 from "../assets/image_3.avif";
import image4 from "../assets/image_4.avif";
import image5 from "../assets/image_5.avif";
import image6 from "../assets/image_6.avif";
import image7 from "../assets/image_7.avif";
import image8 from "../assets/image_8.avif";
import image9 from "../assets/image_9.avif";

import image12 from "../assets/image_12.avif";
import image13 from "../assets/image_13.avif";
import image14 from "../assets/image_14.avif";
import image15 from "../assets/image_15.avif";
import image16 from "../assets/image_16.avif";
import image17 from "../assets/image_17.avif";

import FloatingComponent from "../components/FloatingComponent";

const images = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const HeroPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#efefec] flex flex-col overflow-hidden">
      <header className="w-full pt-28 md:pt-32 overflow-hidden">
        <div className="flex justify-center items-end">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              draggable={false}
              className="
                h-[70px]
                sm:h-[100px]
                md:h-[180px]
                lg:h-[260px]
                object-contain
                select-none
              "
            />
          ))}
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 -mt-4">
        <div className="max-w-6xl pt-10">
          <span
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              opacity-60
            "
          >
            Brand Strategy • Design • Growth
          </span>

          <FloatingComponent img={image12} x={5} rotation={-15} scale={0.8} />

          <FloatingComponent img={image13} x={20} rotation={12} scale={0.7} />

          <FloatingComponent img={image14} x={35} rotation={-12} scale={0.9} />

          <FloatingComponent img={image15} x={20} rotation={10} scale={0.8} />

          <FloatingComponent img={image16} x={75} rotation={-12} scale={0.85} />

          <FloatingComponent img={image17} x={90} rotation={7} scale={0.6} />

          <h1
            style={{ fontFamily: "font" }}
            className="
              mt-4
              text-[2rem]
              md:text-[3rem]
              lg:text-[5rem]
              leading-[0.9]
              -tracking-normal

            "
          >
            If you can't reach a million
            <br />
            people with 0€ ad spend,
            <br />
            your branding sucks.
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-sm
              md:text-xl
              opacity-70
            "
          >
            We create brands, websites, and digital experiences that people
            actually remember. No fluff. No generic marketing. Just work that
            gets noticed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
            <button
              className="
                group
                relative
                overflow-hidden
                bg-black
                text-white
                px-10
                py-5
                text-sm
                uppercase
                tracking-[0.15em]
                transition-all
                duration-500
                hover:scale-[1.03]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-white
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-4
                  group-hover:text-black
                  transition-colors
                  duration-500
                "
              >
                OUR APPROACH
                <span
                  className="
                    text-lg
                    group-hover:translate-x-2
                    transition-transform
                    duration-500
                  "
                >
                  →
                </span>
              </span>
            </button>

            <button
              className="
                group
                bg-[#d7ef74]
                px-10
                py-5
                text-sm
                uppercase
                tracking-[0.15em]
                flex
                items-center
                justify-center
                gap-4
                transition-all
                duration-500
                hover:scale-[1.03]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              "
            >
              WORK WITH US
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  bg-black
                  text-white
                  rounded-full
                  group-hover:rotate-45
                  transition-transform
                  duration-500
                "
              >
                ↗
              </span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroPage;
