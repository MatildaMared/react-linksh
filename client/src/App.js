import React, {useState, useEffect} from 'react';
import "./App.scss";

const App = () => {

  const [data, setData] = useState({});

  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setData(data);
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, []);

	return (
		<div className="App">
      {data.message}
		</div>
	);
}

export default App;
