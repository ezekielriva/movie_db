import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
  render() {
    const { movie, onClick, onDelete } = this.props;

    return (
      <div className="MovieItem" onClick={ () => onClick(movie) }>
        { movie.title } - { movie.release_year }
        <div className="MovieItem-delete" onClick={ () => onDelete(movie) }>
          <i className="material-icons">delete</i>
        </div>
      </div>
    );
  }
}

export default MovieItem;
