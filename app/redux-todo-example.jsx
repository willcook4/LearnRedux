var redux = require('redux');

// Add subscribe call, should take the new search text and render it to the browser each time the state changes.

console.log('Starting redux-todo-example');
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

/* eslint-disable no-underscore-dangle */
// Gets chrome redux extension working
  const store = redux.createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

let unsubscribe = store.subscribe(()=>{
  let state = store.getState();
  // console.log('searchText is ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// var store = redux.createStore(reducer);

// var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});
console.log('searchText should be "work"', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Eat'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Pray'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Love'
});