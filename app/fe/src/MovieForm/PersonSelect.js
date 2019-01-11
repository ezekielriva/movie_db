import React, { Component } from 'react';
import './PersonSelect.css';

class PersonSelect extends Component {
  handleOnOptionSelect(e, person) {
    e.preventDefault();
    this.props.onOptionSelect(this.props.name, {
      person_id: person.id
    })
  }

  render() {
    const {selectedPeople, people} = this.props;
    const options = people.map( (person, index) => {
      const selected = selectedPeople.findIndex( (opt) => { return opt.person_id === person.id } )

      return (
        <div
          key={index}
          className={ selected >= 0 ? 'PersonSelect-option PersonSelect-option-selected' : 'PersonSelect-option' }
          onClick={ (e) => this.handleOnOptionSelect(e, person) }
        >
          {person.first_name}
        </div>
      )
    });

    return (
      <div className="PersonSelect">
        { options }
      </div>
    );
  }
}

export default PersonSelect;
