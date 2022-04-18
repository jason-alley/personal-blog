const MovieCard = ({ movie }) => {
    return (

        <div className="movie-card">
            <img className="movie-img" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            <div className="movie-card__container mb-4">
                <p className="is-size-5 mb-2">{movie.Title}</p>
                <span className="tag mr-2">
                    {movie.Year}
                </span>
                <span className="tag is-info">
                   {movie.Type}
                </span>
            </div>
        </div>
    )
}
 
export default MovieCard;
