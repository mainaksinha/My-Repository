import { connect } from 'react-redux';
import App from '../components/App';
import {searchItem} from '../actions/action';

// connecting view layer to state layer with react-redux

export const mapStateToProps = state =>{
    console.log(state);
     return ({
      articles: state.articlesState
    });
    }
    
export const mapDispatchToProps = dispatch => ({
      onSearch: search => dispatch(searchItem(search))
    });
    
export const AppContainer =  connect(mapStateToProps, mapDispatchToProps)(App);
    