import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <FontAwesomeIcon icon={faSortUp} />;

    return <FontAwesomeIcon icon={faSortDown} />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => (
            <th
              className="clickable"
              key={c.path || c.key}
              onClick={() => this.raiseSort(c.path)}
            >
              {c.lable}
              {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
