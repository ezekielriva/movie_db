import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
  render() {
    const { movies, onItemClick, onDeleteClick } = this.props;
    const items = movies.map( (movie, index) => {
      return <MovieItem key={index} movie={movie} onClick={onItemClick} onDelete={onDeleteClick}/>;
    })

    return (
      <table className="MovieList">
        <tbody>{ items }</tbody>
      </table>
    );
  }
}

export default MovieList;
