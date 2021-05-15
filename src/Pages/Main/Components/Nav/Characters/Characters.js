import React, { Component } from 'react';
import './Characters.scss';

class Characters extends Component {
  render() {
    const { img, name } = this.props;
    console.log(img, name);
    return (
      <div className="friendsContainer">
        <img src={img} alt="characters" />
        <div className="characterNames">{name}</div>
      </div>
    );
  }
}

export default Characters;