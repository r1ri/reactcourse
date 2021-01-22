import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Like from "./like.jsx";

export default class Table extends Component {
  state = {
    movies: getMovies(),
    pageLength: 4
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
  
  handlePageChange = () => {

  }

  render() {
    return this.state.movies.length === 0 ? (
      <p>No movies</p>
    ) : (
      <React.Fragment>
        <p>There are {this.state.movies.length} movies in the database</p>
        <div className="container">
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
              {this.state.movies.map((m) => (
                <tr key={m._id}>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <Like liked={m.liked} onLike={() => this.handleLike(m)} />
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
        </div>
        <Pagination
          itemCount={this.state.movies.length}
          pageLength={this.state.pageLength}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
