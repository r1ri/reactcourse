import React, { Component } from 'react'
import { getGenres } from '../../services/fakeGenreService.js'

export default class ListFilter extends Component {
  getClassNames = (genre) => {
    return "list-group-item " + (genre._id === this.props.activeGenreFilter ? "active" : "" );
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">Genres</li>
        {getGenres().map(g => ( 
          <li onClick={() => this.props.onClick(g)} className={this.getClassNames(g)}>{g.name}</li>
        ))}
      </ul>
    );
  }
}
