import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import './App.css';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (<div className="App">
      <nav className="navbar navbar-sark bg-dark">
        <span className="text-white">
            Billin newspaper
          </span>
      </nav>
      <h2 className="text-white">Billin articles</h2>
      <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
    </div>
    );
  }
}

export default App;
