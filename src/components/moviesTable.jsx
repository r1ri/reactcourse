import Like from "./common/like";
import Table from "./common/table.jsx";
import React, { Component } from "react";
export default class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    sortColumn.path = path;

    if (path === sortColumn.path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else sortColumn = { path, order: "asc" };

    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onLike, onDelete, sortColumn, onSort } = this.props;
    const columns = [
      { path: "title", lable: "Title" },
      { path: "genre.name", lable: "Genre" },
      { path: "numberInStock", lable: "Stock" },
      { path: "dailyRentalRate", lable: "Rate" },
      {
        key: "like",
        content: (m) => (
          <Like liked={m.liked} onLike={() => this.props.onLike(m)} />
        ),
      },
      {
        key: "delete",
        content: (m) => (
          <button
            onClick={() => this.props.onDelete(m._id)}
            className="btn btn-secondary"
          >
            delete
          </button>
        ),
      },
     ];

    return (
      <Table
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={columns}
      />
    );
  }
}
