import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import ResultList from "./components/result/ResutlList";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vi3vquu9ff.execute-api.ap-south-1.amazonaws.com/default/FetchLetterCountFromRDS"
        );
        setResult(response && response.data && response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar title={"Record from RDS and fetched using Lambda Service"} />
      {result.length ? <ResultList list={result} /> : null}
    </div>
  );
}

export default App;
