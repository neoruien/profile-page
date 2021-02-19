import React, { Component } from 'react';
import './App.css';
import ProfileSection from './components/ProfileSection';
import PostSection from './components/PostSection';

class App extends Component {

  render() {
    return (
      <div className='rowC' style={{
          backgroundColor: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ProfileSection />
          <PostSection />
      </div>
    )
  }
}

export default App;
