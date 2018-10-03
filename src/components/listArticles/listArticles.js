
import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import Article from '../articles/articles';

class listArticles extends Component {
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
      <div>
        {articles.length ?
          <Grid columns={3} gutter={8} spaceBetween={8}>
            {this.renderCards(articles)}
          </Grid> : null
        }
      </div>
    );
  }
}

export default listArticles;
