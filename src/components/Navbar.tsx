import { gsap } from "gsap";
import { useRef } from "react";

const links = ["Our Approach", "Story", "Work", "Blog"];

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const isOpen = useRef(false);

  const toggleMenu = () => {
    if (!menuRef.current) return;

    if (!isOpen.current) {
      gsap.set(menuRef.current, {
        display: "flex",
      });

      gsap.fromTo(
        menuRef.current,
        {
          y: "-100%",
        },
        {
          y: "0%",
          duration: 0.6,
          ease: "power3.inOut",
        },
      );

      gsap.fromTo(
        linksRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          delay: 0.2,
        },
      );

      isOpen.current = true;
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menuRef.current, {
            display: "none",
          });
        },
      });

      isOpen.current = false;
    }
  };

  return (
    <>
      <nav
        className="
        fixed
        top-0
        left-0
        z-[999]
        w-full
        px-6
        md:px-12
        py-6
        flex
        justify-between
        items-center

      "
      >
        <div
          style={{ fontFamily: "font" }}
          className="
            text-2xl
            cursor-pointer
            tracking-tight
          "
        >
          HK.
        </div>

        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="
                relative
                text-sm
                uppercase
                tracking-wider
                group
              "
            >
              {link}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  h-[1px]
                  w-0
                  bg-black
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        <button
          className="
            hidden
            md:flex
            border
            border-black
            px-6
            py-3
            text-sm
            uppercase
            tracking-wider
            hover:bg-black
            hover:text-white
            transition-all
            duration-300
          "
        >
          Contact
        </button>

        <button
          onClick={toggleMenu}
          className="
            md:hidden
            flex
            flex-col
            gap-1
          "
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="
          hidden
          fixed
          inset-0
          z-[998]
          bg-[#efefec]
          flex-col
          justify-center
          items-center
          gap-10
        "
      >
        {links.map((link, index) => (
          <a
            key={link}
            href="#"
            ref={(el) => {
              if (el) linksRef.current[index] = el;
            }}
            onClick={toggleMenu}
            className="
              text-4xl
              uppercase
              tracking-wider
            "
          >
            {link}
          </a>
        ))}

        <button
          className="
            mt-6
            border
            border-black
            px-8
            py-4
            uppercase
          "
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default Navbar;
