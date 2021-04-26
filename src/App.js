import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [value, setValue] = useState("");
  // funkcje asynchroniczne - handleChangeInput, handleButtonClick
  const handleChangeInput = e => setValue(e.target.value);

  const handleButtonClick = () => setValue("");
  return (
    <React.Fragment>
      <input
        value={value}
        onChange={handleChangeInput}
        placeholder="Wpisz..."
        type="text"
      />
      <button onClick={handleButtonClick}>Reset</button>
      <h1>{value}</h1>
    </React.Fragment>
  );
};

export default App;
