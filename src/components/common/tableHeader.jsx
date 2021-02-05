import React, { Component } from "react";
export default class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
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
          {this.props.columns.map((c) => (
            <th key={c.path || c.key} onClick={() => this.raiseSort(c.path)}>
              {c.lable}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
