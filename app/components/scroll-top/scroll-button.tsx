import { ScrollToTopButton } from "@/app/lib/svg/scroll-to-top/scroll-to-top";
import React, { useEffect, useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <button
        id="scroll-to-top"
        className={`${
          visible ? "md:block" : "hidden"
        } fixed right-12 bottom-6 z-[100] cursor-pointer mix-blend-exclusion`}
      >
        <div className="group">
          <div className="block" onClick={scrollToTop}>
            <ScrollToTopButton
              colorFill="#FFFFFF"
              colorStroke="#000707"
              width="84px"
              height="83px"
            />
          </div>
        </div>
      </button>
    </>
  );
};

export default ScrollButton;
