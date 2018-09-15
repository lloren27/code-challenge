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
      <nav className="navbar navbar-sark bg-dark">
        <div className="container-fluid text-center text-md-left text-white">
          <div className="row">
            <div className="col-md-12 mt-md-0 mt-3">
              <h5 className="text-uppercase">Contacto</h5>
              <p>Puedes contactar con nosotros en la web.</p>
            </div>
          </div>
          <div className="text-center">© 2018 Copyright:
               <a href="https://www.billin.net/"> Billin.net</a>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

export default App;
