import React, { Component } from 'react';
import './MovieForm.css';
import PersonSelect from './PersonSelect';

const initialMovieAttrs = {
  movie_actors_attributes:    [],
  movie_directors_attributes: [],
  movie_producers_attributes: [],
  release_year: '',
  title: ''
}

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: initialMovieAttrs
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.movie);
    this.setState({ movie: initialMovieAttrs });
  }

  changeMovieAttr(e) {
    const attr = e.target.getAttribute('name');
    const value = e.target.value;

    this.setState({
      movie: {
        ...this.state.movie, [attr]: value
      }
    })
  }

  addToRelation(relation, value) {
    this.setState({
      movie: {
        ...this.state.movie,
        [relation]: [ ...this.state.movie[relation], value ]
      }
    })
  }

  removeFromRelationUsingIndex(relation, index) {
    this.setState({
      movie: {
        ...this.state.movie,
        [relation]: [
          ...this.state.movie[relation].slice(0, index - 1),
          ...this.state.movie[relation].slice(index + 1)
        ]
      }
    })
  }

  handleOnOptionClick(attr, selectedOption) {
    const index = this.state.movie[attr].findIndex( (relation) => {
      return relation.person_id === selectedOption.person_id
    });

    (index >= 0) ? this.removeFromRelationUsingIndex(attr, index) : this.addToRelation(attr, selectedOption)
  }

  render() {
    const {
      movie_actors_attributes,
      movie_directors_attributes,
      movie_producers_attributes,
      release_year,
      title
    } = this.state.movie;
    const { people } = this.props;

    return (
      <div className="MovieForm">
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <div className="input-field">
            <label>Title</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={ (e) => this.changeMovieAttr(e) }
            />
          </div>

          <div className="input-field">
            <label>Release Year</label>
            <input
              name="release_year"
              value={release_year}
              type="number"
              onChange={ (e) => this.changeMovieAttr(e) }
            />
          </div>

          <label>Actors/Actrisses</label>
          <PersonSelect
            onOptionSelect={ this.handleOnOptionClick.bind(this) }
            name="movie_actors_attributes"
            people={people}
            selectedPeople={ movie_actors_attributes }
          />
          <label>Directors</label>
          <PersonSelect
            onOptionSelect={ this.handleOnOptionClick.bind(this) }
            name="movie_directors_attributes"
            people={people}
            selectedPeople={ movie_directors_attributes }
          />
          <label>Producers</label>
          <PersonSelect
            onOptionSelect={ this.handleOnOptionClick.bind(this) }
            name="movie_producers_attributes"
            people={people}
            selectedPeople={ movie_producers_attributes }
          />
          <br></br>
          <input type='submit' value="Create" className="waves-effect waves-light btn"/>
        </form>
      </div>
    );
  }
}

export default MovieForm;
