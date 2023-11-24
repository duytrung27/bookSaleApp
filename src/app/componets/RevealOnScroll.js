import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, animate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });
    if (ref.current) scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref?.current);
      }
    };
  }, []);

  const classes = `${isVisible ? `animate__animated ${animate}` : ""}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
