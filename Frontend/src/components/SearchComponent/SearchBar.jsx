import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

import BASE_URL from "../../config";


function SearchBar() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const [results,setResults] = useState([])

  const navigate = useNavigate()


  useEffect(() => {
    fetch(`${BASE_URL}/get-data`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newData =
      data &&
      data.filter((user) =>
        user.stockName.toLowerCase().includes(input.toLowerCase())
      );
    setResults(newData);
  }, [input]);

  const handleChange = (e) => setInput(e.target.value);

  const handleClick = (result) => {
    navigate("/Investor", { state: { investor: result } });
  }

  return (
    <div>
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
      />
    </div>
    <div className="results-list">
      {results &&
        results.map((result, id) => (
      <div key={id} className="search-result" onClick={()=>handleClick(result)}>
        {result.stockName}
      </div>
        ))}
    </div>
    </div>
  );
}

export default SearchBar