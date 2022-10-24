import { useEffect, useState } from 'react';
import Movie from './Movie';
import { Box, Modal } from '@mui/material';

const MovieList = ({ movies, query }) => {
  const uri = process.env.REACT_APP_FETCH_URI

  const searchQuery = query.toLowerCase().split(' ').join('+')

  const [movieList, setMovieList] = useState(movies['Search'])
  const [pageNum, setPageNum] = useState(2)
  const [open, setOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const setMovies = (data) => {
    setMovieList(movieList.concat(data['Search']))
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setMovieList(movies['Search'])
    setPageNum(2)
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
            <img key={imdbID} src={Poster} width='150' style={{ padding: '1.5em', cursor: 'pointer' }} 
              onClick={() => {
                setOpen(toggleOpen)
                setModalData({ Title, Year, key: imdbID, Poster })
              }} />
          ))
        }
      </div>

      <Modal
        open={open}
        onClose={toggleOpen}
      >
        <Box sx={{
          borderStyle: 'none'
        }}>
          <Movie object={modalData} />
        </Box>
      </Modal>

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