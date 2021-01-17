import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

export default class Table extends Component {
  state = {
    columnTitles: ['Title', 'Genre', 'Stock', 'Rate'],
    movies: []
  }

  constructor() {
    super();
    this.state.movies = getMovies();
  }
  
  handleDelete = id => {
    this.setState(this.state.movies.splice(this.state.movies.findIndex( e => e._id === id ), 1));
  }
  
  render() {
    return (this.state.movies.length===0) ? (<p>No movies</p>) : (
      <React.Fragment>
      <p>There are {this.state.movies.length} movies in the database</p>
       <table className="table">
         <thead>
         <tr>{this.state.columnTitles.map(m => <th key={m} scope="col">{m}</th>)}</tr>
         </thead>

         <tbody>
          { this.state.movies.map( m => 
            <tr key={m._id}>
              {Object.values(m).splice(1, 4).map(v => <td>{ (typeof v === "object") ? v.name: v}</td>)}
              <button  onClick={() => this.handleDelete(m._id)}className="btn btn-secondary">delete</button>
            </tr>
          )}
         </tbody>
       </table>
      </React.Fragment>
    );
  }
}
