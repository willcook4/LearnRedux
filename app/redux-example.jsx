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
/* eslint-disable no-underscore-dangle */

// Gets chrome redux extension working
  const store = redux.createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */
// var store = redux.createStore(reducer, redux.compose);

  // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

// (store) Object to store entire application, takes a reducer (a pure function).

// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});



store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emma'
});

// console.log('Name should be Trevor', store.getState());