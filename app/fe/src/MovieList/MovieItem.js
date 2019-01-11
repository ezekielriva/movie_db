import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
  render() {
    const { movie, onClick, onDelete } = this.props;

    return (
      <tr className="MovieItem" onClick={ () => onClick(movie) }>
        <td>{ movie.title } - { movie.release_year }</td>
        <td>
          <span className="MovieItem-delete" onClick={ () => onDelete(movie) }>
            <i className="material-icons">delete</i>
          </span>
          </td>
      </tr>
    );
  }
}

export default MovieItem;
