import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import FrameworksMenu from './FrameworksMenu';
import Example from './Example';
import Framework from './Framework';
import frameworks from '../data/frameworks';

export default class FrameworkPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const framework = frameworks.filter((framework) => framework.id === id)[0];
    if (!framework) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: 'url(/img/${framework.cover})' };
    return (
      <div className="athlete-full">
        <AthletesMenu/>
        <div className="athlete">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={'/img/${framework.image}'}/>
            <h2 className="name">{framework.name}</h2>
          </div>
          <section className="description">
            Framework from <strong><Flag code={athlete.country} showName="true"/></strong>,
            born in {framework.birth} (Find out more on <a href={framework.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="medals">
            <p>Example of <strong>{framework.medals.length}</strong> medals:</p>
            <ul>{
              framework.medals.map((medal, i) => <Framework key={i} {...framework}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
