"use client";
import React, { useEffect } from "react";

const Script = () => {
  useEffect(() => {
    (function h() {
      const cursor = document.querySelector(".flair");
      const allAnchor = document.querySelectorAll("a");
      allAnchor.forEach((a) => {
        a.addEventListener("mouseenter", (e) => {
          e.stopPropagation();
          cursor.style.width = "7.5px";
          cursor.style.height = "7.5px";
        });
        a.addEventListener("mouseleave", (e) => {
          e.stopPropagation();
          cursor.style.width = "15px";
          cursor.style.height = "15px";
        });
      });
    })();
  }, []);

  return <div></div>;
};

export default Script;
