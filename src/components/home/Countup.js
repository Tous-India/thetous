// In a client component (e.g., your-component.js)
// Add 'use client' at the top if using the App Router
"use client";

import { useState, useEffect, useRef } from "react";
const Countup = () => {
  return (
    <div className="count-up-main-componenet">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-6">
            <div className="inner-div">
              <Counter end={500} duration={2500} suffix="K" />
              <p className=" ">Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-6">
            <div className="inner-div">
              <Counter end={500} duration={2500} suffix="K" />
              <p className=" ">Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-6">
            <div className="inner-div">
              <Counter end={500} duration={2500} suffix="K" />
              <p className=" ">Projects Completed</p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-6">
            <div className="inner-div">
              <Counter end={500} duration={2500} suffix="K" />
              <p className="">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countup;

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
