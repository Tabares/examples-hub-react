import React from 'react';
import FrameworkPreview from './FrameworkPreview';
import frameworks from '../data/frameworks';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {frameworks.map(frameworkData => <frameworkPreview key={frameworkData.id} {...frameworkData} />)}
        </div>
      </div>
    );
  }
}
