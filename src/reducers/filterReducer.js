
  var initialState = {
    "details": [
      { "id": "1", "title": "How to fetch data in React", "url": "https://www.robinwieruch.de/react-fetching-data/" }
    ]
  };
function filterReducer(state= initialState, action) {
  console.log(state,action);


  const {payload} = action;
  // state.details.filter(
  //   (val) => {
  //     console.log(val.title);
  //     console.log(val.title.includes(payload));
  //    return val.title.includes(payload)
  //   })
  switch (action.type) {
    case 'FILTER':
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
export default filterReducer;
