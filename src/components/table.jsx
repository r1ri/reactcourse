import ListFilter from "./common/listFilter.jsx";
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate.js";
import Like from "./like.jsx";

export default class Table extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageLength: 4,
    activeGenreFilter: 0,
  };

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

  handleGenreFilter = (genre) => {
    const activeGenreFilter = genre._id === this.state.activeGenreFilter ? 0 : genre._id;
    this.setState({ activeGenreFilter });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageLength, currentPage } = this.state;
    if (count === 0) return <p>No movies</p>;
    const movies = paginate(this.state.movies, currentPage, pageLength);
    return (
      <React.Fragment>
        <p>There are {this.state.movies.length} movies in the database</p>
        <div className="container">
          <div className="row">
            <ListFilter
              activeGenreFilter={this.state.activeGenreFilter}
              onClick={this.handleGenreFilter}
            />
            <div className="col">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {movies.map((m) => (
                    <tr key={m._id}>
                      <td>{m.title}</td>
                      <td>{m.genre.name}</td>
                      <td>{m.numberInStock}</td>
                      <td>{m.dailyRentalRate}</td>
                      <td>
                        <Like
                          liked={m.liked}
                          onLike={() => this.handleLike(m)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDelete(m._id)}
                          className="btn btn-secondary"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                itemCount={this.state.movies.length}
                pageLength={this.state.pageLength}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
