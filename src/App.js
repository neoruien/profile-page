import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends Component {

  render() {
    return (
      <div className='rowC' style={{
          backgroundColor: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Profile />
      </div>
    )
  }
}

export default App;
