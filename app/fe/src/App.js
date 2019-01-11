import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';
import Movie from './Movie';
import MovieForm from './MovieForm';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import NavBar from './NavBar';

const API_HOST = process.env.NODE_ENV === 'production' ? "https://serene-dawn-55049.herokuapp.com" : "http://localhost:3000"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: null,
      auth: null,
      people: []
    }
  }

  refreshAuthToken() {
    fetch(`${API_HOST}/api/v1/auth_tokens`, { method: 'POST' })
      .then( (response) => response.json() )
      .then( (json) => this.setState({ auth: json  }) )
  }

  componentDidMount() {
    this.refreshAuthToken();

    fetch(`${API_HOST}/api/v1/movies`)
      .then( (response) => response.json() )
      .then( (json) => this.setState({movies: json}) )

    fetch(`${API_HOST}/api/v1/people`)
      .then( (response) => response.json() )
      .then( (json) => this.setState({people: json}) )
  }

  selectMovie(movie) {
    this.setState({ movie: movie })
  }

  createMovie(movie) {
    fetch(`${API_HOST}/api/v1/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.auth.token}`
      },
      body: JSON.stringify({ movie })
    })
      .then( (response) => response.json() )
      .then( (json) => this.setState({
        movies: [...this.state.movies, json]
      }))
  }

  createPerson(person) {
    fetch(`${API_HOST}/api/v1/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.auth.token}`
      },
      body: JSON.stringify({ person })
    })
      .then( (response) => response.json() )
      .then( (json) => this.setState({
        people: [...this.state.people, json]
      }))
  }

  deleteMovie(movie) {
    fetch(`${API_HOST}/api/v1/movies/${movie.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.auth.token}`
      }
    })
      .then( (response) => this.setState({
        movies: this.state.movies.filter( (m) => m.id !== movie.id ),
        movie: null
      }))
  }

  render() {
    const { movies, movie, people } = this.state;

    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col s6">
              <div className="row">
                <div className="col s12">
                  <h4>Create a new Movie</h4>
                  <MovieForm
                    onSubmit={ (movieAttrs) => this.createMovie(movieAttrs) }
                    people={people}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <h4>Create a new Person</h4>
                  <PersonForm onSubmit={ (personAttrs) => this.createPerson(personAttrs) } />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <Movie movie={movie} />
                </div>
              </div>
            </div>

            <div className="col s6">
              <div className="row">
                <div className="col s12">
                  <h4>Movies</h4>
                  <MovieList
                    movies={movies}
                    onItemClick={ (movie) => this.selectMovie(movie) }
                    onDeleteClick={ (movie) => this.deleteMovie(movie) }
                    />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <h4>People</h4>
                  <PersonList
                    people={people}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
