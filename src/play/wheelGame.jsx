import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './wheelGame.css';

function App() {
  return (
    <div className="bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Wheel of Fun Times</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="wheelgame.html">Play</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="scores.html">Scores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="players">
          Player
          <span className="player-name"></span>
          <div id="player-messages"></div>
        </div>
        <h1>Give it a spin!</h1>
        <img src="https://static.vecteezy.com/system/resources/previews/001/192/278/non_2x/rainbow-spinning-wheel-png.png" />
        <button id="spin-button" style={{marginTop: '0.25in', marginBottom: '0.25in'}}>Spin</button>
        <div>
          <label htmlFor="num-spins"># of spins:</label>
          <input type="text" id="num-spins" value="0" readOnly />
        </div>
        <div className="text-center" id="result-message"></div>
        <script src="game.js"></script>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));