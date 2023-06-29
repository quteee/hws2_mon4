import React, { useState } from "react";
import './index.css'

function App() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("blue");

  const handleClick1 = () => {
    if (color1 === "red") {
      setColor1("blue");
    } else {
      setColor1("red");
    }
  };

  const handleClick2 = () => {
    if (color2 === "blue") {
      setColor2("red");
    } else {
      setColor2("blue");
    }
  };

  return (
    <div>
      <div className='One' onClick={handleClick1} style={{backgroundColor: color1}}>
      </div>
      <div className='Two' onClick={handleClick2} style={{backgroundColor: color2}}>
      </div>
    </div>
  );
}

export default App;


