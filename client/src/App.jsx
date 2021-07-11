import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await fetch("http://localhost:3001/api");
    const data = await response.json();
    setData(data);
  };
  
  useEffect(() => {
    getData();
  });

	return (
		<div className="App">
      <h1>{data.message}</h1>
		</div>
	);
}

export default App;
