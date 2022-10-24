import { useEffect, useState } from 'react';
import Movie from './Movie';
import { Box, Modal } from '@mui/material';

const MovieList = ({ movies, query, page = 2 }) => {
  const uri = process.env.REACT_APP_FETCH_URI

  const searchQuery = query.toLowerCase().split(' ').join('+')

  const [movieList, setMovieList] = useState(movies['Search'])
  const [pageNum, setPageNum] = useState(page)

  console.log(movies, movieList)

  const setMovies = (data) => {
    setMovieList(movieList.concat(data['Search']))
  }

  useEffect(() => {
    setMovieList(movies['Search'])
  }, [movies])

  const loadMore = async () => {
    setPageNum(pageNum + 1)
    await fetch(uri + "s=" + searchQuery + "&page=" + pageNum)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK")
        }
        return response.json()
      })
      .then(res => setMovies(res))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'inline' }}>
        {
          movieList.map(({ Title, Year, imdbID, Poster }) => (
            <li key={imdbID} style={{ listStyleType: 'none', display: 'inline', padding: '1.5em' }}>
              <img src={Poster} width='150' />
            </li>
          ))
        }
      </div>

      <button onClick={loadMore}
        className='link'
        style={{ width: '15vw', alignSelf: 'center', padding: '1em', margin: '1em' }}
      >
        Load More
      </button>

    </div>
  )
}

export default MovieList;