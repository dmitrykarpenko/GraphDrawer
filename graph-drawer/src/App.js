import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoaded: false,
      node: null,
      error: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:50279/api/graphs/default")
      .then(res => res.json())
      .then(
        node => {
          this.setState({
            isLoaded: true,
            node: node
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const node =  this.state.node;
    console.log(node);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {
            node ? (
              <p>
                Parent node name: {node.name}
              </p>
            ) : null
          }
        </header>
      </div>
    );
  }
}

export default App;
