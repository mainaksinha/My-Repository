import { createStore,compose } from 'redux';
import rootReducer from '../reducers';
import  initialState from '../json/details.json';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer,initialState,enhancers);
console.log(store.getState());

export default store;