"use client";

import { useEffect, useRef } from "react";
import head from "../../../public/robo/robo-head.webp";
import body from "../../../public/robo/robo-body.webp";
import Image from "next/image";

export default function Robot() {
  const headRef = useRef(null);
  const robotContainerRef = useRef(null);
  const roboRef = useRef(null);

  useEffect(() => {
    const headElement = headRef.current;
    const robotContainer = robotContainerRef.current;
    const roboElement = roboRef.current;

    if (!headElement || !robotContainer || !roboElement) return;

    // Continuous floating animation for the entire robot
    let floatTime = 0;
    const floatAnimation = () => {
      floatTime += 0.02;
      
      // Create smooth floating motion
      const floatY = Math.sin(floatTime) * 10; // Vertical movement
      const floatX = Math.cos(floatTime * 0.5) * 5; // Slight horizontal sway
      const rotate = Math.sin(floatTime * 0.8) * 2; // Slight rotation
      
      roboElement.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${rotate}deg)`;
      
      requestAnimationFrame(floatAnimation);
    };
    
    const animationId = requestAnimationFrame(floatAnimation);

    // Mouse tracking for head
    const handleMouseMove = (e) => {
      const robotRect = robotContainer.getBoundingClientRect();
      const robotCenterX = robotRect.left + robotRect.width / 2;
      const robotCenterY = robotRect.top + robotRect.height / 2;

      const angle = Math.atan2(
        e.clientY - robotCenterY,
        e.clientX - robotCenterX
      );

      const maxDistance = 15; // Adjust this for more/less movement
      const distance = Math.min(
        maxDistance,
        Math.hypot(e.clientX - robotCenterX, e.clientY - robotCenterY) / 40
      );

      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      headElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="robot-main-file" ref={robotContainerRef}>
      <div className="robo" ref={roboRef}>
        <div className="inner">
          <div ref={headRef} style={{ transition: "transform 0.1s ease-out" }}>
            <Image
              src={head}
              alt="robot"
              width={100}
              height={100}
              className="head"
            />
          </div>
          <Image
            src={body}
            alt="robot"
            width={100}
            height={100}
            className="body"
          />
        </div>
      </div>
    </div>
  );
}