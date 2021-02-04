import React, { Component } from "react";

export default class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    sortColumn.path = path;

    if (path === sortColumn.path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else sortColumn = { path, order: "asc" };

    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          <th></th>
          {this.props.columns.map((c) => (
            <th onClick={this.raiseSort(c.path)}>{c.lable}</th>
          ))}
        </tr>
      </thead>
    );
  }
}
