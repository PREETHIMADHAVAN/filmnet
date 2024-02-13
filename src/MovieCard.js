
const MovieCard = ({movie}) =>{
    return (
        <div className="movie" key={movie.imdbID}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster!='N/A' ? movie.Poster: 'https://via.placeholder.com/400'} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <span>{movie.Title}</span>
            </div>
        </div>
    );
}

export default MovieCard;