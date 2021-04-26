import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  // funkcje asynchroniczne - handleChangeInput, handleButtonClick
  const handleChangeInput = e => setValue(e.target.value);

  const handleButtonClick = () => setValue("");

  const handleButtonToggle = () => setToggle(prevState => !prevState);

  const buttonToggleTxt = toggle ? "Ukryj" : "Pokaż";

  const changeElementTxt = toggle ? <h1>{value}</h1> : null;

  return (
    <React.Fragment>
      <input
        value={value}
        onChange={handleChangeInput}
        placeholder="Wpisz..."
        type="text"
      />
      <button onClick={handleButtonClick}>Reset</button>
      <button onClick={handleButtonToggle}>{buttonToggleTxt}</button>
      {changeElementTxt}
    </React.Fragment>
  );
};

export default App;
