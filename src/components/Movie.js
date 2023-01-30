import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, rating, title, coverImg, genres, alt, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link> | Rating: {rating}
      </h2>
      <img alt={alt} src={coverImg} />
      <p>{summary}</p>
      <p>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </p>
      <br />
      <hr />
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
