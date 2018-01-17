import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FlashMassagesList from './flash/FlashMassagesList';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavigationBar />
        <FlashMassagesList />
        { this.props.children }
      </div>
    );
  }
}
