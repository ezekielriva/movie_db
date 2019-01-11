import React, { Component } from 'react';

class PersonList extends Component {
  render() {
    const { people } = this.props;
    const items = people.map( (person, index) => {
      const alias = person.alias ? `(${person.alias})` : ""
      return <div key={index}>{`${person.first_name} ${person.last_name} ${alias}`}</div>
    })

    return (
      <div className="PersonList">
        { items }
      </div>
    );
  }
}

export default PersonList;
