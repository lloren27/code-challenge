import React, { Component } from 'react';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { ListOfArticles } from './components/listofArticles';
import { Articles } from './components/articles';
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
      <Navigation />
      <h2 className="text-white">Billin articles</h2>
      <div className="card">
        <div className="card-text">{JSON.stringify(this.state.articles, null, 2)}</div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
