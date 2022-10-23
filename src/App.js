import React, { useState } from 'react';
import './App.css';

import Button from './Button';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  // console.log(data)
  
  const searchResult = (childData) => {
    setData(childData)
  }

  return (
    <div className="App">
      <input placeholder='Search Movies' onChange={e => setSearch(e.target.value)} />
      <Button title = "Search Movie Name" query = {search} queryCallBack={searchResult} />
      <img src={data['Poster']} />
    </div>
  );
}

export default App;