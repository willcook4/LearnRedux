var redux = require('redux');

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

var store = redux.createStore(reducer);

// var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});
console.log('searchText should be "work"', store.getState());
