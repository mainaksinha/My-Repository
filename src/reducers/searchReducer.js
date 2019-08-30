import  initialState from '../json/details.json';


function searchReducer(state= initialState, action) {
  console.log(state,action);
  const {payload} = action;
  // state.details.filter(
  //   (val) => {
  //     console.log(val.title);
  //     console.log(val.title.includes(payload));
  //    return val.title.includes(payload)
  //   })
  switch (action.type) {
    case 'SEARCH_FILTER':
      return {
              ...state,
              details:initialState.details.filter(
             (val) => {
               console.log(val.title);
              return val.title.includes(payload)
             })
      };
    default: return state;
  }
}


// const applyFilter = searchTerm => article =>{
//   debugger;
//   return article.title.toLowerCase().includes(searchTerm.toLowerCase());
// }
export default searchReducer;
