import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    const { movie } = this.props;

    if(movie == null) return <div className="Movie">No movie was selected</div>

    const actorList = movie.casting.map( actor => `${actor.first_name} ${actor.last_name}` ).join(', ');
    const producerList = movie.producers.map( producer => `${producer.first_name} ${producer.last_name}` ).join(', ');
    const directorList = movie.directors.map( director => `${director.first_name} ${director.last_name}` ).join(', ');

    return (
      <div className="Movie">
        <h5>{ movie.title } - { movie.release_year }</h5>
        Actors: { actorList }       <br />
        Producers: { producerList } <br />
        Directors: { directorList } <br />
      </div>
    );
  }
}

export default Movie;
