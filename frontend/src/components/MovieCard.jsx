function MovieCard({ movie }) {
  function onFavoriteClick(){
    alert('favourite')
  }
  return (
    <div className="movie_card">
      <div>
      <img src={movie.url} alt={movie.title} />
      <div className="movie_overlay">
        <button className="fav_button" onClick={onFavoriteClick}>🤍</button>
        <h2>it is working</h2>
      </div>
      </div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p>{movie.relese_date}</p>
      </div>
    </div>
  
  );
}

export default MovieCard;
