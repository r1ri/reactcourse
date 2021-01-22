import React, { Component } from "react";
import _ from "lodash";

export default class Pagination extends Component {
  render() {
    const { itemCount, pageLength } = this.props;
    const pageCount = itemCount / pageLength;
    const pages = _.range(1, pageCount + 1);
    return(
      <nav>
        <div className="container">
          <ul className="pagination">
            {pages.map((p) => (
              <li className="page-item">
                <a className="page-link">{p}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
