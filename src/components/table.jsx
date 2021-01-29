import MoviesTable from "./MoviesTable";
import ListFilter from "./common/listFilter.jsx";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate.js";

export default class Table extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    pageLength: 4,
    selectedGenre: 0,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: 0 }, ...getGenres()];
    this.setState({ movie: getMovies, genres });
  }

  constructor() {
    super();
    this.state.movies.map((m) => (m.liked = false));
  }

  handleDelete = (id) => {
    this.setState(
      this.state.movies.splice(
        this.state.movies.findIndex((e) => e._id === id),
        1
      )
    );
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    const currentPage = page;
    this.setState({ currentPage });
  };

  handleGenreSelect = (genre) => {
    genre = genre === this.state.selectedGenre ? 0 : genre;
    this.setState({ selectedGenre: genre, currentPage: 0 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageLength,
      currentPage,
      selectedGenre,
      genres,
      movies: allMovies,
    } = this.state;

    if (count === 0) return <p>No movies</p>;

    const filtered = selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;

    const movies = paginate(filtered, currentPage, pageLength);

    return (
      <React.Fragment>
        <p>There are {filtered.length} movies in the database</p>
        <div className="container">
          <div className="row">

            <div className="col-2">
              <ListFilter
                items={genres}
                selectedItem={selectedGenre}
                onItemSelect={this.handleGenreSelect}
              />
            </div>

            <div className="col">
              <MoviesTable
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                movies={movies}
              />

              <Pagination
                itemCount={filtered.length}
                pageLength={pageLength}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
