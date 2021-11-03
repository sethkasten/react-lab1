import { useState } from "react";
import "./AdDesigner.css";
import Ad from "./Ad";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkMode, setDarkMode] = useState(false);
  const [adFontSize, setAdFontSize] = useState(24);

  const decreaseSize = () => {
    setAdFontSize((prev) => prev - 1);
  };
  const increaseSize = () => {
    setAdFontSize((prev) => prev + 1);
  };

  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} fontSize={adFontSize} darkTheme={darkMode} />

      <h3>What to Support</h3>
      <div className="button-container">
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div className="button-container">
        <button onClick={() => setDarkMode(false)} disabled={!darkMode}>
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div className="button-container">
        <button onClick={decreaseSize}>Down</button>
        <p>{adFontSize}</p>
        <button onClick={increaseSize}>Up</button>
      </div>
    </div>
  );
};

export default AdDesigner;
