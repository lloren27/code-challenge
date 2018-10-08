import React from 'react';
import PropTypes from 'prop-types';

import './articles.css';

const Article = ({ author, excerpt, title }) =>
  <div className="ArticleCard">
    <div className="Title">{title}</div>
    <div className="Author">{author}</div>
    <div className="Excerpt">{excerpt}</div>
  </div>;

Article.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
