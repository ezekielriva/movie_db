import React, { Component } from 'react';

const initialPersonAttrs = {
  last_name: '',
  first_name: '',
  alias: ''
}

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: initialPersonAttrs
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.person);
    this.setState({ person: initialPersonAttrs });
  }

  changePersonAttr(e) {
    const attr = e.target.getAttribute('name');
    const value = e.target.value;

    this.setState({
      person: {
        ...this.state.person, [attr]: value
      }
    })
  }

  render() {
    const {
      first_name,
      last_name,
      alias
    } = this.state.person

    return (
      <div className="PersonForm">
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <div className="input-field">
            <label>First Name</label>
            <input
              name="first_name"
              value={first_name}
              onChange={ (e) => this.changePersonAttr(e) }
            />
          </div>

          <div className="input-field">
            <label>Last Name</label>
            <input
              name="last_name"
              value={last_name}
              onChange={ (e) => this.changePersonAttr(e) }
            />
          </div>

          <div className="input-field">
            <label>Alias</label>
            <input
              name="alias"
              value={alias}
              onChange={ (e) => this.changePersonAttr(e) }
            />
          </div>
          <br></br>
          <input type='submit' value="Create Person" className="waves-effect waves-light btn"/>
        </form>
      </div>
    );
  }
}

export default PersonForm;
