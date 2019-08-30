import React from 'react';
import { connect } from 'react-redux';
import  {forms} from 'bootstrap-css';
import '../index.css';
import {Search} from './Search';
import {Articles} from './Articles';
import {searchItem} from '../actions/action';
// const applyFilter = searchTerm => article =>
//   article.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = ({ articles, searchTerm, onSearch }) => {
  console.log(articles);
return (<div>
    <Search value={searchTerm} onSearch={onSearch}/>
    <Articles articles={articles} />
  </div>)
}


export default App;