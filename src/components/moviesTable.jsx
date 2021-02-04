import Like from './like';

const MoviesTable = (props) => {

  const { movies, onLike, onDelete, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{cursor: 'pointer'}} onClick={() => onSort( 'title' )}>Title</th>
          <th style={{cursor: 'pointer'}} onClick={() => onSort( 'genre.name' )}>Genre</th>
          <th style={{cursor: 'pointer'}} onClick={() => onSort( 'numberInStock' )}>Stock</th>
          <th style={{cursor: 'pointer'}} onClick={() => onSort( 'dailyRentalRate' )}>Rate</th>
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
};

export default MoviesTable;
