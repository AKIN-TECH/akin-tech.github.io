import React from "react";
import "./scrollButton.css";

const Button = () => {
  
  // eslint-disable-next-line no-restricted-globals
   let height = screen.height
  return (
    <div className="scroll">
      <section id="section06" className="demo">
        <div
          onClick={() => {
            window.scrollTo(0, height);
          }}
        >
          <span></span>
        </div>
      </section>
    </div>
  );
};

export default Button;
