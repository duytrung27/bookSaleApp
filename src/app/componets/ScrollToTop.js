"use client";

import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 500) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div className="container relative">
      <div
        className="flex flex-col cursor-pointer hover:opacity-80 z-50 justify-center items-center fixed bottom-10 right-10 bg-white rounded-full shadow-lg w-12 h-12"
        onClick={scrollToTop}
      >
        <IoIosArrowUp size={25} />
      </div>
    </div>
  );
};

export default ScrollToTop;
