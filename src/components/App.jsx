import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  //  const [backgroundColorButton, setBackgroundColorButton] = useState("white");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
    console.log(isMousedOver);
  }

  function handleMouseOver() {
    //setBackgroundColorButton("black");
    setMouseOver(true);
    console.log(isMousedOver);
  }

  function handleMouseOut() {
    //setBackgroundColorButton("white");
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        //style={{ backgroundColor: backgroundColorButton }}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
