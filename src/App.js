import React, { useState } from 'react';
import './App.css';

import Button from './components/Button';
import MovieList from './components/MovieList';

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  // console.log(data)

  const searchResult = (childData) => {
    setData(childData)
  }

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', padding: '1em' }}>
        <input placeholder='Search Movies' className='input-bar' onChange={e => setSearch(e.target.value)} />
        <Button title="Search" query={search} queryCallBack={searchResult} />
      </div>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        {data['Response'] == "True"
          ? <MovieList movies = {data['Search']}/>
          : <h1 style={{ color: 'white' }}> {data['Error']} </h1>
        }
      </div>
    </div>
  );
}

export default App;