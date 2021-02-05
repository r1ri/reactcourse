import Like from "./like";
import TableBody from './common/tableBody'
import React, { Component } from "react";
import TableHeader from "./common/tableHeader";

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
      { key: "like" },
      { key: "delete" },
    ];

    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          columns={columns}
          sortColumn={sortColumn}
        />
        <TableBody data={movies} columns={columns} />
        {/* <tbody> */}
        {/*   {movies.map((m) => ( */}
        {/*     <tr key={m._id}> */}
        {/*       <td>{m.title}</td> */}
        {/*       <td>{m.genre.name}</td> */}
        {/*       <td>{m.numberInStock}</td> */}
        {/*       <td>{m.dailyRentalRate}</td> */}
        {/*       <td> */}
        {/*         <Like liked={m.liked} onLike={() => onLike(m)} /> */}
        {/*       </td> */}
        {/*       <td> */}
        {/*         <button */}
        {/*           onClick={() => onDelete(m._id)} */}
        {/*           className="btn btn-secondary" */}
        {/*         > */}
        {/*           delete */}
        {/*         </button> */}
        {/*       </td> */}
        {/*     </tr> */}
        {/*   ))} */}
        {/* </tbody> */}
      </table>
    );
  }
}
