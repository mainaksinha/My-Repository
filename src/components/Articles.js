import React from 'react';
import {Article} from './Article';

export const Articles = ({ articles }) => 
  <div className="articleListWrap">
  <ul>
    {articles.details.map(article =>
      <li className="list-group-item" key={article.id}>
        <Article article={article} />
      </li>
    )}
  </ul>
  </div>
