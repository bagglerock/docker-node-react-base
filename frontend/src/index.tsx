import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = async () => {
    const response = await fetch("http://localhost:3001/catfact");
    const data = await response.json();
    setCatFact(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <button onClick={fetchCatFact}>Get Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
