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
      <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
        <input placeholder='Search Movies' onChange={e => setSearch(e.target.value)} />
        <Button title="Acquire Movie!" query={search} queryCallBack={searchResult} />
      </div>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <h1>
          {data['Title']}
        </h1>
        <h5>
          Released in {data['Year']}
        </h5>
        <img src={data['Poster']} width='600'/>
        <button>
          Useless Button
        </button>
      </div>
    </div>
  );
}

export default App;