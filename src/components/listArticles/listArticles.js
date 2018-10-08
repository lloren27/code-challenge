
import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import Article from '../articles/articles';

class ListArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  renderCards = articles => articles.map(article => (
    <Article key={article.title} {...article} />
  ));

  render() {
    const { articles } = this.state;
    return (
      <div className="row">
        <div className="col-md-4">
          {this.renderCards(articles)}
        </div>
      </div>
    );
  }
}

export default ListArticles;
