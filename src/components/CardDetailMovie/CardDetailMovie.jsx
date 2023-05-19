import './CardDetailMovie.css';

const CardDetailMovie = ({ details }) => {
  const { original_title, poster_path, genres, release_date, overview } =
    details;

  return (
    <div className="container">
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div>
        <h1 className="card-title">
          {original_title}
          <span>({release_date && release_date.slice(0, 4)})</span>
        </h1>
        <p className="card-user">User Score: %</p>
        <h2 className="card-overview-title">Overview</h2>
        <p className="card-overview">{overview}</p>
        <h2 className="card-genres">Genres</h2>
        <ul className="genre-list">
          {genres &&
            genres.map(genre => {
              return (
                <li className="genre-item" key={genre.id}>
                  {genre.name},
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CardDetailMovie;
