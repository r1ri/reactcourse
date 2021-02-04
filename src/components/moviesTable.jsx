import Like from "./like";
import React, { Component } from "react";

export default class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    sortColumn.path = path;

    if (path === sortColumn.path)
      sortColumn.order = ( sortColumn.order === 'asc' ) ? 'desc' : 'asc';
    else 
      sortColumn = {path, order:'asc'};

    this.props.onSort(sortColumn);
  }

  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th style={{ cursor: "pointer" }} onClick={() => this.raiseSort("title")}>
              Title
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("genre.name")}
            >
              Genre
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("numberInStock")}
            >
              Stock
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("dailyRentalRate")}
            >
              Rate
            </th>
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
                <Like liked={m.liked} onLike={() => onLike(m)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(m._id)}
                  className="btn btn-secondary"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
