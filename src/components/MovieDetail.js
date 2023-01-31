import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ title, src, description, genres, url, rating }) {
  return (
    <div className={styles.MovieDetail}>
      <main className={styles.MovieDetailMain}>
        <div className={styles.MovieDetailMain__title}>
          <img src={src} alt={title} />
          <div>
            <h2>{title}</h2>
            <p>
              Genres:{" "}
              {genres.map((genre, index) => (
                <span key={index}>{genre}, </span>
              ))}
            </p>
            <h4>description</h4>{" "}
            <p>
              {description.length > 600
                ? `${description.slice(0, 600)}...`
                : description}
            </p>
            <h4>Movie Rating: {rating}</h4>
          </div>
        </div>
        <div className={styles.MovieDetailMain__text}></div>
        <br />
        <hr />
        <a href={url} target="_blank">
          Go to the site&rarr;
        </a>
        <p />
        <Link to="/home">Go to the Movie List &rarr;</Link>
      </main>
    </div>
  );
}
MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

export default MovieDetail;
