import { useEffect, useState } from "react";
import axios from 'axios';

import "./App.css";
import ResultList from "./components/ResutlList";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dlofp4oo16.execute-api.ap-south-1.amazonaws.com/default/fetch-count'
        );
        // const jsonData = await response.json();
        debugger;
        setResult(response && response.data && response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {result.length ?  <ResultList list={result} /> : null}
      
    </div>
  );
}

export default App;
