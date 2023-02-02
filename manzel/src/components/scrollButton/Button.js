import React from "react";
import "./scrollButton.css";

const Button = () => {

  let vision = document.getElementById('vision');
  let topPos = vision.offsetTop;
  return (
    <div className="scroll">
      <section id="section06" className="demo">
        <div
          onClick={() => {
            window.scrollTo(0, topPos);
          }}
        >
          <span></span>
        </div>
      </section>
    </div>
  );
};

export default Button;
