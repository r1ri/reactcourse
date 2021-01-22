import React, { Component } from "react";
import _ from "lodash";

export default class Pagination extends Component {
  render() {
    const { itemCount, pageLength, onPageChange, currentPage } = this.props;

    const pageCount = Math.ceil( itemCount / pageLength );
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return(
      <nav>
        <div className="container">
          <ul className="pagination">
            {pages.map((p) => (
              <li key={p} className={p===currentPage ? "page-item active" : "page-item"}>
                <a onClick={() => onPageChange(p)} className="page-link">{p}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
