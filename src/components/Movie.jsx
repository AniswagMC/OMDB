const Movie = ({ object }) => {
  const { Title, Poster, Year } = object

  return (
    <div className='movie-detail'>
      <div className="info-display">
        <div className="box">
          <text className="title">
            {Title}
          </text>
        </div>
        <div className="box" style={{ backgroundColor: '#ff4440', marginTop: '1em', width: '30vw' }}>
          <text className="title" id='info-title'>
            Released in {Year}
          </text>
        </div>
        <button style={{ position: 'relative', margin: '1.5em' }} className='link'>
          Useless Button
        </button>
      </div>
      <div className="info-display" style={{ alignItems: 'center' }}>
        <img src={Poster} width='275' />
      </div>
    </div>
  )
}

export default Movie;