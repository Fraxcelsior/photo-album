import React from 'react';
import './App.css';
import AlbumsListContainer from './components/AlbumsListContainer';
import PhotoPageContainer from './components/PhotoPageContainer'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Photaisseur</h1>
        </header>

        <main>
          <Route exact path="/" component={AlbumsListContainer} />
          <Route exact path="/albums/:id" component={PhotoPageContainer} />
        </main>
      </div>
    );
  }
}

export default App;
