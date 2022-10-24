const Button = ({ title, query, queryCallBack }) => {
  const uri = process.env.REACT_APP_FETCH_URI
  const searchQuery = query.toLowerCase().split(' ').join('+')
  // console.log(query)

  const onSearch = async () => {
    console.log(uri + "s=" + searchQuery)
    await fetch(uri + "s=" + searchQuery)
    .then(response => {
      if (!response.ok) {
        console.log(response)
      }
      return response.json()
    })
    .then(data => queryCallBack(data))
  }

  return (
    <button onClick={onSearch} className='link'>
      {title}
    </button>
  )
}

export default Button;