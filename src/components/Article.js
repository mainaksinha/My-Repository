import React from 'react';

export const Article = ({ article }) =>
<a href={article.url}>{article.title}</a>