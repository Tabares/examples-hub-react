import React from 'react';

const data = {
  'JS': {
    'name': 'JS',
    'icon': 'flag-cu.png',
  },
  'React': {
    'name': 'React',
    'icon': 'flag-fr.png',
  },
  'Angular': {
    'name': 'Angular',
    'icon': 'flag-jp.png',
  },
  'Jasmine': {
    'name': 'Jasmine',
    'icon': 'flag-nl.png',
  },
  'Backbone': {
    'name': 'Backbone',
    'icon': 'flag-uz.png',
  }
};

export default class Framework extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={'/img/${icon}'}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}
