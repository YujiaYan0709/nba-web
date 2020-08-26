import React from 'react';
import TopNavBar from './TopNavBar';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <Main />
      </div>
    );
  }
}

export default App;
