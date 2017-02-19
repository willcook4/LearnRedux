var redux = require('redux');

console.log('Starting redux example');

var reducer = (state={name: 'Annonymous'}, action) => {
  // state = state || {name: 'Annonymous'}; Default state, This is now above in ES6 syntax
  // console.log('New Action', action);
  switch (action.type) {
  case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
    default:
      return state; // No changes to state, always returns a state.
  }
};

var store = redux.createStore(reducer);
// (store) Object to store entire application, takes a reducer (a pure function).

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Trevor'
});

console.log('Name should be Trevor', store.getState());