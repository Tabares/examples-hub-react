import React from 'react';
import { Link } from 'react-router';
import frameworks from '../data/athletes';

export default class FrameworksMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {frameworks.map(menuFramework => {
          return <Link key={menuFramework.id} to={'/framework/${menuFramework.id}'} activeClassName="active">
            {menuFramework.name}
          </Link>;
        })}
      </nav>
    );
  }
}
