import { combineReducers } from 'redux';

// import articleReducer from './articleReducer';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  // articlesState: articleReducer,
  articlesState: searchReducer,
  updateFilter: filterReducer
});

export default rootReducer;