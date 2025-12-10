"use client";
import { useEffect } from "react";

const VanillaJsExample = () => {
  useEffect(() => {
    // Vanilla JavaScript inside useEffect to manipulate DOM
    const element = document.getElementById("vanilla-button");

    element.addEventListener("click", () => {
      alert("Button clicked with vanilla JS!");
    });


    

    // Cleanup the event listener when the component unmounts
    return () => {
      element.removeEventListener("click", () => {
        alert("Button clicked with vanilla JS!");
      });
    };
  }, []);

  return (
    <div className="my-5 text-center border">
      <button id="vanilla-button">Click me (Vanilla JS)</button>
    </div>
  );
};

export default VanillaJsExample;
