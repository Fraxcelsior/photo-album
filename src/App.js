import React from 'react';
import './App.css';
import AlbumsListContainer from './components/AlbumsListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Photaisseur</h1>
        </header>

        <main>
          <AlbumsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
