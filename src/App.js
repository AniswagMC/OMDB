import React, { useEffect, useState } from 'react';
import './App.css';

import Button from './components/Button';
import MovieList from './components/MovieList';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const searchResult = (childData) => {
    setData(childData)
  }

  useEffect(() => {
    setData(data)
  }, [data])

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', padding: '1em' }}>
        <input placeholder='Search Movies' className='input-bar' onChange={e => setQuery(e.target.value)} />
        <Button title="Search" query={query} queryCallBack={searchResult} />
      </div>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        {data['Response'] == "True"
          ? <MovieList movies={data} query={query} />
          : <h1 style={{ color: 'white' }}> {data['Error']} </h1>
        }
      </div>
    </div>
  );
}

export default App;