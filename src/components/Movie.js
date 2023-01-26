import PropTypes from "prop-types";
function Movie({ key, rating, title, coverImg, genres, alt, summary }) {
  return (
    <div key={key}>
      <h2>
        {title} | Rating: {rating}
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
};

export default Movie;
