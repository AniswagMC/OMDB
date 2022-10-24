import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div>
      {
        movies.map(({ Title, Year, imdbID, Poster }) => {
          return (
            <li key={imdbID} style={{ listStyleType: 'none' }}>
              {/* <a href='https://www.youtube.com/' style={{ textDecoration: 'none', color: 'white' }}>
                Title: {Title}, Year released: {Year}
              </a> */}
              <img src={Poster} width = '150'/>
            </li>
          )
        })
      }
    </div>
  )
}

export default MovieList;